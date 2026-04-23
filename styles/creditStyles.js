import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollContent: {
    paddingBottom: 110,
  },

  bottomSpacer: {
    height: 3,
  },

  scrollView: {
    backgroundColor: "#FFFFFF",
  },

  dashboardHomeScreenContainer: {
    width: "100%",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    overflow: "hidden",
  },

  mainContent: {
    paddingHorizontal: 8,
    gap: 8,
  },

  frameCreditScore: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 6,
    padding: 12,
  },

  frameImpact: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 6,
    padding: 12,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "900",
  },

  outlineButton: {
    marginTop: 20,
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

  scoreMeterWrap: {
    height: 40,
    marginTop: 10,
  },

  scoreBarBase: {
    height: 9,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },

  scoreBarMutedLeft: {
    position: "absolute",
    width: "26%",
    height: 9,
    backgroundColor: "#A9ADB6",
  },

  scoreBarLight: {
    position: "absolute",
    left: "26%",
    width: "16%",
    height: 9,
    backgroundColor: "#D9D9D9",
  },

  scoreBarMid: {
    position: "absolute",
    left: "42%",
    width: "16%",
    height: 9,
    backgroundColor: "#97A2FE",
  },

  scoreBarDark: {
    position: "absolute",
    left: "58%",
    right: 0,
    height: 9,
    backgroundColor: "#3E4BB5",
  },

  scoreMarker: {
    position: "absolute",
    top: -1,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFD700",
  },

  fairText: {
    fontSize: 8,
  },

  excellentText: {
    position: "absolute",
    right: 0,
    fontSize: 8,
  },

  scoreChartWrap: {
    marginTop: 10,
    flexDirection: "row",
  },

  scoreChartLeft: {
    flex: 1,
  },

  scoreChartAxis: {
    width: 24,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  scoreAxisText: {
    fontSize: 8,
  },

  scoreMonthsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scoreMonthText: {
    fontSize: 7,
  },
});

export default styles;