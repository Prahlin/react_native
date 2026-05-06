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

  frameRewards: {
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
    width: 246,
    height: 222,
  },

  section: {
    width: "100%",
    marginBottom: 24,
  },

  sectionHeader: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "900",
    color: "#000000",
    textAlign: "center",
    marginBottom: 4,
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },

  label: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#000000",
  },

  value: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#000000",
    textAlign: "right",
  },

  valueColumn: {
    alignItems: "flex-end",
  },

  valuePrimary: {
    fontSize: 18,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#000000",
    textAlign: "right",
  },

  valueSecondary: {
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#000000",
    textAlign: "right",
  },
});

export default styles;