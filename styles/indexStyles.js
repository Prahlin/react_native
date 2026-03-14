import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


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
    paddingTop: height * 0.09,
    overflow: "hidden",
  },

  bgEllipse1: {
    position: "absolute",
    top: height * 0.07,
    left: -width * 0.22,
    width: width * 1.05,
    height: height * 0.25,
    resizeMode: "contain",
  },

  bgEllipse2: {
    position: "absolute",
    top: height * 0.07,
    right: -width * 0.22,
    width: width * 1.05,
    height: height * 0.25,
    resizeMode: "contain",
  },

  bgEllipse3: {
    position: "absolute",
    bottom: height * 0.06,
    left: -width * 0.22,
    width: width * 1.05,
    height: height * 0.25,
    resizeMode: "contain",
    zIndex: -2,
  },

  bgEllipse4: {
    position: "absolute",
    bottom: height * 0.06,
    right: -width * 0.22,
    width: width * 1.05,
    height: height * 0.25,
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseTop: {
    position: "absolute",
    top: height * 0.06,
    alignSelf: "center",
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: "contain",
  },

  ellipseMiddle: {
    position: "absolute",
    top: height * 0.31,
    alignSelf: "center",
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: "contain",
  },

  ellipseBottom: {
    position: "absolute",
    top: height * 0.5,
    alignSelf: "center",
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseLeftSide: {
    position: "absolute",
    top: height * 0.32,
    left: width * 0.05,
    width: width * 0.43,
    height: width * 0.43,
    resizeMode: "contain",
    zIndex: 0,
  },

  ellipseRightSide: {
    position: "absolute",
    top: height * 0.32,
    right: width * 0.05,
    width: width * 0.43,
    height: width * 0.43,
    resizeMode: "contain",
    zIndex: -2,
  },

  card: {
    width: width * 0.8,
    backgroundColor: "#F7F7F7",
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: "#C6C6C6",
    paddingTop: height * 0.04,
    paddingHorizontal: width * 0.08,
    paddingBottom: height * 0.08,
  },

fieldRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
},

  input: {
    flex: 1,
    fontSize: 14,
    color: "#808690",
    borderBottomWidth: 2,
    borderBottomColor: "#D0D4DC",
    paddingBottom: 8,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.06,
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
    width: "100%",
    height: height * 0.16,
    alignSelf: "center",
    marginBottom: height * 0.055,
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
  width: 22,
  height: 22,
  marginLeft: 4,
  marginRight: 8,
  justifyContent: "center",
  alignItems: "center",
},

  fieldIcon: {
    width: "100%",
    height: "100%",
  },

lockIcon: {
  width: 22,
  height: 22,
  marginLeft: 4,
  marginRight: 8,
  justifyContent: "center",
  alignItems: "center",
},
});