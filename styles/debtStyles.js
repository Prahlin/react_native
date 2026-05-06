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

  frameDebt: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 6,
    padding: 12,
  },

  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
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

  chartWrap: {
    flexDirection: "row",
  },

  chartLeft: {
    flex: 1,
  },

  chartRight: {
    width: 34,
    justifyContent: "space-between",
    paddingBottom: 26,
    alignItems: "flex-end",
  },

  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -8,
  },

  monthLabel: {
    fontSize: 8,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#111111",
  },

  axisLabel: {
    fontSize: 8,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#111111",
  },

  frame153: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 6,
    padding: 12,
  },

  creditCardsSubtitle: {
    marginTop: 4,
    fontSize: 10,
    color: "#111111",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  loanGrid: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },

  loanItem: {
    width: "48%",
    alignItems: "center",
  },

  loanLabel: {
    fontSize: 8,
    marginBottom: 8,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#111111",
  },

  loanIcon: {
    width: 44,
    height: 44,
  },

  frameAcademy: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 6,
    padding: 12,
  },

  academyIntro: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#111111",
  },

  academyList: {
    marginTop: 10,
  },

  academyRow: {
    flexDirection: "row",
    marginBottom: 7,
  },

  star: {
    marginRight: 7,
    fontSize: 12,
    color: "#A9ADB6",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  starGold: {
    marginRight: 7,
    fontSize: 12,
    color: "#FFD700",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  academyText: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
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
    fontFamily: "Inter",
    fontWeight: "700",
  },
});

export default styles;