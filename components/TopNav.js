import { router, usePathname } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing, Platform, Pressable, Text, View } from "react-native";
import styles from "../styles/topNavStyles";

export default function TopNav() {
  const pathname = usePathname();

  const tabs = [
    { label: "Dashboard", route: "/home", weight: 1.18 },
    { label: "Debt", route: "/debt", weight: 0.82 },
    { label: "Spending", route: "/spending", weight: 1.18 },
    { label: "Credit", route: "/credit", weight: 0.95 },
    { label: "Accounts", route: "/accounts", weight: 1.16 },
  ];

  const getIndexFromPath = () => {
    const foundIndex = tabs.findIndex((tab) => pathname.startsWith(tab.route));
    return foundIndex >= 0 ? foundIndex : -1;
  };

  const routeIndex = getIndexFromPath();

  const [activeIndex, setActiveIndex] = useState(routeIndex);
  const [trackWidth, setTrackWidth] = useState(0);
  const [textWidths, setTextWidths] = useState({});

  const underlineAnim = useRef(
    new Animated.Value(routeIndex >= 0 ? routeIndex : 0)
  ).current;

  useEffect(() => {
    setActiveIndex(routeIndex);

    if (routeIndex >= 0) {
      Animated.timing(underlineAnim, {
        toValue: routeIndex,
        duration: 120,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }
  }, [routeIndex, underlineAnim]);

  const goToTab = (index, route) => {
    if (index === activeIndex) return;

    setActiveIndex(index);

    Animated.timing(underlineAnim, {
      toValue: index,
      duration: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    router.replace(route);
  };

  const allTextMeasured = Object.keys(textWidths).length === tabs.length;

  const measuredTextWidths = tabs.map((_, index) => textWidths[index] ?? 0);

  const androidMinGap = 8;

  const totalTextWidth = measuredTextWidths.reduce(
    (sum, width) => sum + width,
    0
  );

  const androidGap =
    trackWidth > 0 && allTextMeasured
      ? Math.max(
          (trackWidth - totalTextWidth) / (tabs.length - 1),
          androidMinGap
        )
      : androidMinGap;

  const underlineSections = useMemo(() => {
    if (Platform.OS === "web") {
      const sectionWidth = trackWidth / tabs.length;

      return tabs.map((_, index) => ({
        x: index * sectionWidth,
        width: sectionWidth,
      }));
    }

    if (!trackWidth || !allTextMeasured) {
      return tabs.map(() => ({ x: 0, width: 0 }));
    }

    const weightedWidths = tabs.map((tab, index) =>
      Math.max(
        measuredTextWidths[index] * tab.weight,
        measuredTextWidths[index] + 8
      )
    );

    const totalWeightedWidth = weightedWidths.reduce(
      (sum, width) => sum + width,
      0
    );

    const scale = trackWidth / totalWeightedWidth;

    let x = 0;

    const sections = tabs.map((_, index) => {
      const width = weightedWidths[index] * scale;
      const section = { x, width };

      x += width;

      return section;
    });

    const debtIntoDashboard = 7;
    const creditIntoAccounts = 7;

    sections[0].width -= debtIntoDashboard;
    sections[1].x -= debtIntoDashboard;
    sections[1].width += debtIntoDashboard;

    sections[3].width += creditIntoAccounts;
    sections[4].x += creditIntoAccounts;
    sections[4].width -= creditIntoAccounts;

    return sections;
  }, [allTextMeasured, measuredTextWidths, tabs, trackWidth]);

  const translateX = underlineAnim.interpolate({
    inputRange: tabs.map((_, index) => index),
    outputRange: underlineSections.map((section) => section.x),
  });

  const underlineWidth =
    activeIndex >= 0 ? underlineSections[activeIndex]?.width ?? 0 : 0;

  return (
    <View style={styles.frame155}>
      <View style={styles.topNav}>
        {tabs.map((tab, index) => (
          <Pressable
            key={tab.label}
            style={[
              styles.navTab,
              Platform.OS === "web"
                ? { flex: 1 }
                : {
                    width: measuredTextWidths[index] || undefined,
                    marginRight: index === tabs.length - 1 ? 0 : androidGap,
                  },
            ]}
            hitSlop={8}
            onPress={() => goToTab(index, tab.route)}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="clip"
              onLayout={(e) => {
                const { width } = e.nativeEvent.layout;

                setTextWidths((prev) => ({
                  ...prev,
                  [index]: Math.ceil(width),
                }));
              }}
              style={[
                styles.dashboardLetter,
                index === activeIndex
                  ? styles.dashboardLetterActive
                  : styles.dashboardLetterInactive,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <View
        style={styles.navTrack}
        onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
      >
        {activeIndex >= 0 && trackWidth > 0 && underlineWidth > 0 && (
          <Animated.View
            style={[
              styles.navUnderlineActive,
              {
                width: underlineWidth,
                transform: [{ translateX }],
              },
            ]}
          />
        )}
      </View>
    </View>
  );
}