import { Animated, Platform } from "react-native";

export const TOP_NAV_FADE_DISTANCE = Platform.OS === "web" ? 66 : 55;

export const topNavScrollY = new Animated.Value(0);

export function resetTopNavScroll() {
  topNavScrollY.stopAnimation();
  topNavScrollY.setValue(0);
}