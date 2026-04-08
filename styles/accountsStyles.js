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

  navItem: {
    fontSize: 12,
    color: "#A9ADB6",
    textAlign: "center",
    width: "100%",
  },

  navItemActive: {
    fontSize: 12,
    color: "#6A79D1",
    textAlign: "center",
    width: "100%",
    fontWeight: "400",
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

  frameAccounts: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  amountText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#111111",
  },

  monitorWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  accountsList: {
    marginTop: 4,
  },

  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(169, 173, 182, 0.35)",
  },

  accountRowNoBorder: {
    borderBottomWidth: 0,
  },

  rowIconWrap: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  accountCopy: {
    flex: 1,
  },

  accountLabel: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  accountSubLabel: {
    marginTop: 2,
    fontSize: 9,
    color: "#222227",
  },

  accountValue: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
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
    fontWeight: "700",
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 98,
    paddingBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  bottomNavIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  frame26: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  frame27: {
    alignItems: "center",
    justifyContent: "center",
  },

  frame28: {
    alignItems: "center",
    justifyContent: "center",
  },

  frame29: {
    alignItems: "center",
    justifyContent: "center",
  },

  frame31: {
    alignItems: "center",
    justifyContent: "center",
  },

  bottomHomeIcon: {
    width: 20,
    height: 19,
  },

  home: {
    color: "#6A79D1",
    fontSize: 7,
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