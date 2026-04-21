import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";
import styles from "../styles/topNavStyles";

export default function TopNav({ currentIndex = 0 }) {
  const tabs = [
    { label: "Dashboard", route: "/home" },
    { label: "Debt", route: "/debt" },
    { label: "Spending", route: "/spending" },
    { label: "Credit", route: "/credit" },
    { label: "Accounts", route: "/accounts" },
  ];

  const underlineAnim = useRef(new Animated.Value(currentIndex)).current;
  const widthScale = useRef(new Animated.Value(1)).current;
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);
  const [selectedLetterCount, setSelectedLetterCount] = useState(
    tabs[currentIndex].label.length
  );
  const [selectedDirection, setSelectedDirection] = useState("ltr");
  const [trackWidth, setTrackWidth] = useState(0);
  const letterTimers = useRef([]);

  const clearLetterTimers = () => {
    letterTimers.current.forEach(clearTimeout);
    letterTimers.current = [];
  };

  useEffect(() => {
    Animated.timing(underlineAnim, {
      toValue: currentIndex,
      duration: 110,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    setSelectedIndex(currentIndex);
    setSelectedLetterCount(tabs[currentIndex].label.length);
    setSelectedDirection("ltr");

    return () => clearLetterTimers();
  }, [currentIndex, underlineAnim]);

  const animateLetters = (targetIndex, totalDuration) => {
    clearLetterTimers();

    const direction = targetIndex > currentIndex ? "ltr" : "rtl";
    const totalLetters = tabs[targetIndex].label.length;
    const stepDuration = totalDuration / totalLetters;

    setSelectedIndex(targetIndex);
    setSelectedDirection(direction);
    setSelectedLetterCount(0);

    tabs[targetIndex].label.split("").forEach((_, index) => {
      const timer = setTimeout(() => {
        setSelectedLetterCount(index + 1);
      }, stepDuration * index);

      letterTimers.current.push(timer);
    });
  };

  const goToTab = (index, route) => {
    if (index === currentIndex) {
      animateLetters(index, 320);

      if (currentIndex === 0) {
        Animated.parallel([
          Animated.sequence([
            Animated.timing(underlineAnim, {
              toValue: -0.1,
              duration: 180,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
            Animated.timing(underlineAnim, {
              toValue: 0,
              duration: 140,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
          ]),
          Animated.sequence([
            Animated.timing(widthScale, {
              toValue: 0.65,
              duration: 180,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
            Animated.timing(widthScale, {
              toValue: 1,
              duration: 140,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
          ]),
        ]).start();
      } else if (currentIndex === 4) {
        Animated.parallel([
          Animated.sequence([
            Animated.timing(underlineAnim, {
              toValue: currentIndex + 0.1,
              duration: 180,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
            Animated.timing(underlineAnim, {
              toValue: currentIndex,
              duration: 140,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
          ]),
          Animated.sequence([
            Animated.timing(widthScale, {
              toValue: 0.65,
              duration: 180,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
            Animated.timing(widthScale, {
              toValue: 1,
              duration: 140,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
          ]),
        ]).start();
      } else {
        Animated.parallel([
          Animated.sequence([
            Animated.timing(underlineAnim, {
              toValue: currentIndex - 0.1,
              duration: 180,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
            Animated.timing(underlineAnim, {
              toValue: currentIndex,
              duration: 140,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
          ]),
          Animated.sequence([
            Animated.timing(widthScale, {
              toValue: 0.65,
              duration: 180,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
            Animated.timing(widthScale, {
              toValue: 1,
              duration: 140,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }),
          ]),
        ]).start();
      }

      return;
    }

    if (index === 0) {
      const totalDuration = 320;
      animateLetters(index, totalDuration);

      Animated.timing(underlineAnim, {
        toValue: 0,
        duration: totalDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) router.push(route);
      });

      return;
    }

    const totalDuration = 110;
    animateLetters(index, totalDuration);

    Animated.timing(underlineAnim, {
      toValue: index,
      duration: totalDuration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) router.push(route);
    });
  };

  const stepWidth = trackWidth / 5;

  const translateX = underlineAnim.interpolate({
    inputRange: [-0.1, 0, 1, 2, 3, 4, 4.1],
    outputRange: [
      -0.1 * stepWidth,
      0,
      1 * stepWidth,
      2 * stepWidth,
      3 * stepWidth,
      4 * stepWidth,
      4.1 * stepWidth,
    ],
  });

  const renderAnimatedLabel = (label, tabIndex) => {
    const chars = label.split("");

    return (
      <View style={styles.dashboardLetterRow}>
        {chars.map((char, charIndex) => {
          const isTargetTab = tabIndex === selectedIndex;
          let isBlue = false;

          if (isTargetTab) {
            if (selectedLetterCount >= chars.length) {
              isBlue = true;
            } else if (selectedDirection === "rtl") {
              const fromRightIndex = chars.length - 1 - charIndex;
              isBlue = fromRightIndex < selectedLetterCount;
            } else {
              isBlue = charIndex < selectedLetterCount;
            }
          }

          return (
            <Text
              key={`${label}-${char}-${charIndex}`}
              style={[
                styles.dashboardLetter,
                isBlue
                  ? styles.dashboardLetterActive
                  : styles.dashboardLetterInactive,
              ]}
            >
              {char}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.frame155}>
      <View style={styles.topNav}>
        {tabs.map((tab, index) => (
          <Pressable
            key={tab.label}
            style={styles.navTab}
            onPress={() => goToTab(index, tab.route)}
          >
            {renderAnimatedLabel(tab.label, index)}
          </Pressable>
        ))}
      </View>

      <View
        style={styles.navTrack}
        onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
      >
        <Animated.View
          style={[
            styles.navUnderlineActive,
            trackWidth > 0
              ? {
                  width: widthScale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, stepWidth],
                  }),
                  transform: [{ translateX }],
                }
              : {
                  width: "20%",
                  left: `${currentIndex * 20}%`,
                },
          ]}
        />
      </View>
    </View>
  );
}