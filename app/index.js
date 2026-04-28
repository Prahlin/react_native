import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TwirlBackground from "../components/TwirlBackground";
import styles from "../styles/indexStyles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Index() {
  const { fromLoadout } = useLocalSearchParams();

  const [remember, setRemember] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);

  const slideAnim = useRef(
    new Animated.Value(fromLoadout === "1" ? SCREEN_WIDTH : 0)
  ).current;

  useEffect(() => {
    if (fromLoadout === "1") {
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: -12,
          duration: 360,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          friction: 4,
          tension: 90,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [fromLoadout, slideAnim]);

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{ translateX: slideAnim }],
      }}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/bg.png")}
          style={styles.bgPattern}
        />

        <View style={styles.topBar} />

        <View style={styles.stage}>
          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.bgEllipse1}
          />
          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.bgEllipse2}
          />
          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.bgEllipse3}
          />
          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.bgEllipse4}
          />

          <TwirlBackground
            source={require("../assets/twirl-background-png-1.png")}
          />

          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.ellipseLeftSide}
          />
          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.ellipseRightSide}
          />

          <Image
            source={require("../assets/ellipse-13.png")}
            style={styles.ellipseTop}
          />

          <Image
            source={require("../assets/ellipse-13-1.png")}
            style={[
              styles.ellipseMiddle,
              {
                top: cardHeight / 2 - 80,
              },
            ]}
          />

          <Image
            source={require("../assets/ellipse-13-2.png")}
            style={styles.ellipseBottom}
          />

          <Image
            source={require("../assets/ellipse-13.png")}
            style={styles.ellipseTopLeft}
          />

          <Image
            source={require("../assets/ellipse-13-1.png")}
            style={[
              styles.ellipseMiddleLeft,
              {
                top: cardHeight / 2 - 80,
              },
            ]}
          />

          <Image
            source={require("../assets/ellipse-13-2.png")}
            style={styles.ellipseBottomLeft}
          />

          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.ellipseLeftSideBottom}
          />

          <Image
            source={require("../assets/ellipse-14.png")}
            style={styles.ellipseRightSideBottom}
          />

          <View
            style={styles.card}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setCardHeight(height);
            }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View style={styles.logoContainer}>
                <View style={styles.coinGroup}>
                  <Image
                    source={require("../assets/ellipse-4.png")}
                    style={styles.coinOuter}
                  />
                  <Image
                    source={require("../assets/ellipse-5.png")}
                    style={styles.coinInner}
                  />
                  <Image
                    source={require("../assets/dollar.png")}
                    style={styles.dollar}
                  />
                  <Image
                    source={require("../assets/union.png")}
                    style={styles.crown}
                  />
                </View>

                <View style={styles.logoTextGroup}>
                  <Image
                    source={require("../assets/credit.png")}
                    style={styles.credit}
                  />
                  <Image
                    source={require("../assets/king.png")}
                    style={styles.king}
                  />
                </View>
              </View>

              <View style={styles.fieldRow}>
                <View style={styles.usernameIcon}>
                  <Image
                    source={require("../assets/avatar.png")}
                    resizeMode="contain"
                    style={styles.fieldIcon}
                  />
                </View>

                <View style={{ width: "85%" }}>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="#B7BBC5"
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.fieldRow}>
                <View style={styles.lockIcon}>
                  <Image
                    source={require("../assets/lock.png")}
                    resizeMode="contain"
                    style={styles.fieldIcon}
                  />
                </View>

                <View style={{ width: "85%" }}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#B7BBC5"
                    secureTextEntry
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.rememberRow}>
                <Switch
                  value={remember}
                  onValueChange={setRemember}
                  trackColor={{ false: "#C7CBD6", true: "#8A96F0" }}
                  thumbColor="#FFFFFF"
                  style={styles.switchIcon}
                />

                <Text style={styles.rememberText}>Remember me</Text>
              </View>

              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => router.push("/loadin")}
                activeOpacity={0.8}
              >
                <Text style={styles.signInText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}