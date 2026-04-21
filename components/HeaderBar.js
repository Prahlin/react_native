import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ICON_SIZE = 22;

export default function HeaderBar() {
  const [isBellClicked, setIsBellClicked] = useState(false);

  return (
    <View style={styles.header}>
      {/* LEFT */}
      <Text style={styles.title}>Welcome, Steve</Text>

      {/* RIGHT */}
      <View style={styles.rightContainer}>
        {/* Bell */}
        <Pressable
          onPress={() => setIsBellClicked(true)}
          hitSlop={10}
          style={styles.bellButton}
        >
          <Image
            source={
              isBellClicked
                ? require("../assets/bell-clicked.png")
                : require("../assets/frame-223.png")
            }
            style={styles.bellIcon}
            resizeMode="contain"
          />
        </Pressable>

        {/* Three dots */}
        <Pressable hitSlop={10} style={styles.menuButton}>
          <Text style={styles.menuDots}>⋮</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: "#8E95E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,

    paddingTop: 22, // 👈 keeps everything slightly lower

    zIndex: 999,
    elevation: 999,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: ICON_SIZE,
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  bellButton: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
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
  },

  menuDots: {
    color: "#FFFFFF",
    fontSize: ICON_SIZE,
    lineHeight: ICON_SIZE,
    fontWeight: "700",
  },
});