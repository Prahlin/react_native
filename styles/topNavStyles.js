import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardLetterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  dashboardLetter: {
    fontSize: 13,
    fontFamily: "Inter",
    fontWeight: "700",
    letterSpacing: 0.1,
    includeFontPadding: false,
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
  minHeight: 53,
  paddingHorizontal: 10,
  paddingTop: 14,
  paddingBottom: 15,
  position: "relative",
  marginTop: 0, // was 8
},

  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  navTab: {
    flex: 1,
    alignItems: "center",
  },

  navTrack: {
    marginTop: 6,
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