import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F5FB",
  },

  bottomSpacer: {
    height: 3,
  },

  frameCreditScore: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  frameImpact: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  sectionTitle: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#000000",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 6,
  },

  bureauSection: {
    marginTop: 32,
  },

  bureauTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#111111",
    marginBottom: 10,
    fontFamily: "Inter",
    fontWeight: "700",
  },

  bureauTopRow: {
    alignItems: "center",
    justifyContent: "center",
  },

  scoreCopyWrap: {
    display: "none",
  },

  currentScoreLabel: {
    fontSize: 10,
    color: "#222227",
    marginBottom: 12,
    fontFamily: "Inter",
    fontWeight: "400",
  },

  currentScoreValue: {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  scoreMeterWrap: {
    width: "52%",
    height: 40,
    position: "relative",
    marginTop: 2,
    alignSelf: "center",
  },

  scoreBarBase: {
    position: "absolute",
    top: 2,
    left: 0,
    right: 0,
    height: 9,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },

  scoreBarMutedLeft: {
    position: "absolute",
    top: 2,
    left: 0,
    width: "26%",
    height: 9,
    backgroundColor: "#A9ADB6",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  scoreBarLight: {
    position: "absolute",
    top: 2,
    left: "26%",
    width: "16%",
    height: 9,
    backgroundColor: "#D9D9D9",
  },

  scoreBarMid: {
    position: "absolute",
    top: 2,
    left: "42%",
    width: "16%",
    height: 9,
    backgroundColor: "#97A2FE",
  },

  scoreBarDark: {
    position: "absolute",
    top: 2,
    left: "58%",
    right: 0,
    height: 9,
    backgroundColor: "#3E4BB5",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  scoreArrowLine: {
    position: "absolute",
    left: "50%",
    top: 16,
    transform: [{ translateX: -22 }],
  },

  fairText: {
    position: "absolute",
    left: 6,
    top: 20,
    fontSize: 8,
    color: "#222227",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  excellentText: {
    position: "absolute",
    right: 0,
    top: 20,
    fontSize: 8,
    color: "#222227",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  scoreMarker: {
    position: "absolute",
    top: -1,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 0,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFD700",
  },

  scoreChartWrap: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "stretch",
  },

  scoreChartLeft: {
    flex: 1,
    minWidth: 0,
  },

  scoreChartAxis: {
    width: 24,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 26,
    alignItems: "flex-end",
  },

  scoreAxisText: {
    fontSize: 8,
    color: "#222227",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  scoreMonthsRow: {
    marginTop: -4,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scoreMonthText: {
    fontSize: 7,
    color: "#222227",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  outlineButton: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#3E4BB5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  outlineButtonText: {
    color: "#3E4BB5",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "700",
  },

  impactList: {
    marginTop: 12,
    gap: 12,
  },

  impactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  impactLabel: {
    fontSize: 10,
    color: "#222227",
    flex: 1,
    paddingRight: 10,
    fontFamily: "Inter",
    fontWeight: "400",
  },
});

export default styles;