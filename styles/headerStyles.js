import { StyleSheet } from "react-native";

export const ICON_SIZE = 22;
export const SIDE_PADDING = 18;
export const TOP_PADDING = 22;
export const HEADER_TOTAL_HEIGHT = 64;

export default StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_TOTAL_HEIGHT,
    backgroundColor: "#8E95E8",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIDE_PADDING,
    paddingTop: TOP_PADDING,
    zIndex: 1003,
    elevation: 1003,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: ICON_SIZE,
    flexShrink: 0,
  },

  middleSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 0,
  },

  leftBellSpacer: {
    flex: 8,
  },

  rightBellSpacer: {
    flex: 1,
  },

  bellButton: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },

  bellIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },

  menuButton: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  menuDots: {
    color: "#FFFFFF",
    fontSize: ICON_SIZE,
    lineHeight: ICON_SIZE,
    fontWeight: "700",
  },

  overlay: {
    position: "absolute",
    top: HEADER_TOTAL_HEIGHT + 1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.18)",
    zIndex: 1001,
    elevation: 1001,
  },

  menu: {
    position: "absolute",
    top: 65,
    width: 170,
    backgroundColor: "#97A2FE",
    borderRadius: 12,
    paddingVertical: 6,
    elevation: 1004,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 1004,
  },

  arrowRight: {
    position: "absolute",
    top: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#97A2FE",
  },

  notifications: {
    position: "absolute",
    top: 65,
    width: 265,
    backgroundColor: "#97A2FE",
    borderRadius: 12,
    paddingVertical: 6,
    elevation: 1004,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 1004,
  },

  notificationsArrow: {
    position: "absolute",
    top: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#97A2FE",
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.45)",
  },

  itemText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },

  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.45)",
  },

  star: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 8,
    lineHeight: 16,
  },

  notificationText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
  },

  last: {
    borderBottomWidth: 0,
  },
});