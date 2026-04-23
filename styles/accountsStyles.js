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
    paddingTop: 0,
    paddingHorizontal: 8,
    gap: 8,
    zIndex: 1,
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

  accountsImageWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  accountsList: {
    marginTop: 4,
  },

  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(169, 173, 182, 0.35)",
  },

  accountRowNoBorder: {
    borderBottomWidth: 0,
  },

  rowIconWrap: {
    width: 40,
    bottom: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  accountCopy: {
    flex: 1,
  },

  accountLabel: {
    fontSize: 12,
    bottom: 5,
    fontWeight: "900",
    color: "#111111",
  },

  accountSubLabel: {
    marginTop: 2,
    bottom: 5,
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
});

export default styles;