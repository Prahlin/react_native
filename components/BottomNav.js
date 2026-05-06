import { router, usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable } from "react-native";
import styles from "../styles/bottomNavStyles";
import { navCrossfadeProgress } from "./topNavScrollState";

export default function BottomNav() {
  const pathname = usePathname();

  const [navTouchable, setNavTouchable] = useState(false);
  const navTouchableRef = useRef(false);

  useEffect(() => {
    const listenerId = navCrossfadeProgress.addListener(({ value }) => {
      const nextTouchable = value > 0.02;

      if (nextTouchable !== navTouchableRef.current) {
        navTouchableRef.current = nextTouchable;
        setNavTouchable(nextTouchable);
      }
    });

    return () => {
      navCrossfadeProgress.removeListener(listenerId);
    };
  }, []);

  const bottomNavOpacity = navCrossfadeProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const activeTab = (() => {
    if (pathname === "/home") return "home";
    if (pathname === "/activity") return "activity";
    if (pathname === "/notifications") return "notifications";
    if (pathname === "/rewards") return "rewards";
    if (pathname === "/stats") return "stats";
    return "";
  })();

  return (
    <Animated.View
      pointerEvents={navTouchable ? "auto" : "none"}
      style={[
        styles.bottomNav,
        {
          opacity: bottomNavOpacity,
        },
      ]}
    >
      <Pressable onPress={() => router.replace("/home")}>
        <Image
          source={
            activeTab === "home"
              ? require("../assets/frame-26-blue.png")
              : require("../assets/frame-26.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable onPress={() => router.replace("/activity")}>
        <Image
          source={
            activeTab === "activity"
              ? require("../assets/frame-27-blue.png")
              : require("../assets/frame-27.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable onPress={() => router.replace("/notifications")}>
        <Image
          source={
            activeTab === "notifications"
              ? require("../assets/frame-28-blue.png")
              : require("../assets/frame-28.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable onPress={() => router.replace("/rewards")}>
        <Image
          source={
            activeTab === "rewards"
              ? require("../assets/frame-29-blue.png")
              : require("../assets/frame-29.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable onPress={() => router.replace("/stats")}>
        <Image
          source={
            activeTab === "stats"
              ? require("../assets/frame-31-blue.png")
              : require("../assets/frame-31.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>
    </Animated.View>
  );
}