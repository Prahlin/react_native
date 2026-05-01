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

  topBar: {
    height: 0,
    backgroundColor: "#7887E8",
  },

stage: {
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-end", // ⬅️ anchor card to bottom
  paddingBottom: 40,          // ⬅️ keeps your original bottom gap
  overflow: "hidden",
},

bgEllipse1: {
  position: "absolute",
  top: isWeb ? "12.75%" : "13.5%",
  left: isWeb ? "4.375%" : "6.75%",
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: "hidden",
  borderWidth: 3,
  zIndex: -5,
  borderColor: "#3E4BB5",
},

bgEllipse2: {
  position: "absolute",
  top: isWeb ? "12.75%" : "13.5%",
  right: isWeb ? "4.375%" : "6.75%",
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: "hidden",
  borderWidth: 3,
  zIndex: -5,
  borderColor: "#3E4BB5",
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
    top: isWeb ? "16.75%" : "13.5%",
    left: isWeb ? "5.125%" : "6.75%",
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
    top: isWeb ? "16.75%" : "13.5%",
    right: isWeb ? "5.125%" : "6.75%",
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
    zIndex: 4,
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
    zIndex: 4,
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
  height: "80%", // ⬅️ was 90% → smaller = more top gap ONLY
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
    marginBottom: isWeb ? "5.5%" : "8%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: isWeb ? 18 : 0,
    transform: [{ translateX: isWeb ? -10 : -6 }],
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

fieldIcon: {
  width: 19.36 * S,
  height: 19.36 * S,
  resizeMode: "contain",
  marginRight: 10 * S,
  marginBottom: 4,
  opacity: 1,
},

avatarIcon: {
  width: 23 * S,
  height: 23 * S,
  transform: [{ translateX: -2 }], // tweak: -1, -2, or -3 depending on perfection
},

  fieldRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 32 * S,
  },

  input: {
    flex: 1,
    fontSize: 14 * S,
    lineHeight: 18 * S,
    height: 28 * S,
    color: "#808690",
    borderBottomWidth: 2,
    borderBottomColor: "#D0D4DC",
    paddingTop: 0,
    paddingBottom: 2,
    paddingVertical: 0,
    marginRight: 6 * S,
    includeFontPadding: false,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24 * S,
    marginBottom: 24 * S,
  },

rememberText: {
  marginLeft: 10 * S,
  marginBottom: 24 * S,
  marginTop: 0,
  fontSize: 12.5 * S,
  color: "#A5AAB4",
  lineHeight: 16 * S,
transform: [{ translateY: isWeb ? 15 : 12 }], // tighter
},

signInButton: {
  alignSelf: "center",
  width: "102%",
  transform: [{ translateX: -1 }], // keep your current centering tweak

  backgroundColor: "#8D98F0",
  borderRadius: 9 * S,
  borderWidth: 2,
  borderColor: "#4E5DC8",

  paddingVertical: 13.2 * S, // was 11 → +20%
  alignItems: "center",

  marginTop: 24 * S,
  marginBottom: 0,
},

signInText: {
  color: "#FFFFFF",
  fontWeight: "800",
  fontSize: 12 * S, // was 10 → +20%
},

});