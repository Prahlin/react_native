import { Platform, StyleSheet } from "react-native";

const isAndroid = Platform.OS === "android";

export const ICON_SIZE = 20;
export const SIDE_PADDING = 18;
export const TOP_PADDING = 40;
export const HEADER_TOTAL_HEIGHT = 80;

export default StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },

  measureLayer: {
    position: "absolute",
    left: -10000,
    top: -10000,
    opacity: 0,
    zIndex: -1,
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
    fontFamily: "Inter",
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
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  bellIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },

  menuButton: {
    width: isAndroid ? 18 : ICON_SIZE,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: isAndroid ? -2 : 2,
    marginLeft: 2,
    marginRight: -2,
  },

  menuDots: {
    color: "#FFFFFF",
    fontSize: isAndroid ? 28 : ICON_SIZE,
    lineHeight: isAndroid ? 28 : ICON_SIZE,
    fontFamily: "Inter",
    fontWeight: "400",
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
    top: HEADER_TOTAL_HEIGHT + 1,
    minWidth: 0,
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

  notifications: {
    position: "absolute",
    top: HEADER_TOTAL_HEIGHT + 1,
    minWidth: 0,
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
    fontFamily: "Inter",
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

  notificationMeasureRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  star: {
    width: 14,
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 8,
    lineHeight: 16,
    fontFamily: "Inter",
    fontWeight: "400",
  },

  notificationText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "400",
    flexShrink: 0,
  },

  notificationMeasureText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "400",
    flexShrink: 0,
  },

  last: {
    borderBottomWidth: 0,
  },
});