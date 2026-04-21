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