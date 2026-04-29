import { router, usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  Text,
  View,
} from "react-native";
import styles from "../styles/topNavStyles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ESTIMATED_TRACK_WIDTH = SCREEN_WIDTH - 36;

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
    const foundIndex = tabs.findIndex((tab) =>
      pathname.startsWith(tab.route)
    );

    return foundIndex >= 0 ? foundIndex : 0;
  };

  const routeIndex = getIndexFromPath();

  const [activeIndex, setActiveIndex] = useState(routeIndex);
  const [trackWidth, setTrackWidth] = useState(ESTIMATED_TRACK_WIDTH);

  const underlineAnim = useRef(new Animated.Value(routeIndex)).current;

  useEffect(() => {
    setActiveIndex(routeIndex);

    Animated.timing(underlineAnim, {
      toValue: routeIndex,
      duration: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [routeIndex]);

  const goToTab = (index, route) => {
    if (index === activeIndex) return;

    // ✅ text changes immediately
    setActiveIndex(index);

    // ✅ underline moves immediately
    Animated.timing(underlineAnim, {
      toValue: index,
      duration: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    // ✅ route changes without waiting for animation
    router.replace(route);
  };

  const stepWidth = trackWidth / tabs.length;

  const translateX = underlineAnim.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [
      0,
      stepWidth,
      stepWidth * 2,
      stepWidth * 3,
      stepWidth * 4,
    ],
  });

  return (
    <View style={styles.frame155}>
      <View style={styles.topNav}>
        {tabs.map((tab, index) => (
          <Pressable
            key={tab.label}
            style={styles.navTab}
            onPress={() => goToTab(index, tab.route)}
          >
            <Text
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
        <Animated.View
          style={[
            styles.navUnderlineActive,
            {
              width: stepWidth,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </View>
  );
}