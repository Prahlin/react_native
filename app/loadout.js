import { router } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarSpinner from "../components/AvatarSpinner";
import { resetBellClickedState } from "../components/HeaderBar";

const AnimatedPatternImage = Animated.createAnimatedComponent(Image);

const IS_ANDROID = Platform.OS === "android";

const PULSE_MIN = 1;
const PULSE_MAX = 1.08;
const PULSE_DURATION = 1400;

const RIPPLE_START = 0;
const RIPPLE_END = 1.15;
const RIPPLE_DURATION = 1100;
const RIPPLE_WAVE_WIDTH = 0.12;
const RIPPLE_BLEND_RATIO = 0.5;

const CENTER_CLEAR_PHASE = 0.04;
const CENTER_FADE_PHASE = 0.09;
const CENTER_INNER_OPACITY_MULTIPLIER = 0.75;

const ROWS = 25;
const PAIRS_PER_ROW = 5;

const PATTERN_MAX_VISIBLE_OPACITY = 0.1;

const getPatternOpacity = (topPercent, leftPercent) => {
  const centerX = 50;
  const centerY = 50;

  const dx = leftPercent - centerX;
  const dy = topPercent - centerY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = 70;

  const normalized = Math.min(distance / maxDistance, 1);
  const curved = Math.pow(normalized, 1.8);

  const verticalProximity = 1 - Math.min(Math.abs(dx) / 50, 1);
  const verticalBoost = verticalProximity * 0.04;

  const minOpacity = 0.005;
  const maxOpacity = 0.35;

  let opacity =
    minOpacity + curved * (maxOpacity - minOpacity) + verticalBoost;

  const faintZones = [
    { x: 0, y: 0, radius: 44, strength: 0.3 },
    { x: 100, y: 0, radius: 44, strength: 0.3 },
    { x: 0, y: 100, radius: 44, strength: 0.3 },
    { x: 100, y: 100, radius: 44, strength: 0.3 },

    // Smaller, weaker center quiet zone so the ripple can encroach closer
    // to the loading spinner without overpowering it.
    { x: 50, y: 50, radius: 12, strength: 0.04, squashY: 1.15 },
  ];

  let nearestZoneDistance = Infinity;

  faintZones.forEach((zone) => {
    let zoneDx = leftPercent - zone.x;
    let zoneDy = topPercent - zone.y;

    if (zone.squashY) {
      zoneDy *= zone.squashY;
    }

    const zoneDistance = Math.sqrt(zoneDx * zoneDx + zoneDy * zoneDy);

    nearestZoneDistance = Math.min(nearestZoneDistance, zoneDistance);

    if (zoneDistance < zone.radius) {
      const t = zoneDistance / zone.radius;
      const smoothT = t * t * (3 - 2 * t);
      const fadeStrength = 1 - smoothT;

      opacity -= fadeStrength * zone.strength;
    }
  });

  const farOpacityStart = 18;
  const farOpacityEnd = 42;

  const farNormalized = Math.min(
    Math.max(
      (nearestZoneDistance - farOpacityStart) /
        (farOpacityEnd - farOpacityStart),
      0
    ),
    1
  );

  const farBoostCurve = Math.pow(farNormalized, 1.6);
  const farOpacityBoost = farBoostCurve * 0.09;

  opacity += farOpacityBoost;

  return Math.max(0, Math.min(opacity, PATTERN_MAX_VISIBLE_OPACITY));
};

const getRipplePhase = (topPercent, leftPercent) => {
  const centerX = 50;
  const centerY = 50;

  const dx = leftPercent - centerX;
  const dy = topPercent - centerY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = 70;

  return Math.min(distance / maxDistance, 1);
};

const getCenterOpacityMultiplier = (ripplePhase) => {
  if (ripplePhase <= CENTER_CLEAR_PHASE) {
    return CENTER_INNER_OPACITY_MULTIPLIER;
  }

  if (ripplePhase >= CENTER_FADE_PHASE) {
    return 1;
  }

  const t =
    (ripplePhase - CENTER_CLEAR_PHASE) /
    (CENTER_FADE_PHASE - CENTER_CLEAR_PHASE);

  const smoothT = t * t * (3 - 2 * t);

  return (
    CENTER_INNER_OPACITY_MULTIPLIER +
    smoothT * (1 - CENTER_INNER_OPACITY_MULTIPLIER)
  );
};

const BACKGROUND_ICONS = Array.from({
  length: ROWS * PAIRS_PER_ROW * 2,
}).map((_, i) => {
  const pairIndex = Math.floor(i / 2);
  const row = Math.floor(pairIndex / PAIRS_PER_ROW);
  const col = pairIndex % PAIRS_PER_ROW;

  const isCrown = i % 2 === 1;
  const isOffsetRow = row % 2 === 1;

  const baseLeft = col * 20 + 2;
  const offsetLeft = col * 20 + 12;
  const pairStartLeft = isOffsetRow ? offsetLeft : baseLeft;

  const crownOffset = 5.5;

  const baseTop = row * 4.1 + 1;
  const adjustedTop = isCrown ? baseTop : baseTop - 1.55;

  const finalLeft = pairStartLeft + (isCrown ? crownOffset : 0);

  const ripplePhase = getRipplePhase(adjustedTop, finalLeft);
  const centerOpacityMultiplier = getCenterOpacityMultiplier(ripplePhase);

  const baseOpacity =
    getPatternOpacity(adjustedTop, finalLeft) * centerOpacityMultiplier;

  return {
    id: i,
    isCrown,
    top: `${adjustedTop}%`,
    left: `${finalLeft}%`,
    androidLeft: `${pairStartLeft - 4}%`,
    baseOpacity,
    ripplePhase,
  };
});

