import { router } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarSpinner from "../components/AvatarSpinner";
import TwirlBackground from "../components/TwirlBackground";

const PULSE_MIN = 1;
const PULSE_MAX = 1.08;
const PULSE_DURATION = 1400;

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
    }, 3000);

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
                Stand by as we log you in...
              </Animated.Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}