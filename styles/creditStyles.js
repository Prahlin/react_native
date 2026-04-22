import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollContent: {
    flexGrow: 1,
  },

  dashboardHomeScreenContainer: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    overflow: "hidden",
    paddingBottom: 90,
  },

  mainContent: {
    paddingTop: 0,
    paddingHorizontal: 8,
    gap: 8,
    zIndex: 1,
  },

  stickyHeaderWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },

  welcomeSteve: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 68,
    backgroundColor: "#97A2FE",
  },

  bG: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 0,
    backgroundColor: "transparent",
  },

  time: {
    display: "none",
  },

  frame188: {
    display: "none",
  },

  frame189: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  _welcomeSteve: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  frameCreditScore: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  frameImpact: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  bureauSection: {
    marginTop: 12,
  },

  bureauTitle: {
    textAlign: "center",
    fontSize: 12,
    color: "#111111",
    marginBottom: 8,
  },

  bureauTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  scoreCopyWrap: {
    width: "38%",
  },

  currentScoreLabel: {
    fontSize: 10,
    color: "#222227",
    marginBottom: 10,
  },

  currentScoreValue: {
    fontSize: 16,
    fontWeight: "900",
    color: "#111111",
  },

  scoreMeterWrap: {
    width: "52%",
    height: 40,
    position: "relative",
    marginTop: 2,
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
    left: "22%",
    top: 16,
  },

  fairText: {
    position: "absolute",
    left: 6,
    top: 20,
    fontSize: 8,
    color: "#222227",
  },

  excellentText: {
    position: "absolute",
    right: 0,
    top: 20,
    fontSize: 8,
    color: "#222227",
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
    marginTop: 8,
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
  },

  scoreMonthsRow: {
    marginTop: -6,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scoreMonthText: {
    fontSize: 7,
    color: "#222227",
  },

  outlineButton: {
    marginTop: 12,
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
    fontWeight: "700",
  },

  impactList: {
    marginTop: 10,
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
  },

  twirlbackgroundPNG1: {
    position: "absolute",
    top: 70,
    left: -25,
    width: 420,
    height: 420,
    opacity: 0.35,
  },

  twirlbackgroundPNG2: {
    position: "absolute",
    top: 760,
    left: -25,
    width: 420,
    height: 420,
    opacity: 0.35,
  },

  notificationListAnimation: {
    width: 77,
    height: 18,
  },

  vector: {
    position: "absolute",
    top: 1,
    left: 59,
    width: 12,
    height: 18,
  },

  ellipse19: {
    position: "absolute",
    top: 7,
    left: 66,
    width: 10,
    height: 10,
  },

  __myVar: {
    position: "absolute",
    top: 6,
    left: 69,
    color: "#fff",
    fontSize: 10,
    fontWeight: "900",
  },

  settingsListAnimation: {
    width: 4,
    height: 16,
  },

  ellipse16: {
    position: "absolute",
    top: 0,
  },

  ellipse17: {
    position: "absolute",
    top: 6,
  },

  ellipse18: {
    position: "absolute",
    top: 12,
  },
});

export default styles;