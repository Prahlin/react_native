import { Slot, usePathname } from "expo-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import BottomNav from "../components/BottomNav";
import { CrownWandPattern, GRAY_BG_COLOR } from "../components/gray_bg";
import HeaderBar from "../components/HeaderBar";
import {
  releaseChromeHide,
  useForceHideChrome,
} from "../components/navChromeState";
import TopNav from "../components/TopNav";
import {
  navCrossfadeProgress,
  resetNavCrossfadeProgress,
  resetTopNavScroll,
} from "../components/topNavScrollState";
import { UserProvider } from "../components/UserContext";

const TOP_NAV_ROUTES = ["/home", "/debt", "/spending", "/credit", "/accounts"];
const BOTTOM_NAV_ROUTES = ["/activity", "/notifications", "/rewards", "/stats"];

const IS_ANDROID = Platform.OS === "android";

function isMatchingRoute(pathname, routes) {
  return routes.some((route) => pathname === route || pathname.startsWith(route));
}

export default function RootLayout() {
  const pathname = usePathname();
  const forceHideChrome = useForceHideChrome();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const chromeSlideAnim = useRef(new Animated.Value(0)).current;
  const previousPathRef = useRef(pathname);
  const hasAnimatedChromeRef = useRef(false);

  const topNavHiddenRef = useRef(false);
  const bottomNavHiddenRef = useRef(false);

  const [topNavHidden, setTopNavHidden] = useState(false);
  const [bottomNavHidden, setBottomNavHidden] = useState(false);

  const isAuthOrLoadingScreen =
    pathname === "/" || pathname === "/loadin" || pathname === "/loadout";

  const hideNav = forceHideChrome || isAuthOrLoadingScreen;

  const isTopNavScreen = isMatchingRoute(pathname, TOP_NAV_ROUTES);
  const isBottomNavScreen = isMatchingRoute(pathname, BOTTOM_NAV_ROUTES);
  const isInAppScreen = isTopNavScreen || isBottomNavScreen;

  const topNavOpacity = navCrossfadeProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const bottomNavOpacity = navCrossfadeProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const setTopHiddenSafely = (nextValue) => {
    if (topNavHiddenRef.current === nextValue) return;

    topNavHiddenRef.current = nextValue;
    setTopNavHidden(nextValue);
  };

  const setBottomHiddenSafely = (nextValue) => {
    if (bottomNavHiddenRef.current === nextValue) return;

    bottomNavHiddenRef.current = nextValue;
    setBottomNavHidden(nextValue);
  };

  useLayoutEffect(() => {
    if (hideNav || !isInAppScreen) {
      resetTopNavScroll(0);
      resetNavCrossfadeProgress(0);

      setTopHiddenSafely(false);
      setBottomHiddenSafely(false);
      return;
    }

    const startingProgress = isBottomNavScreen ? 1 : 0;

    resetTopNavScroll(0);
    resetNavCrossfadeProgress(startingProgress);

    setTopHiddenSafely(isBottomNavScreen);
    setBottomHiddenSafely(isTopNavScreen);
  }, [pathname, hideNav, isInAppScreen, isTopNavScreen, isBottomNavScreen]);

  useEffect(() => {
    if (hideNav || !isInAppScreen) return;

    const listenerId = navCrossfadeProgress.addListener(({ value }) => {
      /*
        Hysteresis prevents Android from rapidly toggling visibility
        when scroll values jitter around the threshold.
      */

      if (value >= 0.985) {
        setTopHiddenSafely(true);
      } else if (value <= 0.94) {
        setTopHiddenSafely(false);
      }

      if (value <= 0.015) {
        setBottomHiddenSafely(true);
      } else if (value >= 0.06) {
        setBottomHiddenSafely(false);
      }
    });

    return () => {
      navCrossfadeProgress.removeListener(listenerId);
    };
  }, [hideNav, isInAppScreen]);

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
    <UserProvider>
      <View style={styles.root}>
        {!hideNav && (
          <Animated.View
            pointerEvents="box-none"
            collapsable={false}
            renderToHardwareTextureAndroid={IS_ANDROID}
            needsOffscreenAlphaCompositing={IS_ANDROID}
            style={[
              StyleSheet.absoluteFillObject,
              styles.headerLayer,
              chromeSlideStyle,
            ]}
          >
            <HeaderBar />
          </Animated.View>
        )}

        {!hideNav && isInAppScreen && (
          <Animated.View
            pointerEvents={topNavHidden ? "none" : "box-none"}
            collapsable={false}
            renderToHardwareTextureAndroid={IS_ANDROID}
            needsOffscreenAlphaCompositing={IS_ANDROID}
            style={[
              styles.topNavChromeWrap,
              {
                top: 80,
                opacity: topNavHidden ? 0 : topNavOpacity,
              },
              chromeSlideStyle,
            ]}
          >
            <Animated.View
              pointerEvents="none"
              collapsable={false}
              renderToHardwareTextureAndroid={IS_ANDROID}
              needsOffscreenAlphaCompositing={IS_ANDROID}
              style={styles.topNavChromeBackground}
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
            </Animated.View>

            <View style={styles.topNavInner}>
              <TopNav />
            </View>
          </Animated.View>
        )}

        <View
          style={[
            styles.slotWrap,
            {
              paddingTop: !hideNav && Platform.OS === "web" ? 10 : 0,
              backgroundColor: hideNav ? "#6A79D1" : "#ffffff",
            },
          ]}
        >
          <Slot />
        </View>

        {!hideNav && isInAppScreen && (
          <Animated.View
            pointerEvents={bottomNavHidden ? "none" : "box-none"}
            collapsable={false}
            renderToHardwareTextureAndroid={IS_ANDROID}
            needsOffscreenAlphaCompositing={IS_ANDROID}
            style={[
              StyleSheet.absoluteFillObject,
              styles.bottomNavLayer,
              {
                opacity: bottomNavHidden ? 0 : bottomNavOpacity,
              },
              chromeSlideStyle,
            ]}
          >
            <BottomNav />
          </Animated.View>
        )}
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  headerLayer: {
    zIndex: 1000,
    elevation: 1000,
  },

  topNavChromeWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "transparent",
    overflow: "visible",
    zIndex: 900,
    elevation: 900,
  },

  topNavChromeBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: GRAY_BG_COLOR,
    overflow: "hidden",
    zIndex: 0,
    elevation: 0,
  },

  topNavInner: {
    position: "relative",
    zIndex: 1,
    elevation: 1,
  },

  slotWrap: {
    flex: 1,
  },

  bottomNavLayer: {
    zIndex: 950,
    elevation: 950,
  },
});