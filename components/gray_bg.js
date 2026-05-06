import { useEffect, useRef } from "react";
import { Animated, Image, Platform, StyleSheet, View } from "react-native";
import {
  navCrossfadeProgress,
  resetNavCrossfadeProgress,
  resetTopNavScroll,
  TOP_NAV_FADE_DISTANCE,
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

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

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
  reverseNavCrossfade = false,
  initialNavCrossfadeProgress = 0,
}) {
  const lastScrollYRef = useRef(0);
  const progressRef = useRef(initialNavCrossfadeProgress);

  useEffect(() => {
    if (!fadeTopNavOnScroll) return;

    lastScrollYRef.current = 0;
    progressRef.current = initialNavCrossfadeProgress;

    resetTopNavScroll(0);
    resetNavCrossfadeProgress(initialNavCrossfadeProgress);
  }, [
    fadeTopNavOnScroll,
    initialNavCrossfadeProgress,
    reverseNavCrossfade,
  ]);

  const handleScroll = (event) => {
    if (!fadeTopNavOnScroll) return;

    const currentY = Math.max(0, event.nativeEvent.contentOffset.y);
    const deltaY = currentY - lastScrollYRef.current;

    const minimumDelta = IS_ANDROID ? 2.25 : 0.5;

    topNavScrollY.setValue(currentY);

    if (Math.abs(deltaY) < minimumDelta) {
      lastScrollYRef.current = currentY;
      return;
    }

    const progressDelta = deltaY / TOP_NAV_FADE_DISTANCE;

    const nextProgress = reverseNavCrossfade
      ? clamp01(progressRef.current - progressDelta)
      : clamp01(progressRef.current + progressDelta);

    if (nextProgress !== progressRef.current) {
      progressRef.current = nextProgress;
      navCrossfadeProgress.setValue(nextProgress);
    }

    lastScrollYRef.current = currentY;
  };

  return (
    <View style={styles.root}>
      <CrownWandPattern style={StyleSheet.absoluteFillObject} />

      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        removeClippedSubviews={false}
        overScrollMode="never"
        contentContainerStyle={{
          paddingTop,
          paddingHorizontal,
          paddingBottom: bottomPadding,
          gap,
        }}
        onScroll={fadeTopNavOnScroll ? handleScroll : undefined}
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
    zIndex: 1,
    elevation: 1,
  },
});