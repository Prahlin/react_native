import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F5FB",
    position: "relative",
    zIndex: 0,
    elevation: 0,
  },

  bottomSpacer: {
    height: 3,
  },

  frameSpending: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  frameExpenditure: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  frameTrack: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#000000",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },

  amountText: {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  sourcesText: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  barChartWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  barsRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  barGroup: {
    alignItems: "center",
    justifyContent: "flex-end",
  },

  barTrack: {
    justifyContent: "flex-end",
  },

  barFill: {
    backgroundColor: "#7785E8",
  },

  monthLabel: {
    marginTop: 8,
    fontSize: 8,
    color: "#222227",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  monthLabelActive: {
    marginTop: 8,
    fontSize: 8,
    color: "#222227",
    fontFamily: "Inter",
    fontWeight: "900",
    textAlign: "center",
  },

  expenditureBody: {
    width: "100%",
  },

  expenditureImageWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Inter",
    fontWeight: "700",
  },

  trackIntro: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 17,
    color: "#444444",
    width: "72%",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  accountList: {
    marginTop: 14,
    gap: 12,
  },

  accountRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  trackLogoImage: {
    width: 34,
    height: 34,
    marginRight: 10,
  },

  trackLogoTile: {
    width: 34,
    height: 34,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  trackLogoCiti: {
    backgroundColor: "#3F6FE9",
  },

  trackLogoCitiText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontFamily: "Inter",
    fontWeight: "700",
  },

  trackLogoCap1: {
    backgroundColor: "#12345E",
    paddingHorizontal: 2,
  },

  trackLogoCap1Text: {
    color: "#FFFFFF",
    fontSize: 4.8,
    fontFamily: "Inter",
    fontWeight: "700",
    textAlign: "center",
  },

  trackLogoAmex: {
    backgroundColor: "#2B89E7",
  },

  trackLogoAmexText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontFamily: "Inter",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 8,
  },

  accountTextWrap: {
    flex: 1,
  },

  accountName: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  accountSubtitle: {
    marginTop: 1,
    fontSize: 11,
    color: "#444444",
    fontFamily: "Inter",
    fontWeight: "400",
  },
});

export default styles;