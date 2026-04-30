import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardLetterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  dashboardLetter: {
    fontSize: Platform.OS === "web" ? 20 : 15,
    fontFamily: "Inter",
    fontWeight: "700",
    letterSpacing: Platform.OS === "web" ? -0.6 : -0.2,
    includeFontPadding: false,
    textAlign: "center",
    flexShrink: 0,
    flexGrow: 0,
    overflow: "visible",
  },

  dashboardLetterInactive: {
    color: "#A9ADB6",
  },

  dashboardLetterActive: {
    color: "#6A79D1",
  },

  frame155: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 6,
    minHeight: Platform.OS === "web" ? 66 : 55,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "web" ? 18 : 14,
    paddingBottom: Platform.OS === "web" ? 15 : 13,
    position: "relative",
    marginTop: 0,
    overflow: "visible",
  },

  topNav: {
    width: "100%",
    minHeight: Platform.OS === "web" ? 24 : 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: Platform.OS === "web" ? "space-between" : "flex-start",
    position: "relative",
    overflow: "visible",
  },

  navTab: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    flexShrink: 0,
    overflow: "visible",
  },

  navTrack: {
    marginTop: Platform.OS === "web" ? 9 : 7,
    width: "100%",
    height: 4,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
    overflow: "hidden",
    position: "relative",
  },

  navUnderlineActive: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 4,
    backgroundColor: "#6A79D1",
    borderRadius: 4,
  },
});

export default styles;