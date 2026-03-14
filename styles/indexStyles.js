import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const usernameEllipseBack = require("../assets/ellipse-6.png");
const usernameEllipseFront = require("../assets/ellipse-7.png");
const usernameRect = require("../assets/rectangle-4.png");


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  bgPattern: {
    position: "absolute",
    width: width,
    height: height,
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
    paddingTop: 70,
    overflow: "hidden",
  },

  bgEllipse1: {
    position: "absolute",
    top: 60,
    left: -90,
    width: 420,
    height: 200,
    resizeMode: "contain",
  },

  bgEllipse2: {
    position: "absolute",
    top: 60,
    right: -90,
    width: 420,
    height: 200,
    resizeMode: "contain",
  },

  bgEllipse3: {
    position: "absolute",
    bottom: 50,
    left: -90,
    width: 420,
    height: 200,
    resizeMode: "contain",
    zIndex: -2,
  },

  bgEllipse4: {
    position: "absolute",
    bottom: 50,
    right: -90,
    width: 420,
    height: 200,
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseTop: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    width: 320,
    height: 320,
    resizeMode: "contain",
  },

  ellipseMiddle: {
    position: "absolute",
    top: 250,
    alignSelf: "center",
    width: 320,
    height: 320,
    resizeMode: "contain",
  },

  ellipseBottom: {
    position: "absolute",
    top: 400,
    alignSelf: "center",
    width: 240,
    height: 240,
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseLeftSide: {
    position: "absolute",
    top: 255,
    left: 20,
    width: 170,
    height: 170,
    resizeMode: "contain",
    zIndex: 0,
  },

  ellipseRightSide: {
    position: "absolute",
    top: 255,
    right: 20,
    width: 170,
    height: 170,
    resizeMode: "contain",
    zIndex: -2,
  },

  card: {
    width: width * 0.8,
    height: height * 0.7,
    backgroundColor: "#F7F7F7",
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: "#C6C6C6",
    paddingTop: 30,
    paddingHorizontal: 32,
    paddingBottom: 60,
  },

fieldRow: {
  marginBottom: 20,
  position: "relative", // ensure the field row is the reference for absolute positioning
},

  input: {
    fontSize: 14,
    color: "#808690",
    borderBottomWidth: 2,
    borderBottomColor: "#D0D4DC",
    paddingBottom: 8,
    paddingLeft: 28,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },

  rememberText: {
    marginLeft: 7,
    fontSize: 14,
    color: "#A5AAB4",
  },

  signInButton: {
    alignSelf: "center",
    width: "86%",
    backgroundColor: "#8D98F0",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4E5DC8",
    paddingVertical: 16,
    alignItems: "center",
  },

  signInText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 14,
  },

  logoContainer: {
    width: 320,
    height: 132,
    alignSelf: "center",
    marginBottom: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  coinGroup: {
    width: 96,
    height: 108,
    position: "relative",
  },

  coinOuter: {
    position: "absolute",
    left: 74,
    top: 42,
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  coinInner: {
    position: "absolute",
    left: 68,
    top: 40,
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  dollar: {
    position: "absolute",
    left: 88,
    top: 55,
    width: 32,
    height: 42,
    resizeMode: "contain",
  },

  crown: {
    position: "absolute",
    left: 53,
    top: 20,
    width: 90,
    height: 52,
    resizeMode: "contain",
  },

  logoTextGroup: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 150,
    marginTop: -2,
    marginLeft: -10,
  },

  credit: {
    top: 20,
    right: 32,
    width: 135,
    height: 40,
    resizeMode: "contain",
    marginBottom: 4,
  },

  king: {
    top: 12,
    bottom: 5,
    right: 15,
    width: 110,
    height: 40,
    resizeMode: "contain",
  },

usernameIcon: {
  position: "absolute",
  left: 10, // slightly more to the left
  top: "50%", // vertical centering
  width: 20,
  height: 20,
  zIndex: 2,
  transform: [{ translateY: -10 }], // half of the icon size to vertically center
},

  usernameEllipseBack: {
    position: "absolute",
    left: 0,
    top: 5,
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  usernameEllipseFront: {
    position: "absolute",
    left: 5.5,
    top: 9,
    width: 7,
    height: 7,
    resizeMode: "contain",
  },

  usernameRect: {
    position: "absolute",
    left: 3.8,
    top: 16,
    width: 12,
    height: 7,
    resizeMode: "contain",
  },

  usernameVector: {
    position: "absolute",
    left: 0,
    top: 68,
    width: 16,
    height: 16,
    opacity: 1,
  },

lockIcon: {
  position: "absolute",
  left: 10, // same logic for consistency
  top: "50%",
  width: 20,
  height: 20,
  zIndex: 2,
  transform: [{ translateY: -10 }], // same centering logic
},
});