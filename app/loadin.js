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

const PULSE_MIN = 1;
const PULSE_MAX = 1.08;
const PULSE_DURATION = 1400;

const ROWS = 25;
const PAIRS_PER_ROW = 5;

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
    minOpacity +
    curved * (maxOpacity - minOpacity) +
    verticalBoost;

const faintCircles = [
  // top-left edge zone
  { x: 25, y: 0 },

  // top-right edge zone
  { x: 75, y: 0 },

  // center spinner zone
  { x: 50, y: 50 },

  // bottom-left edge zone
  { x: 25, y: 100 },

  // bottom-right edge zone
  { x: 75, y: 100 },
];

faintCircles.forEach((circle) => {
  let dx = leftPercent - circle.x;
  let dy = topPercent - circle.y;

  // 👇 ONLY squash the CENTER circle vertically
  if (circle.x === 50 && circle.y === 50) {
    dy *= 1.8; // increase this = LESS fade above/below spinner
  }

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 22) {
    const fadeStrength = 1 - distance / 22;
    opacity -= fadeStrength * 0.22;
  }
});

  return Math.max(0.005, Math.min(opacity, 0.35));
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

  return {
    id: i,
    isCrown,
    top: `${adjustedTop}%`,
    left: `${finalLeft}%`,
    androidLeft: `${pairStartLeft - 4}%`,
    opacity: getPatternOpacity(adjustedTop, finalLeft),
  };
});

export default function LoadIn() {
  const pulseValue = useRef(new Animated.Value(PULSE_MIN)).current;

  useEffect(() => {
    pulseValue.stopAnimation();
    pulseValue.setValue(PULSE_MIN);

    const pulseAnimation = Animated.loop(
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

    pulseAnimation.start();

    const timeoutId = setTimeout(() => {
      router.replace({
        pathname: "/home",
        params: { fromLoadin: "1" },
      });
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
      pulseAnimation.stop();
      pulseValue.stopAnimation();
      pulseValue.setValue(PULSE_MIN);
    };
  }, [pulseValue]);

  const textOpacity = pulseValue.interpolate({
    inputRange: [PULSE_MIN, PULSE_MAX],
    outputRange: [0.5, 1],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6A79D1" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1, backgroundColor: "#6A79D1" }}
      >
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
            {/* Background pattern */}
            <View
              pointerEvents="none"
              style={[StyleSheet.absoluteFillObject, { zIndex: 1 }]}
            >
              {BACKGROUND_ICONS.map((icon) => (
                <Image
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
                    opacity: icon.opacity,
                    top: icon.top,
                    left:
                      !icon.isCrown && Platform.OS === "android"
                        ? icon.androidLeft
                        : icon.left,
                  }}
                  resizeMode="contain"
                />
              ))}
            </View>

            {/* Foreground spinner */}
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
                Stand by as we log you in...
              </Animated.Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}