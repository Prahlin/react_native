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

  dashboardLetterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  dashboardLetter: {
    fontSize: 12,
    fontWeight: "400",
  },

  dashboardLetterInactive: {
    color: "#A9ADB6",
  },

  dashboardLetterActive: {
    color: "#6A79D1",
  },

  mainContent: {
    paddingTop: 72,
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

  frame155: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 6,
    minHeight: 44,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 14,
    position: "relative",
    marginTop: 8,
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

  frameActivity: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  heroWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 12,
  },

  activityList: {
    marginTop: 4,
  },

  activityRow: {
    marginBottom: 18,
  },

  activityDate: {
    fontSize: 10,
    fontWeight: "700",
    color: "#222227",
    marginBottom: 2,
  },

  activityDetailWrap: {
    paddingLeft: 2,
  },

  activityTitle: {
    fontSize: 12,
    color: "#222227",
    lineHeight: 16,
  },

  activityMetaRow: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },

  activityValue: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  markerUp: {
    color: "#FF3B30",
    fontSize: 12,
    lineHeight: 12,
  },

  markerDown: {
    color: "#FF3B30",
    fontSize: 12,
    lineHeight: 12,
  },

  markerDownGood: {
    color: "#34C759",
    fontSize: 12,
    lineHeight: 12,
  },

  markerStar: {
    color: "#FFD700",
    fontSize: 12,
    lineHeight: 12,
  },

  twirlbackgroundPNG1: {
    position: "absolute",
    width: 220,
    height: 220,
    top: 80,
    left: -40,
    opacity: 0.16,
  },

  twirlbackgroundPNG2: {
    position: "absolute",
    width: 260,
    height: 260,
    bottom: 80,
    right: -70,
    opacity: 0.16,
  },

  notificationListAnimation: {
    width: 22,
    height: 22,
    position: "relative",
    marginRight: 14,
  },

  vector: {
    position: "absolute",
    left: 2,
    top: 1,
  },

  ellipse19: {
    position: "absolute",
    right: -1,
    top: -2,
  },

  __myVar: {
    position: "absolute",
    right: 2.5,
    top: -1,
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
  },

  settingsListAnimation: {
    width: 4,
    height: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },

  ellipse16: {},
  ellipse17: {},
  ellipse18: {},

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 98,
    paddingBottom: 40,
    paddingTop: 6,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingHorizontal: 14,
  },

  bottomTab: {
    width: 44,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  iconSlot: {
    width: 44,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  labelSlot: {
    width: 44,
    height: 12,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomNavIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  bottomLabel: {
    fontSize: 7,
    lineHeight: 8,
    color: "#A9ADB6",
    textAlign: "center",
  },

  bottomLabelActive: {
    fontSize: 7,
    lineHeight: 8,
    color: "#6A79D1",
    textAlign: "center",
  },
});

export default styles;