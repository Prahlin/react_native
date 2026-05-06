import { useRef } from "react";
import { Animated, Image, Platform, StyleSheet, View } from "react-native";
import {
  NAV_CROSSFADE_DISTANCE,
  navCrossfadeProgress,
  resetNavCrossfadeProgress,
  resetTopNavScroll,
  topNavScrollY,
} from "./topNavScrollState";

const IS_ANDROID = Platform.OS === "android";

const ROWS = 25;
const PAIRS_PER_ROW = 5;

export const GRAY_BG_COLOR = "#F4F5FB";

const CROWN_OPACITY = 0.05;
const WAND_OPACITY = CROWN_OPACITY * 0.5;

const BACKGROUND_ICONS = Array.from({
  length: ROWS * PAIRS_PER_ROW * 2,
}).map((_, i) => {
  const pairIndex = Math.floor(i / 2);
  const row = Math.floor(pairIndex / PAIRS_PER_ROW);
  const col = pairIndex % PAIRS_PER_ROW;

  const isCrown = i % 2 === 1;
  const isOffsetRow = row % 2 === 1;

  const baseLeft = col * 20 + 2;
  const offsetLeft = col * 20 + 12;
  const pairStartLeft = isOffsetRow ? offsetLeft : baseLeft;

  const crownOffset = 5.5;

  const baseTop = row * 4.1 + 1;
  const adjustedTop = isCrown ? baseTop : baseTop - 1.55;

  const finalLeft = pairStartLeft + (isCrown ? crownOffset : 0);

  return {
    id: i,
    isCrown,
    top: `${adjustedTop}%`,
    left: `${finalLeft}%`,
    androidLeft: `${pairStartLeft - 4}%`,
  };
});

export function CrownWandPattern({ style }) {
  return (
    <View pointerEvents="none" style={[styles.patternLayer, style]}>
      {BACKGROUND_ICONS.map((icon) => (
        <Image
          key={icon.id}
          source={
            icon.isCrown
              ? require("../assets/fancy_crown.png")
              : require("../assets/wand.png")
          }
          style={{
            position: "absolute",
            width: icon.isCrown ? 22 : 40,
            height: icon.isCrown ? 22 : 40,
            opacity: icon.isCrown ? CROWN_OPACITY : WAND_OPACITY,
            top: icon.top,
            left:
              !icon.isCrown && IS_ANDROID
                ? icon.androidLeft
                : icon.left,
          }}
          resizeMode="contain"
        />
      ))}
    </View>
  );
}

export default function GrayBg({
  children,
  paddingTop = 151,
  paddingHorizontal = 8,
  gap = 8,
  bottomPadding = 110,
  fadeTopNavOnScroll = false,
}) {
  const viewportHeightRef = useRef(0);
  const contentHeightRef = useRef(0);
  const previousScrollYRef = useRef(0);
  const navCrossfadeProgressRef = useRef(0);

  const setCrossfadeProgress = (value) => {
    const clampedValue = Math.max(0, Math.min(value, 1));

    navCrossfadeProgressRef.current = clampedValue;
    navCrossfadeProgress.setValue(clampedValue);

    topNavScrollY.setValue(clampedValue * NAV_CROSSFADE_DISTANCE);
  };

  const forceTopNavVisible = () => {
    previousScrollYRef.current = 0;
    setCrossfadeProgress(0);
  };

  const updateNavCrossfadeFromScroll = (scrollY) => {
    if (!viewportHeightRef.current || !contentHeightRef.current) {
      forceTopNavVisible();
      return;
    }

    const maxScrollY = Math.max(
      contentHeightRef.current - viewportHeightRef.current,
      0
    );

    const clampedScrollY = Math.max(0, Math.min(scrollY, maxScrollY));

    if (clampedScrollY <= 1) {
      forceTopNavVisible();
      return;
    }

    const scrollDelta = clampedScrollY - previousScrollYRef.current;

    previousScrollYRef.current = clampedScrollY;

    if (Math.abs(scrollDelta) < 0.25) return;

    const nextProgress =
      navCrossfadeProgressRef.current +
      scrollDelta / NAV_CROSSFADE_DISTANCE;

    setCrossfadeProgress(nextProgress);
  };

  const handleScroll = (event) => {
    if (!fadeTopNavOnScroll) return;

    const y = event.nativeEvent.contentOffset.y;

    updateNavCrossfadeFromScroll(y);
  };

  const handleScrollEnd = (event) => {
    if (!fadeTopNavOnScroll) return;

    const y = event.nativeEvent.contentOffset.y;

    if (y <= 1) {
      forceTopNavVisible();
    }
  };

  const handleLayout = (event) => {
    viewportHeightRef.current = event.nativeEvent.layout.height;

    if (fadeTopNavOnScroll) {
      previousScrollYRef.current = 0;
      navCrossfadeProgressRef.current = 0;

      resetTopNavScroll();
      resetNavCrossfadeProgress();
      forceTopNavVisible();
    }
  };

  const handleContentSizeChange = (_, height) => {
    contentHeightRef.current = height;
  };

  return (
    <View style={styles.root}>
      <CrownWandPattern style={StyleSheet.absoluteFillObject} />

      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        removeClippedSubviews={false}
        contentContainerStyle={{
          paddingTop,
          paddingHorizontal,
          paddingBottom: bottomPadding,
          gap,
        }}
        onScroll={fadeTopNavOnScroll ? handleScroll : undefined}
        onScrollEndDrag={fadeTopNavOnScroll ? handleScrollEnd : undefined}
        onMomentumScrollEnd={fadeTopNavOnScroll ? handleScrollEnd : undefined}
        onLayout={handleLayout}
        onContentSizeChange={handleContentSizeChange}
      >
        {children}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: GRAY_BG_COLOR,
    position: "relative",
    overflow: "hidden",
    zIndex: 0,
    elevation: 0,
  },

  patternLayer: {
    backgroundColor: GRAY_BG_COLOR,
    overflow: "hidden",
    zIndex: 0,
    elevation: 0,
  },

  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 0,
    elevation: 0,
  },
});