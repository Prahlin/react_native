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

  frameNotifications: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  heroWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 18,
  },

  heroImage: {
    width: 144,
    height: 144,
    resizeMode: "contain",
  },

  notificationList: {
    marginTop: 2,
  },

  notificationRow: {
    marginBottom: 18,
  },

  notificationHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dateWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  star: {
    color: "#A9ADB6",
    fontSize: 12,
  },

  dateText: {
    fontSize: 10,
    color: "#444444",
  },

  titleText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  bodyText: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 16,
    color: "#444444",
  },

  linkText: {
    marginTop: 8,
    fontSize: 10,
    color: "#6A79D1",
    textAlign: "center",
    fontWeight: "500",
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
});

export default styles;