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
    height: 3, // match your card gap
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

  frameDebt: {
    backgroundColor: "rgba(255,255,255,0.6)",
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
    fontWeight: "900",
    color: "#111111",
  },

  amountText: {
    fontSize: 16,
    fontWeight: "900",
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
  },

  axisLabel: {
    fontSize: 8,
  },

  frame153: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 6,
    padding: 12,
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
  },

  loanIcon: {
    width: 44,
    height: 44,
  },

  frameAcademy: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 6,
    padding: 12,
  },

  academyIntro: {
    marginTop: 8,
    fontSize: 12,
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
  },

  starGold: {
    marginRight: 7,
    fontSize: 12,
    color: "#FFD700",
  },

  academyText: {
    flex: 1,
    fontSize: 12,
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
});

export default styles;