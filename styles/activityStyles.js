import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F5FB",
  },

  bottomSpacer: {
    height: 3,
  },

  frameActivity: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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

  activityList: {
    marginTop: 4,
  },

  activityRow: {
    marginBottom: 18,
  },

  activityDate: {
    fontSize: 10,
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#222227",
    marginBottom: 2,
  },

  activityDetailWrap: {
    paddingLeft: 2,
  },

  activityTitle: {
    fontSize: 12,
    color: "#222227",
    lineHeight: 16,
    fontFamily: "Inter",
    fontWeight: "400",
  },

  activityMetaRow: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },

  activityValue: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  markerUp: {
    color: "#FF3B30",
    fontSize: 12,
    lineHeight: 12,
  },

  markerDown: {
    color: "#FF3B30",
    fontSize: 12,
    lineHeight: 12,
  },

  markerDownGood: {
    color: "#34C759",
    fontSize: 12,
    lineHeight: 12,
  },

  markerStar: {
    color: "#FFD700",
    fontSize: 12,
    lineHeight: 12,
  },
});

export default styles;