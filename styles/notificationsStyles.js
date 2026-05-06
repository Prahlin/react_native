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

  frameNotifications: {
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

  heroImage: {
    width: 144,
    height: 144,
    resizeMode: "contain",
  },

  notificationList: {
    marginTop: 2,
  },

  notificationRow: {
    marginBottom: 18,
  },

  notificationHead: {
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
    color: "#A9ADB6",
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