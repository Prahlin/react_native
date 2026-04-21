import { useEffect, useRef } from "react";
import { Animated, Easing, Platform, StyleSheet, View } from "react-native";

export default function AvatarSpinner({
  size = 92,
  innerSize = 57,
  personSize = 22,
  personSource,
  pulseValue,
  pulseMin = 1,
  pulseMax = 1.08,
  spinDuration = 1400,
}) {
  const outerSpinValue = useRef(new Animated.Value(0)).current;
  const innerSpinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shouldUseNativeDriver = Platform.OS !== "web";

    outerSpinValue.setValue(0);
    innerSpinValue.setValue(0);

    const outerAnimation = Animated.loop(
      Animated.timing(outerSpinValue, {
        toValue: 1,
        duration: spinDuration,
        easing: Easing.linear,
        useNativeDriver: shouldUseNativeDriver,
        isInteraction: false,
      })
    );

const innerAnimation = Animated.loop(
  Animated.timing(innerSpinValue, {
    toValue: 1,
    duration: spinDuration * 2,
    easing: Easing.linear,
    useNativeDriver: shouldUseNativeDriver,
    isInteraction: false,
  })
);

    outerAnimation.start();
    innerAnimation.start();

    return () => {
      outerAnimation.stop();
      innerAnimation.stop();
    };
  }, [outerSpinValue, innerSpinValue, spinDuration]);

  const outerSpin = outerSpinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const innerSpin = innerSpinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"],
  });

  const safePulseValue = pulseValue ?? new Animated.Value(1);

  const personOpacity = safePulseValue.interpolate({
    inputRange: [pulseMin, pulseMax],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const outlineScale = safePulseValue.interpolate({
    inputRange: [pulseMin, pulseMax],
    outputRange: [1.02, 1.14],
    extrapolate: "clamp",
  });

  const thirdScale = safePulseValue.interpolate({
    inputRange: [pulseMin, pulseMax],
    outputRange: [1.1, 1.18],
    extrapolate: "clamp",
  });

  const outlineOpacity = safePulseValue.interpolate({
    inputRange: [pulseMin, pulseMax],
    outputRange: [0.1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <View
        style={[
          styles.outerTrack,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />

      <Animated.View
        style={[
          styles.outerArc,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            transform: [{ rotate: outerSpin }],
          },
        ]}
      />

      <View
        style={[
          styles.innerTrack,
          {
            width: innerSize,
            height: innerSize,
            borderRadius: innerSize / 2,
          },
        ]}
      />

      <Animated.View
        style={[
          styles.innerArc,
          {
            width: innerSize,
            height: innerSize,
            borderRadius: innerSize / 2,
            transform: [{ rotate: innerSpin }],
          },
        ]}
      />

      <View
        style={[
          styles.personWrap,
          {
            width: personSize,
            height: personSize,
          },
        ]}
      >
        <Animated.Image
          source={personSource}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: personSize,
            height: personSize,
            transform: [{ scale: outlineScale }],
            opacity: outlineOpacity,
          }}
        />

        <Animated.Image
          source={personSource}
          resizeMode="contain"
          style={{
            width: personSize,
            height: personSize,
            transform: [{ scale: safePulseValue }],
            opacity: personOpacity,
          }}
        />

        <Animated.Image
          source={personSource}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: personSize,
            height: personSize,
            transform: [{ scale: thirdScale }],
            opacity: personOpacity,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  outerTrack: {
    position: "absolute",
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.20)",
  },

  outerArc: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "transparent",
    borderTopColor: "#FFD700",
    borderRightColor: "#FFD700",
  },

  innerTrack: {
    position: "absolute",
    borderWidth: 1.25,
    borderColor: "rgba(255,255,255,0.18)",
  },

  innerArc: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#FFD700",
    borderLeftColor: "#FFD700",
  },

  personWrap: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});