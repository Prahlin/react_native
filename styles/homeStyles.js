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
    paddingTop: 72,
    paddingHorizontal: 8,
    gap: 8,
    zIndex: 1,
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

  stickyTopNav: {
    paddingHorizontal: 8,
    paddingTop: 68,
    backgroundColor: "transparent",
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

  statusText: {
    color: "#222227",
    fontSize: 8,
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
    gap: 0,
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
  },

  navUnderline: {
    marginTop: 6,
    width: "102%",
    height: 4,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
  },

  frame156: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  creditScore: {
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 12,
  },

  transUnionEquifaxAutoLayout: {
    gap: 14,
  },

  creditBureaus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  transUnion: {
    flex: 1,
    left: 4,
    fontSize: 12,
  },

  equifax: {
    flex: 1,
    left: 10,
    fontSize: 12,
    textAlign: "left",
  },

  myVar: {
    width: 40,
    right: 14,
    fontSize: 12,
    fontWeight: "900",
    textAlign: "right",
  },

  _myVar: {
    width: 40,
    right: 8,
    fontSize: 12,
    fontWeight: "900",
    textAlign: "right",
  },

  creditRangesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  transUnionCreditRange: {
    flex: 1,
    height: 28,
    position: "relative",
  },

  equifaxCreditRange: {
    flex: 1,
    height: 28,
    position: "relative",
  },

  rectangle11: {
    position: "absolute",
    top: 4,
    left: 0,
    right: 0,
    height: 9,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },

  rectangle12: {
    position: "absolute",
    top: 4,
    right: 0,
    width: "27%",
    height: 9,
    backgroundColor: "#3E4BB5",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  rectangle13: {
    position: "absolute",
    top: 4,
    left: "57%",
    width: "16%",
    height: 9,
    backgroundColor: "#6A79D1",
  },

  rectangle14: {
    position: "absolute",
    top: 4,
    left: "42%",
    width: "16%",
    height: 9,
    backgroundColor: "#97A2FE",
  },

  rectangle15: {
    position: "absolute",
    top: 4,
    left: "26%",
    width: "16%",
    height: 9,
    backgroundColor: "#D9D9D9",
  },

  rectangle16: {
    position: "absolute",
    top: 4,
    left: 0,
    width: "26%",
    height: 9,
    backgroundColor: "#A9ADB6",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  rectangle17: {
    position: "absolute",
    top: 4,
    left: 0,
    right: 0,
    height: 9,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },

  rectangle18: {
    position: "absolute",
    top: 4,
    right: 0,
    width: "27%",
    height: 9,
    backgroundColor: "#3E4BB5",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  rectangle19: {
    position: "absolute",
    top: 4,
    left: "57%",
    width: "16%",
    height: 9,
    backgroundColor: "#6A79D1",
  },

  rectangle20: {
    position: "absolute",
    top: 4,
    left: "42%",
    width: "16%",
    height: 9,
    backgroundColor: "#97A2FE",
  },

  rectangle21: {
    position: "absolute",
    top: 4,
    left: "26%",
    width: "16%",
    height: 9,
    backgroundColor: "#D9D9D9",
  },

  rectangle22: {
    position: "absolute",
    top: 4,
    left: 0,
    width: "26%",
    height: 9,
    backgroundColor: "#A9ADB6",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  arrow1: {
    position: "absolute",
    left: "22%",
    top: 18,
  },

  arrow2: {
    position: "absolute",
    left: "54%",
    top: 0,
  },

  arrow3: {
    position: "absolute",
    left: "22%",
    top: 18,
  },

  arrow4: {
    position: "absolute",
    left: "52%",
    top: 0,
  },

  fair: {
    position: "absolute",
    left: 6,
    top: 20,
    fontSize: 10,
  },

  excellent: {
    position: "absolute",
    right: 0,
    top: 20,
    fontSize: 10,
  },

  _fair: {
    position: "absolute",
    left: 6,
    top: 20,
    fontSize: 10,
  },

  _excellent: {
    position: "absolute",
    right: 0,
    top: 20,
    fontSize: 10,
  },

  frame62: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3E4BB5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  findoutmore: {
    color: "#3E4BB5",
    fontSize: 12,
    fontWeight: "700",
  },

  frame107: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  _spending: {
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 18,
  },

  frame187: {
    alignItems: "center",
    gap: 8,
  },

  frame38: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  frame37: {
    width: 25,
    alignItems: "center",
  },

  rectangle35: {
    width: 25,
    height: 78,
    backgroundColor: "#6A79D1",
  },

  polygon12: {
    width: 28,
    height: 24,
  },

  _polygon12: {
    width: 28,
    height: 24,
  },

  oct: {
    fontSize: 12,
    fontWeight: "900",
  },

  ___frame62: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#3E4BB5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  viewdetails: {
    color: "#3E4BB5",
    fontSize: 12,
    fontWeight: "700",
  },

  frame157: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  creditCardOffers: {
    fontSize: 12,
    fontWeight: "900",
  },

  basedonyourcreditscore: {
    marginTop: 4,
    fontSize: 10,
  },

  offersGrid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
    columnGap: 0,
  },

  offerItem: {
    width: "48%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  offerLabel: {
    fontSize: 8,
    textAlign: "center",
    marginBottom: 8,
    width: 60,
    alignSelf: "center",
  },

  offerCard: {
    width: 100,
    height: 60,
    aspectRatio: 60 / 38,
    alignSelf: "center",
  },

  _frame62: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3E4BB5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  seemoreoffers: {
    color: "#3E4BB5",
    fontSize: 12,
    fontWeight: "700",
  },

  frame153: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  loanOffers: {
    fontSize: 12,
    fontWeight: "900",
  },

  _basedonyourcreditscore: {
    marginTop: 4,
    fontSize: 10,
  },

  loanGrid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },

  loanItem: {
    width: "48%",
    alignItems: "center",
  },

  loanLabel: {
    fontSize: 8,
    marginBottom: 8,
    textAlign: "center",
  },

  loanIcon: {
    width: 44,
    height: 44,
    resizeMode: "contain",
  },

  __frame62: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3E4BB5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  _findoutmore: {
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

  _vector: {
    width: 20,
    height: 19,
  },

  home: {
    color: "#6A79D1",
    fontSize: 7,
  },

  activity: {
    color: "#A9ADB6",
    fontSize: 7,
  },

  news: {
    color: "#A9ADB6",
    fontSize: 7,
  },

  rewards: {
    color: "#A9ADB6",
    fontSize: 7,
  },

  stats: {
    color: "#A9ADB6",
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

  alarm: {
    width: 15,
    height: 15,
  },

  union: {
    position: "absolute",
    top: 1,
    left: 1,
  },

  bluetooth: {
    width: 15,
    height: 15,
  },

  vectorStroke: {
    position: "absolute",
    top: 2,
    right: 3,
    bottom: 2,
    left: 3,
  },

  wifi: {
    width: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  signal: {
    width: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  battery: {
    width: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;