import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F5FB",
  },

  bottomSpacer: {
    height: 3,
  },

  frameRewards: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },

  heroWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 12,
  },

  heroImage: {
    width: 144,
    height: 144,
  },

  rewardList: {
    marginTop: 2,
  },

  rewardRow: {
    marginBottom: 18,
  },

  rewardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dateWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  star: {
    color: "#FFD700",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "700",
  },

  dateText: {
    fontSize: 10,
    color: "#444444",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  titleText: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#111111",
  },

  bodyText: {
    marginTop: 6,
    fontSize: 11,
    lineHeight: 16,
    color: "#444444",
    fontFamily: "Inter",
    fontWeight: "400",
  },

  linkText: {
    marginTop: 8,
    fontSize: 10,
    color: "#6A79D1",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "500",
  },
});

export default styles;