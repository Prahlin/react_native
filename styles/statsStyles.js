import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

scrollContent: {
  flexGrow: 1,
  paddingBottom: 120, // prevents tight overflow at bottom
},

dashboardHomeScreenContainer: {
  width: "100%",
  minHeight: "100%",
  backgroundColor: "rgba(217, 217, 217, 0.5)",
  overflow: "hidden", // 👈 THIS removes the visible scrollbar on web
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
    height: 68,
    backgroundColor: "#97A2FE",
  },

  frame189: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  _welcomeSteve: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

frameRewards: {
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
  width: 246,
  height: 222,
  resizeMode: "contain",
},

section: {
  width: "100%",
  marginBottom: 24,
},

sectionHeader: {
  fontSize: 12,
  fontWeight: "900",
  color: "#000000",
  textAlign: "center",
  marginBottom: 4,
},

row: {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 2,
},

label: {
  fontSize: 12,
  fontWeight: "400",
  color: "#000000",
},

valuePrimary: {
  fontSize: 18,
  fontWeight: "400",
  color: "#000000",
  textAlign: "right",
},

valueSecondary: {
  fontSize: 12,
  fontWeight: "400",
  color: "#000000",
  textAlign: "right",
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
});

export default styles;