import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarSpinner from "../components/AvatarSpinner";
import TwirlBackground from "../components/TwirlBackground";
import Index from "./index";

const PULSE_MIN = 1;
const PULSE_MAX = 1.08;
const PULSE_DURATION = 1400;

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function LoadOut() {
  const pulseValue = useRef(new Animated.Value(PULSE_MIN)).current;
  const indexSlide = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const [showIndexOverlay, setShowIndexOverlay] = useState(false);

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
      setShowIndexOverlay(true);

      Animated.sequence([
        Animated.timing(indexSlide, {
          toValue: -12,
          duration: 360,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(indexSlide, {
          toValue: 0,
          friction: 4,
          tension: 90,
          useNativeDriver: true,
        }),
      ]).start(() => {
        router.replace("/");
      });
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      pulseAnimation.stop();
      pulseValue.stopAnimation();
      pulseValue.setValue(PULSE_MIN);
    };
  }, [pulseValue, indexSlide]);

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
            <TwirlBackground
              source={require("../assets/twirl-background-png-1.png")}
            />

            <View style={{ alignItems: "center", justifyContent: "center" }}>
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
      </ScrollView>

      {showIndexOverlay && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            transform: [{ translateX: indexSlide }],
          }}
        >
          <Index />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}