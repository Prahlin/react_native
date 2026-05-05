import { Slot, usePathname } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import TopNav from "../components/TopNav";
import {
  CrownWandPattern,
  GRAY_BG_COLOR,
} from "../components/gray_bg";
import {
  releaseChromeHide,
  useForceHideChrome,
} from "../components/navChromeState";

export default function RootLayout() {
  const pathname = usePathname();
  const forceHideChrome = useForceHideChrome();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const chromeSlideAnim = useRef(new Animated.Value(0)).current;
  const previousPathRef = useRef(pathname);
  const hasAnimatedChromeRef = useRef(false);

  const isAuthOrLoadingScreen =
    pathname === "/" ||
    pathname === "/loadin" ||
    pathname === "/loadout";

  const hideNav = forceHideChrome || isAuthOrLoadingScreen;

  useEffect(() => {
    if (isAuthOrLoadingScreen) {
      releaseChromeHide();
    }
  }, [isAuthOrLoadingScreen]);

  useEffect(() => {
    const previousPath = previousPathRef.current;
    const cameFromLoadin = previousPath === "/loadin" && pathname === "/home";

    if (pathname === "/loadin") {
      hasAnimatedChromeRef.current = false;
      chromeSlideAnim.stopAnimation();
      chromeSlideAnim.setValue(-screenWidth);
      previousPathRef.current = pathname;
      return;
    }

    if (!hideNav && cameFromLoadin && !hasAnimatedChromeRef.current) {
      hasAnimatedChromeRef.current = true;

      chromeSlideAnim.stopAnimation();
      chromeSlideAnim.setValue(-screenWidth);

      Animated.sequence([
        Animated.timing(chromeSlideAnim, {
          toValue: 18,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(chromeSlideAnim, {
          toValue: -8,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(chromeSlideAnim, {
          toValue: 4,
          duration: 70,
          useNativeDriver: true,
        }),
        Animated.timing(chromeSlideAnim, {
          toValue: 0,
          duration: 80,
          useNativeDriver: true,
        }),
      ]).start();

      previousPathRef.current = pathname;
      return;
    }

    if (!hideNav && !cameFromLoadin) {
      chromeSlideAnim.stopAnimation();
      chromeSlideAnim.setValue(0);
    }

    previousPathRef.current = pathname;
  }, [chromeSlideAnim, hideNav, pathname, screenWidth]);

  const chromeSlideStyle = {
    transform: [{ translateX: chromeSlideAnim }],
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {!hideNav && (
        <Animated.View
          pointerEvents="box-none"
          style={[
            StyleSheet.absoluteFillObject,
            {
              zIndex: 1000,
              elevation: 1000,
            },
            chromeSlideStyle,
          ]}
        >
          <HeaderBar />
        </Animated.View>
      )}

      {!hideNav && (
        <Animated.View
          pointerEvents="box-none"
          style={[
            {
              position: "absolute",
              top: 80,
              left: 0,
              right: 0,
              paddingHorizontal: 8,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor: GRAY_BG_COLOR,
              overflow: "hidden",
              zIndex: 900,
              elevation: 900,
            },
            chromeSlideStyle,
          ]}
        >
          <CrownWandPattern
            style={{
              position: "absolute",
              top: -80,
              left: 0,
              right: 0,
              height: screenHeight,
            }}
          />

          <View style={{ zIndex: 1 }}>
            <TopNav />
          </View>
        </Animated.View>
      )}

      <View
        style={{
          flex: 1,
          paddingTop: !hideNav && Platform.OS === "web" ? 10 : 0,
          backgroundColor: hideNav ? "#6A79D1" : "#ffffff",
        }}
      >
        <Slot />
      </View>

      {!hideNav && (
        <Animated.View
          pointerEvents="box-none"
          style={[
            StyleSheet.absoluteFillObject,
            {
              zIndex: 950,
              elevation: 950,
            },
            chromeSlideStyle,
          ]}
        >
          <BottomNav />
        </Animated.View>
      )}
    </View>
  );
}