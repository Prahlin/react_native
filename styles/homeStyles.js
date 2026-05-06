import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    position: "relative",
    zIndex: 0,
    elevation: 0,
  },

  scrollContent: {
    paddingBottom: 110,
  },

  bottomSpacer: {
    height: 2,
  },

  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
  },

  dashboardHomeScreenContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    elevation: 0,
  },

  mainContent: {
    paddingTop: 132,
    paddingHorizontal: 8,
    gap: 8,
    zIndex: 0,
    elevation: 0,
  },

  stickyHeaderWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999999,
    elevation: 999999,
    overflow: "visible",
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
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingTop: 0,
    backgroundColor: "transparent",
    zIndex: 1000000,
    elevation: 1000000,
    overflow: "visible",
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
    fontFamily: "Inter",
    fontWeight: "400",
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
    fontFamily: "Inter",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#000000",
    letterSpacing: 0.6,
    textTransform: "uppercase",
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
    fontFamily: "Inter",
    fontWeight: "700",
  },

  frameCreditScore: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    padding: 12,
  },

  creditScore: {
    fontSize: 12,
    fontFamily: "Inter",
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
    fontFamily: "Inter",
    fontWeight: "400",
  },

  creditValue: {
    fontSize: 12,
    fontFamily: "Inter",
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
    fontFamily: "Inter",
    fontWeight: "400",
  },

  creditArrowWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  frameSpending: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    padding: 12,
  },

  _spending: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    marginBottom: 18,
  },

  spendingArrowWrap: {
    height: 96,
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
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  frame107: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
    fontFamily: "Inter",
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
    fontFamily: "Inter",
    fontWeight: "700",
  },

  frameCreditCards: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    padding: 12,
  },

  creditCardOffers: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
  },

  creditCardsSubtitle: {
    marginTop: 4,
    fontSize: 10,
    color: "#111111",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  basedonyourcreditscore: {
    marginTop: 4,
    fontSize: 10,
    fontFamily: "Inter",
    fontWeight: "400",
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
    rowGap: 16,
  },

  cardItem: {
    width: "48%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  offerItem: {
    width: "48%",
    minHeight: 94,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  offerLabelWrap: {
    height: 28,
    marginBottom: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  cardItemTitle: {
    fontSize: 8,
    fontFamily: "Inter",
    fontWeight: "600",
    color: "#111111",
    textAlign: "center",
    marginBottom: 8,
  },

  offerLabel: {
    fontSize: 8,
    lineHeight: 10,
    textAlign: "center",
    width: 90,
    alignSelf: "center",
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#111111",
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
    fontFamily: "Inter",
    fontWeight: "400",
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
    fontFamily: "Inter",
    fontWeight: "700",
  },

  frame153: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    padding: 12,
  },

  loanOffers: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
  },

  _basedonyourcreditscore: {
    marginTop: 4,
    fontSize: 10,
    fontFamily: "Inter",
    fontWeight: "400",
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
    fontFamily: "Inter",
    fontWeight: "400",
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
    fontFamily: "Inter",
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
    fontFamily: "Inter",
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