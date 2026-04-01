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
    top: "7%",
    left: "-22%",
    width: "105%",
    height: "25%",
    resizeMode: "contain",
  },

  bgEllipse2: {
    position: "absolute",
    top: "7%",
    right: "-22%",
    width: "105%",
    height: "25%",
    resizeMode: "contain",
  },

  bgEllipse3: {
    position: "absolute",
    bottom: "6%",
    left: "-22%",
    width: "105%",
    height: "25%",
    resizeMode: "contain",
    zIndex: -2,
  },

  bgEllipse4: {
    position: "absolute",
    bottom: "6%",
    right: "-22%",
    width: "105%",
    height: "25%",
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseTop: {
    position: "absolute",
    top: "6%",
    alignSelf: "center",
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },

  ellipseMiddle: {
    position: "absolute",
    top: "31%",
    alignSelf: "center",
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },

  ellipseBottom: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    zIndex: -2,
  },

  ellipseLeftSide: {
    position: "absolute",
    top: "32%",
    left: "5%",
    width: "43%",
    height: "43%",
    resizeMode: "contain",
    zIndex: 0,
  },

  ellipseRightSide: {
    position: "absolute",
    top: "32%",
    right: "5%",
    width: "43%",
    height: "43%",
    resizeMode: "contain",
    zIndex: -2,
  },

  card: {
    width: "80%",
    backgroundColor: "#F7F7F7",
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: "#C6C6C6",
    paddingTop: "4%",
    paddingHorizontal: "8%",
    paddingBottom: "8%",
  },

fieldRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "2.5%",
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
    marginBottom: "6%",
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
    height: "16%",
    alignSelf: "center",
    marginBottom: "5.5%",
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