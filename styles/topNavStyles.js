import { Platform, StyleSheet } from "react-native";

const isWeb = Platform.OS === "web";

const styles = StyleSheet.create({
  dashboardLetterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  dashboardLetter: {
    fontSize: isWeb ? 16 : 13,
    fontFamily: isWeb ? "Avenir Next" : "Inter",
    fontWeight: "700",
    letterSpacing: isWeb ? -0.9 : -0.2,
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

  frame155Wrap: {
    position: "relative",
    minHeight: isWeb ? 66 : 55,
    zIndex: 999999,
    elevation: 999999,
    overflow: "visible",
    backgroundColor: "transparent",
  },

  topNavShield: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    zIndex: 999998,
    elevation: 999998,
  },

  topNavShieldHidden: {
    display: "none",
  },

  frame155: {
    borderRadius: 6,
    minHeight: isWeb ? 66 : 55,
    paddingHorizontal: 10,
    paddingTop: isWeb ? 18 : 14,
    paddingBottom: isWeb ? 15 : 13,
    position: "relative",
    marginTop: 0,
    overflow: "visible",
    backgroundColor: "transparent",
    zIndex: 999999,
    elevation: 999999,
  },

  topNavContent: {
    width: "100%",
    position: "relative",
    zIndex: 1000000,
    elevation: 1000000,
  },

  topNav: {
    width: "100%",
    minHeight: isWeb ? 24 : 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: isWeb ? "space-between" : "flex-start",
    position: "relative",
    overflow: "visible",
    zIndex: 1000000,
    elevation: 1000000,
  },

  navTab: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    flexShrink: 0,
    overflow: "visible",
  },

  navTrack: {
    marginTop: isWeb ? 9 : 7,
    width: "100%",
    height: 4,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
    overflow: "hidden",
    position: "relative",
    zIndex: 1000000,
    elevation: 1000000,
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