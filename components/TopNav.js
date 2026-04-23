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
    return foundIndex >= 0 ? foundIndex : -1;
  };

  const currentIndex = getIndexFromPath();
  const isTopNavRoute = currentIndex !== -1;

  const underlineAnim = useRef(
    new Animated.Value(isTopNavRoute ? currentIndex : 0)
  ).current;
  const widthScale = useRef(new Animated.Value(isTopNavRoute ? 1 : 0)).current;

  const [selectedIndex, setSelectedIndex] = useState(
    isTopNavRoute ? currentIndex : 0
  );
  const [selectedLetterCount, setSelectedLetterCount] = useState(
    isTopNavRoute ? tabs[currentIndex].label.length : 0
  );
  const [selectedDirection, setSelectedDirection] = useState("ltr");
  const [trackWidth, setTrackWidth] = useState(0);

  const letterTimers = useRef([]);

  const clearLetterTimers = () => {
    letterTimers.current.forEach(clearTimeout);
    letterTimers.current = [];
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(underlineAnim, {
        toValue: isTopNavRoute ? currentIndex : 0,
        duration: 110,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(widthScale, {
        toValue: isTopNavRoute ? 1 : 0,
        duration: 110,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start();

    setSelectedIndex(isTopNavRoute ? currentIndex : 0);
    setSelectedDirection("ltr");
    setSelectedLetterCount(
      isTopNavRoute ? tabs[currentIndex].label.length : 0
    );

    return () => clearLetterTimers();
  }, [currentIndex, isTopNavRoute, underlineAnim, widthScale]);

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
    const fromIndex = isTopNavRoute ? currentIndex : 0;

    if (isTopNavRoute && index === currentIndex) {
      animateLetters(fromIndex, index, 320);

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
    const isCurrentTab = isTopNavRoute && tabIndex === currentIndex;
    const isTargetTab = tabIndex === selectedIndex;

    return (
      <View style={styles.dashboardLetterRow}>
        {chars.map((char, charIndex) => {
          let isBlue = false;

          if (isCurrentTab || isTargetTab) {
            if (selectedLetterCount >= chars.length && isTargetTab) {
              isBlue = true;
            } else if (isCurrentTab && !isTargetTab) {
              isBlue = true;
            } else if (isTargetTab) {
              if (selectedDirection === "rtl") {
                const fromRightIndex = chars.length - 1 - charIndex;
                isBlue = fromRightIndex < selectedLetterCount;
              } else {
                isBlue = charIndex < selectedLetterCount;
              }
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
                  width: isTopNavRoute ? "20%" : 0,
                  left: isTopNavRoute ? `${currentIndex * 20}%` : "0%",
                },
          ]}
        />
      </View>
    </View>
  );
}