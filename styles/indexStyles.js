import { Platform, StyleSheet } from "react-native";

const isWeb = Platform.OS === "web";
const S = isWeb ? 1.35 : 1;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  bgPattern: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0,
  },

  fancyCrownTint: {
    tintColor: "#FFD84D",
    opacity: 0.1,
  },

  crownLighten: {
    tintColor: "#FFFFFF",
    opacity: 0.0,
  },

  wandTint: {
    tintColor: "#FFD800",
    opacity: 0.05,
  },

  crownBorder: {
    tintColor: "#3E4BB5",
    opacity: 0.9,
    transform: [{ translateX: 4 }, { translateY: 4 }],
  },

  crownBorderWide: {
    tintColor: "#3E4BB5",
    opacity: 0.9,
    transform: [{ translateX: 7 }, { translateY: 7 }],
  },

  fancyCrownSvg: {
    position: "absolute",
    left: "10%",
    width: "80%",
    top: isWeb ? "22.75%" : "27.5%",
    height: 100 * S * 1.4,
    zIndex: 3,
    transform: [{ translateY: -75 }, { scaleX: -1 }],
  },

  fancyCrownImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  topBar: {
    height: 0,
    backgroundColor: "#7887E8",
  },

  stage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
    overflow: "hidden",
  },

  bgEllipse3: {
    position: "absolute",
    bottom: "27.5%",
    left: isWeb ? "5.125%" : "6.75%",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    zIndex: -5,
    borderWidth: 3,
    borderColor: "#3E4BB5",
  },

  bgEllipse4: {
    position: "absolute",
    bottom: "27.5%",
    right: isWeb ? "5.125%" : "6.75%",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    zIndex: -5,
    borderWidth: 3,
    borderColor: "#3E4BB5",
  },

  ellipseLeftSide: {
    position: "absolute",
    top: isWeb ? "20.75%" : "22.5%",
    left: isWeb ? "5.125%" : "5.75%",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    zIndex: -5,
    borderWidth: 3,
    borderColor: "#3E4BB5",
  },

  ellipseRightSide: {
    position: "absolute",
    top: isWeb ? "20.75%" : "22.5%",
    right: isWeb ? "5.125%" : "5.75%",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    zIndex: -5,
    borderWidth: 3,
    borderColor: "#3E4BB5",
  },

  ellipseLeftSideBottom: {
    position: "absolute",
    bottom: isWeb ? "2.75%" : "3.5%",
    left: isWeb ? "4.375%" : "6.75%",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    zIndex: -5,
    borderWidth: 3,
    borderColor: "#3E4BB5",
  },

  ellipseRightSideBottom: {
    position: "absolute",
    bottom: isWeb ? "2.75%" : "3.5%",
    right: isWeb ? "4.375%" : "6.75%",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    zIndex: -5,
    borderWidth: 3,
    borderColor: "#3E4BB5",
  },

  ellipseTopLeft: {
    position: "absolute",
    top: isWeb ? "12.75%" : "13.5%",
    left: isWeb ? "4%" : "6%",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#D4A017",
  },

  ellipseTop: {
    position: "absolute",
    top: isWeb ? "12.75%" : "13.5%",
    right: isWeb ? "4%" : "6%",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#D4A017",
  },

  ellipseMiddleLeft: {
    position: "absolute",
    top: "50%",
    left: isWeb ? "5.5%" : "7%",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    zIndex: 3,
    borderWidth: 3,
    borderColor: "#D4A017",
    transform: [{ translateY: -150 }],
  },

  ellipseMiddle: {
    position: "absolute",
    top: "50%",
    right: isWeb ? "5.5%" : "7%",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    zIndex: 3,
    borderWidth: 3,
    borderColor: "#D4A017",
    transform: [{ translateY: -150 }],
  },

  ellipseBottomLeft: {
    position: "absolute",
    bottom: isWeb ? "2.75%" : "3.5%",
    left: isWeb ? "4%" : "6%",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#D4A017",
  },

  ellipseBottom: {
    position: "absolute",
    bottom: isWeb ? "2.75%" : "3.5%",
    right: isWeb ? "4%" : "6%",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#D4A017",
  },

  ellipseDotsLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  ellipseDot: {
    position: "absolute",
    width: 3,
    height: 3,
    borderRadius: 1.5,
    opacity: 0.1,
  },

  card: {
    width: "80%",
    height: "70%",
    backgroundColor: "#F7F7F7",
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: "#C6C6C6",
    paddingTop: 40,
    paddingHorizontal: "8%",
    paddingBottom: 40,
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 4,
  },

