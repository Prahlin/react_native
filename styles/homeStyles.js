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
  height: 2, // match your card gap
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

  sectionTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  primaryButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3E4BB5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: "#3E4BB5",
    fontSize: 12,
    fontWeight: "700",
  },

  frameCreditScore: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  creditScore: {
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 12,
  },

  creditScoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 12,
  },

  creditColumn: {
    flex: 1,
  },

  creditBureau: {
    fontSize: 12,
    color: "#111111",
    marginBottom: 2,
  },

  creditValue: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
    marginBottom: 8,
  },

  creditMeterWrap: {
    position: "relative",
    minHeight: 44,
  },

  creditMeterTrack: {
    position: "relative",
    height: 9,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8,
  },

  creditMeterGray: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "26%",
    height: 9,
    backgroundColor: "#A9ADB6",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  creditMeterMid1: {
    position: "absolute",
    left: "26%",
    top: 0,
    width: "16%",
    height: 9,
    backgroundColor: "#D9D9D9",
  },

  creditMeterMid2: {
    position: "absolute",
    left: "42%",
    top: 0,
    width: "16%",
    height: 9,
    backgroundColor: "#97A2FE",
  },

  creditMeterBlue: {
    position: "absolute",
    left: "58%",
    top: 0,
    width: "42%",
    height: 9,
    backgroundColor: "#3E4BB5",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  creditPointerWrap: {
    position: "absolute",
    top: -2,
    left: "54%",
  },

  creditPointerWrapRight: {
    left: "52%",
  },

  creditRangeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },

  creditRangeLabel: {
    fontSize: 10,
    color: "#111111",
  },

  creditArrowWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  frameSpending: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  _spending: {
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 18,
  },

  spendingArrowWrap: {
  height: 96,              // matches blue bar height
  justifyContent: "center",
  alignItems: "center",
},

  spendingChartWrap: {
    alignItems: "center",
    justifyContent: "center",
  },

  spendingChartInner: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  spendingChartInnerOld: {
    alignItems: "center",
    gap: 8,
  },

  spendingChartInnerLegacy: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  spendingUpWrap: {
    width: 28,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  spendingDownWrap: {
    width: 28,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  spendingBarWrap: {
    width: 25,
    alignItems: "center",
  },

  spendingBar: {
    width: 25,
    height: 78,
    backgroundColor: "#6A79D1",
  },

  spendingMonth: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "900",
    color: "#111111",
  },

  frame107: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
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

  frameCreditCards: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 6,
    padding: 12,
  },

  creditCardOffers: {
    fontSize: 12,
    fontWeight: "900",
  },

  creditCardsSubtitle: {
    marginTop: 4,
    fontSize: 10,
    color: "#111111",
  },

  basedonyourcreditscore: {
    marginTop: 4,
    fontSize: 10,
  },

  cardGrid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },

  offersGrid: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
    columnGap: 0,
  },

  cardItem: {
    width: "48%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  offerItem: {
    width: "48%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

cardItemTitle: {
  fontSize: 8,
  fontWeight: "600",
  color: "#111111",
  textAlign: "center",
  marginBottom: 8,
},

  offerLabel: {
    fontSize: 8,
    textAlign: "center",
    marginBottom: 8,
    width: 60,
    alignSelf: "center",
  },

  cardOfferImage: {
    width: 100,
    height: 60,
    aspectRatio: 60 / 38,
    alignSelf: "center",
  },

  offerCard: {
    width: 100,
    height: 60,
    aspectRatio: 60 / 38,
    alignSelf: "center",
  },

  cardItemBank: {
    fontSize: 8,
    marginTop: 8,
    textAlign: "center",
    color: "#111111",
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
    color: "#111111",
  },

  loanIcon: {
    width: 40,
    height: 40,
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