const getRippleOpacity = (rippleValue, ripplePhase, maxOpacity) => {
  const safePhase = Math.max(ripplePhase, 0.001);
  const start = Math.max(safePhase - RIPPLE_WAVE_WIDTH, RIPPLE_START);
  const end = Math.min(safePhase + RIPPLE_WAVE_WIDTH, RIPPLE_END);
  const blendOpacity = maxOpacity * RIPPLE_BLEND_RATIO;

  if (start <= RIPPLE_START) {
    return rippleValue.interpolate({
      inputRange: [RIPPLE_START, safePhase, end, RIPPLE_END],
      outputRange: [0, maxOpacity, blendOpacity, 0],
      extrapolate: "clamp",
    });
  }

  return rippleValue.interpolate({
    inputRange: [RIPPLE_START, start, safePhase, end, RIPPLE_END],
    outputRange: [0, blendOpacity, maxOpacity, blendOpacity, 0],
    extrapolate: "clamp",
  });
};

export default function LoadOut() {
  const pulseValue = useRef(new Animated.Value(PULSE_MIN)).current;
  const rippleValue = useRef(new Animated.Value(RIPPLE_START)).current;

  useEffect(() => {
    let pulseAnimation;
    let rippleAnimation;
    let timeoutId;
    let didCancel = false;

    const startAnimations = () => {
      if (didCancel) return;

      pulseValue.stopAnimation();
      pulseValue.setValue(PULSE_MIN);

      rippleValue.stopAnimation();
      rippleValue.setValue(RIPPLE_START);

      pulseAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseValue, {
            toValue: PULSE_MAX,
            duration: PULSE_DURATION,
            easing: Easing.linear,
            useNativeDriver: true,
            isInteraction: false,
          }),
          Animated.timing(pulseValue, {
            toValue: PULSE_MIN,
            duration: PULSE_DURATION,
            easing: Easing.linear,
            useNativeDriver: true,
            isInteraction: false,
          }),
        ])
      );

      rippleAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(rippleValue, {
            toValue: RIPPLE_END,
            duration: RIPPLE_DURATION,
            easing: Easing.linear,
            useNativeDriver: true,
            isInteraction: false,
          }),

          Animated.timing(rippleValue, {
            toValue: RIPPLE_START,
            duration: RIPPLE_DURATION,
            easing: Easing.linear,
            useNativeDriver: true,
            isInteraction: false,
          }),

          Animated.delay(140),
        ])
      );

      pulseAnimation.start();
      rippleAnimation.start();
    };

    startAnimations();

    timeoutId = setTimeout(() => {
      resetBellClickedState();

      router.replace({
        pathname: "/",
        params: { fromLoadout: "1" },
      });
    }, 3000);

    return () => {
      didCancel = true;

      clearTimeout(timeoutId);

      if (pulseAnimation) {
        pulseAnimation.stop();
      }

      if (rippleAnimation) {
        rippleAnimation.stop();
      }

      pulseValue.stopAnimation();
      pulseValue.setValue(PULSE_MIN);

      rippleValue.stopAnimation();
      rippleValue.setValue(RIPPLE_START);
    };
  }, [pulseValue, rippleValue]);

  const textOpacity = pulseValue.interpolate({
    inputRange: [PULSE_MIN, PULSE_MAX],
    outputRange: [0.5, 1],
    extrapolate: "clamp",
  });

  const screenContent = (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <View
          pointerEvents="none"
          style={[StyleSheet.absoluteFillObject, { zIndex: 1 }]}
        >
          {BACKGROUND_ICONS.map((icon) => {
            const animatedPatternOpacity = getRippleOpacity(
              rippleValue,
              icon.ripplePhase,
              icon.baseOpacity
            );

            return (
              <AnimatedPatternImage
                key={icon.id}
                source={
                  icon.isCrown
                    ? require("../assets/fancy_crown.png")
                    : require("../assets/wand.png")
                }
                style={{
                  position: "absolute",
                  width: icon.isCrown ? 22 : 40,
                  height: icon.isCrown ? 22 : 40,
                  opacity: animatedPatternOpacity,
                  top: icon.top,
                  left:
                    !icon.isCrown && IS_ANDROID
                      ? icon.androidLeft
                      : icon.left,
                }}
                resizeMode="contain"
              />
            );
          })}
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <AvatarSpinner
            size={92}
            innerSize={57}
            personSize={22}
            personSource={require("../assets/loading-man.png")}
            pulseValue={pulseValue}
            pulseMin={PULSE_MIN}
            pulseMax={PULSE_MAX}
            spinDuration={PULSE_DURATION}
          />

          <Animated.Text
            style={{
              color: "#FFD700",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: 14,
              marginTop: 10,
              opacity: textOpacity,
            }}
          >
            Stand by as we log you out...
          </Animated.Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      edges={IS_ANDROID ? [] : ["top", "right", "bottom", "left"]}
      style={{ flex: 1, backgroundColor: "#6A79D1" }}
    >
      {IS_ANDROID ? (
        <View style={{ flex: 1, backgroundColor: "#6A79D1" }}>
          {screenContent}
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ flex: 1, backgroundColor: "#6A79D1" }}
        >
          {screenContent}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}