logoContainer: {
  width: "100%",
  height: isWeb ? "38%" : "24%",
  alignSelf: "center",
  marginBottom: isWeb ? "10.5%" : "8%",
  marginTop: isWeb ? 50 : 30,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: isWeb ? 18 : 0,
  transform: [
    { translateX: isWeb ? -10 : -6 },
    { translateY: isWeb ? -24 : 0 }, // 👈 move logo UP on web only
    { scale: 0.8 },
  ],
},

  coinGroup: {
    width: 91 * S * 1.4,
    height: 76 * S * 1.4,
    position: "relative",
    marginRight: isWeb ? 28 * S : 12,
    marginTop: isWeb ? -8 * S : -22,
  },

  coinOuterCircle: {
    position: "absolute",
    left: 50 * S * 1.4,
    top: 27 * S * 1.4,
    width: 53 * S * 1.4,
    height: 53 * S * 1.4,
    borderRadius: 26.5 * S * 1.4,
    backgroundColor: "#3E4BB5",
    borderWidth: 2.5 * S,
    borderColor: "#000000",
    zIndex: 0,
  },

  coinGradientCircle: {
    position: "absolute",
    left: 47 * S * 1.4,
    top: 26 * S * 1.4,
    width: 53 * S * 1.4,
    height: 53 * S * 1.4,
    borderRadius: 26.5 * S * 1.4,
    borderWidth: 3 * S,
    borderColor: "#111111",
    overflow: "hidden",
    zIndex: 1,
  },

  coinDotsLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },

  coinDot: {
    position: "absolute",
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#3E4BB5",
    opacity: 0.2,
  },

  dollar: {
    position: "absolute",
    left: 62 * S * 1.4,
    top: 38 * S * 1.4,
    width: 22 * S * 1.4,
    height: 29 * S * 1.4,
    resizeMode: "contain",
    zIndex: 3,
  },

  crown: {
    position: "absolute",
    left: 37 * S * 1.4,
    top: 14 * S * 1.4,
    width: 63 * S * 1.4,
    height: 36 * S * 1.4,
    resizeMode: "contain",
    zIndex: 4,
  },

  logoTextGroup: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 105 * S * 1.4,
    marginLeft: isWeb ? 2 * S : 18,
    marginTop: isWeb ? 7 * S : -7,
  },

  credit: {
    marginLeft: -14 * S,
    marginTop: 14 * S,
    width: 95 * S * 1.4,
    height: 28 * S * 1.4,
    resizeMode: "contain",
  },

  king: {
    marginLeft: -7 * S,
    width: 77 * S * 1.4,
    height: 28 * S * 1.4,
    resizeMode: "contain",
  },

  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: isWeb ? 32 : 32 * S,
    transform: [{ translateY: isWeb ? -6 : 6 }],
  },

  fieldIconContainer: {
    width: isWeb ? 24 : 24 * S,
    height: isWeb ? 24 : 24 * S,
    justifyContent: "center",
    alignItems: "center",
    marginRight: isWeb ? 10 : 10 * S,
  },

  avatarIcon: {
    width: isWeb ? 23 : 23 * S,
    height: isWeb ? 23 : 23 * S,
    resizeMode: "contain",
  },

  lockIcon: {
    width: isWeb ? 19 : 19 * S,
    height: isWeb ? 19 : 19 * S,
    resizeMode: "contain",
  },

input: {
  flex: 1,
  fontSize: isWeb ? 14 : 14,
  lineHeight: isWeb ? 18 : 20,
  height: isWeb ? 28 : 32,
  color: "#808690",
  borderBottomWidth: 2,
  borderBottomColor: "#D0D4DC",

  paddingTop: isWeb ? 0 : 4,     // 👈 push text DOWN on Android
  paddingBottom: isWeb ? 2 : 4,
  paddingVertical: 0,

  marginRight: isWeb ? 6 : 6,
  includeFontPadding: false,
},

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: isWeb ? 12 : 6 * S,
    marginBottom: isWeb ? 12 : 6 * S,
  },

  rememberText: {
    marginLeft: isWeb ? 10 : 10 * S,
    marginBottom: isWeb ? 24 : 24 * S,
    marginTop: 0,
    fontSize: isWeb ? 12.5 : 12.5 * S,
    color: "#A5AAB4",
    lineHeight: isWeb ? 16 : 16 * S,
    transform: [{ translateY: isWeb ? 15 : 12 }],
  },

  signInButton: {
    alignSelf: "center",
    width: "102%",
    transform: [{ translateX: -1 }],
    backgroundColor: "#8D98F0",
    borderRadius: isWeb ? 9 : 9 * S,
    borderWidth: 2,
    borderColor: "#4E5DC8",
    paddingVertical: isWeb ? 15.2 : 15.2 * S,
    alignItems: "center",
    marginTop: isWeb ? 24 : 24 * S,
    marginBottom: 50,
  },

  wandSvg: {
    position: "absolute",
    left: "10%",
    width: "80%",
    top: isWeb ? "22.75%" : "24.5%",
    height: 150 * S * 1.4,
    zIndex: 4,
    transform: [{ translateY: -75 }, { scaleX: -1 }],
  },

  wandImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  wandBorder: {
    tintColor: "#3E4BB5",
    opacity: 0.9,
    transform: [{ translateX: 4 }, { translateY: 4 }],
  },

  signInText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: isWeb ? 12 : 12 * S,
  },
});