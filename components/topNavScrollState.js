import { Animated, Platform } from "react-native";

export const TOP_NAV_FADE_DISTANCE = Platform.OS === "web" ? 66 : 55;

export const NAV_CROSSFADE_DISTANCE = TOP_NAV_FADE_DISTANCE;

export const topNavScrollY = new Animated.Value(0);

// 0 = top nav visible, bottom nav hidden
// 1 = top nav hidden, bottom nav visible
export const navCrossfadeProgress = new Animated.Value(0);

export function resetTopNavScroll() {
  topNavScrollY.stopAnimation();
  topNavScrollY.setValue(0);
}

export function resetNavCrossfadeProgress() {
  navCrossfadeProgress.stopAnimation();
  navCrossfadeProgress.setValue(0);
}