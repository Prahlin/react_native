import { StyleSheet } from "react-native";

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

  bgEllipse1: {
    position: "absolute",
    top: "2%",
    left: "2%",
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  bgEllipse2: {
    position: "absolute",
    top: "2%",
    right: "2%",
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  bgEllipse3: {
    position: "absolute",
    bottom: "20%",
    left: "3.5%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: -1,
  },

  bgEllipse4: {
    position: "absolute",
    bottom: "20%",
    right: "3.5%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: -1,
  },

  ellipseTopLeft: {
    position: "absolute",
    top: "2%",
    left: "2%",
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  ellipseTop: {
    position: "absolute",
    top: "2%",
    right: "2%",
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  ellipseMiddleLeft: {
    position: "absolute",
    top: "26%",
    left: "4%",
    width: 300,
    height: 300,
    resizeMode: "contain",
    zIndex: 4,
  },

  ellipseMiddle: {
    position: "absolute",
    top: "26%",
    right: "4%",
    width: 300,
    height: 300,
    resizeMode: "contain",
    zIndex: 4,
  },

  ellipseBottomLeft: {
    position: "absolute",
    bottom: "2%",
    left: "2%",
    width: 300,
    height: 300,
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseBottom: {
    position: "absolute",
    bottom: "2%",
    right: "2%",
    width: 300,
    height: 300,
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseLeftSide: {
    position: "absolute",
    top: "25%",
    left: "3.5%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: 1,
  },

  ellipseRightSide: {
    position: "absolute",
    top: "25%",
    right: "3.5%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: 1,
  },

  ellipseLeftSide2: {
    position: "absolute",
    top: "50%",
    left: "2%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: -1,
  },

  ellipseRightSide2: {
    position: "absolute",
    top: "50%",
    right: "2%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: -1,
  },

  ellipseMiddleLower: {
    position: "absolute",
    top: "50%",
    right: "2%",
    width: 300,
    height: 300,
    resizeMode: "contain",
    zIndex: -4,
  },

  ellipseLeftSideBottom: {
    position: "absolute",
    bottom: "2%",
    left: "2%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: -3,
  },

  ellipseRightSideBottom: {
    position: "absolute",
    bottom: "2%",
    right: "2%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: -3,
  },

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
    paddingTop: 0,
    marginRight: 8,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },

  switchIcon: {
    marginBottom: 40,
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
    marginLeft: 12,
    marginTop: 40,
  },

  credit: {
    marginLeft: -20,
    marginTop: 60,
    width: 135,
    height: 40,
    resizeMode: "contain",
    marginBottom: 4,
  },

  king: {
    marginLeft: -10,
    width: 110,
    height: 40,
    resizeMode: "contain",
  },

  usernameIcon: {
    width: 24,
    height: 24,
    marginLeft: 6,
    marginRight: 8,
    marginTop: 40,
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
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});