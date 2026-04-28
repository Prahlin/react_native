import { router, usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";
import styles from "../styles/topNavStyles";

export default function TopNav() {
  const pathname = usePathname();

  const tabs = [
    { label: "Dashboard", route: "/home" },
    { label: "Debt", route: "/debt" },
    { label: "Spending", route: "/spending" },
    { label: "Credit", route: "/credit" },
    { label: "Accounts", route: "/accounts" },
  ];

  const getIndexFromPath = () => {
    const foundIndex = tabs.findIndex((tab) => tab.route === pathname);
    return foundIndex >= 0 ? foundIndex : 0;
  };

  const currentIndex = getIndexFromPath();

  // 🔥 instantly correct on mount (no delay)
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
    // 🔥 NO animation here — instant sync
    underlineAnim.setValue(currentIndex);
    widthScale.setValue(1);

    setSelectedIndex(currentIndex);
    setSelectedDirection("ltr");
    setSelectedLetterCount(tabs[currentIndex].label.length);

    return () => clearLetterTimers();
  }, [currentIndex]);

  const animateLetters = (fromIndex, targetIndex, totalDuration) => {
    clearLetterTimers();

    const direction = targetIndex > fromIndex ? "ltr" : "rtl";
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
    const fromIndex = currentIndex;

    const totalDuration = index === 0 ? 320 : 110;

    animateLetters(fromIndex, index, totalDuration);

    Animated.parallel([
      Animated.timing(underlineAnim, {
        toValue: index,
        duration: totalDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(widthScale, {
        toValue: 1,
        duration: totalDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start(({ finished }) => {
      if (finished) router.push(route);
    });
  };

  const stepWidth = trackWidth / 5;

  const translateX = underlineAnim.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [
      0,
      1 * stepWidth,
      2 * stepWidth,
      3 * stepWidth,
      4 * stepWidth,
    ],
  });

  const renderAnimatedLabel = (label, tabIndex) => {
    const chars = label.split("");
    const isActive = tabIndex === selectedIndex;

    return (
      <View style={styles.dashboardLetterRow}>
        {chars.map((char, charIndex) => (
          <Text
            key={`${label}-${char}-${charIndex}`}
            style={[
              styles.dashboardLetter,
              isActive
                ? styles.dashboardLetterActive
                : styles.dashboardLetterInactive,
            ]}
          >
            {char}
          </Text>
        ))}
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
            trackWidth > 0 && {
              width: stepWidth,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </View>
  );
}