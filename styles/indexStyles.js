import { Platform, StyleSheet } from "react-native";

const isWeb = Platform.OS === "web";

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
    justifyContent: "center",
    overflow: "hidden",
  },

  /* 🔵 BLUE ELLIPSES */

  bgEllipse1: {
    position: "absolute",
    top: isWeb ? "2.75%" : "3.5%",
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
    top: isWeb ? "2.75%" : "3.5%",
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
  bottom: isWeb ? "16.75%" : "27.5%",
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
  bottom: isWeb ? "16.75%" : "27.5%",
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

  /* 🟡 YELLOW ELLIPSES */

  ellipseTopLeft: {
    position: "absolute",
    top: isWeb ? "2.75%" : "3.5%",
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
    top: isWeb ? "2.75%" : "3.5%",
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

  /* DOTS */

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

  /* CARD */

  card: {
    width: "80%",
    height: "90%",
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

  fieldRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 40,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#808690",
    borderBottomWidth: 2,
    borderBottomColor: "#D0D4DC",
    paddingBottom: 2,
    marginRight: 8,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  rememberText: {
    marginLeft: 7,
    marginBottom: 40,
    fontSize: 14,
    color: "#A5AAB4",
  },

  signInButton: {
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#8D98F0",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4E5DC8",
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: "4%",
  },

  signInText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
  },

  logoContainer: {
    width: "100%",
    height: "40%",
    alignSelf: "center",
    marginBottom: "5.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  coinGroup: {
    width: 130,
    height: 108,
    position: "relative",
    marginRight: 20,
    marginTop: 60,
  },

  coinOuterCircle: {
    position: "absolute",
    left: 72,
    top: 39,
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#3E4BB5",
    borderWidth: 3.5,
    borderColor: "#000000",
    zIndex: 0,
  },

  coinGradientCircle: {
    position: "absolute",
    left: 67,
    top: 38,
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 4,
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
    left: 89,
    top: 55,
    width: 32,
    height: 42,
    resizeMode: "contain",
    zIndex: 3,
  },

  crown: {
    position: "absolute",
    left: 53,
    top: 20,
    width: 90,
    height: 52,
    resizeMode: "contain",
    zIndex: 4,
  },

  logoTextGroup: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 150,
    marginLeft: 12,
    marginTop: 40,
  },

  credit: {
    marginLeft: -20,
    marginTop: 60,
    width: 135,
    height: 40,
    resizeMode: "contain",
  },

  king: {
    marginLeft: -10,
    width: 110,
    height: 40,
    resizeMode: "contain",
  },
});