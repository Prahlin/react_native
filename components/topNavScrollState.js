import { Animated, Platform } from "react-native";

export const TOP_NAV_FADE_DISTANCE = Platform.OS === "web" ? 66 : 55;

export const topNavScrollY = new Animated.Value(0);

/*
  Shared chrome crossfade meaning:

  0 = top nav visible, bottom nav hidden
  1 = top nav hidden, bottom nav visible
*/
export const navCrossfadeProgress = new Animated.Value(0);

export function resetTopNavScroll(value = 0) {
  topNavScrollY.stopAnimation();
  topNavScrollY.setValue(value);
}

export function resetNavCrossfadeProgress(value = 0) {
  navCrossfadeProgress.stopAnimation();
  navCrossfadeProgress.setValue(value);
}