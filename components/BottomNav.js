import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";
import styles from "../styles/bottomNavStyles";

export default function BottomNav({ activeTab = "home" }) {
  return (
    <View style={styles.bottomNav}>
<Pressable style={styles.frame26} onPress={() => router.push("/home")}>
  <Image
    source={
      activeTab === "home"
        ? require("../assets/frame-26-blue.png")
        : require("../assets/frame-26.png")
    }
    style={styles.bottomNavIcon}
  />
</Pressable>

      <Pressable style={styles.frame27} onPress={() => router.push("/activity")}>
        <Image
          source={
            activeTab === "activity"
              ? require("../assets/frame-27-blue.png")
              : require("../assets/frame-27.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable style={styles.frame28} onPress={() => router.push("/notifications")}>
        <Image
          source={
            activeTab === "notifications"
              ? require("../assets/frame-28-blue.png")
              : require("../assets/frame-28.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable style={styles.frame29} onPress={() => router.push("/rewards")}>
        <Image
          source={
            activeTab === "rewards"
              ? require("../assets/frame-29-blue.png")
              : require("../assets/frame-29.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable style={styles.frame31} onPress={() => router.push("/stats")}>
        <Image
          source={
            activeTab === "stats"
              ? require("../assets/frame-31-blue.png")
              : require("../assets/frame-31.png")
          }
          style={styles.bottomNavIcon}
        />
      </Pressable>
    </View>
  );
}