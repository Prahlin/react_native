import { router } from "expo-router";
import { useState } from "react";
import {
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

export default function Index() {
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/bg.png")}
        style={styles.bgPattern}
      />

      <View style={styles.topBar} />

      <View style={styles.stage}>
        <Image
          source={require("../assets/ellipse-10.png")}
          style={styles.bgEllipse1}
        />
        <Image
          source={require("../assets/ellipse-10-1.png")}
          style={styles.bgEllipse2}
        />
        <Image
          source={require("../assets/ellipse-11.png")}
          style={styles.bgEllipse3}
        />
        <Image
          source={require("../assets/ellipse-12.png")}
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
          source={require("../assets/ellipse-13.png")}
          style={styles.ellipseTop}
        />
        <Image
          source={require("../assets/ellipse-13-1.png")}
          style={styles.ellipseMiddle}
        />
        <Image
          source={require("../assets/ellipse-13-2.png")}
          style={styles.ellipseBottom}
        />
        <Image
          source={require("../assets/ellipse-15.png")}
          style={styles.ellipseRightSide}
        />

        <View style={styles.card}>
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
                source={require("../assets/username.png")}
                resizeMode="contain"
                style={styles.fieldIcon}
              />
            </View>

            <TextInput
              placeholder="Username"
              placeholderTextColor="#B7BBC5"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldRow}>
            <View style={styles.lockIcon}>
              <Image
                source={require("../assets/password.png")}
                resizeMode="contain"
                style={styles.fieldIcon}
              />
            </View>

            <TextInput
              placeholder="Password"
              placeholderTextColor="#D1D4DB"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.rememberRow}>
            <Switch
              value={remember}
              onValueChange={setRemember}
              trackColor={{ false: "#C7CBD6", true: "#8A96F0" }}
              thumbColor="#FFFFFF"
            />

            <Text style={styles.rememberText}>
              Remember me
            </Text>
          </View>

          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.push("/loadin")}
            activeOpacity={0.8}
          >
            <Text style={styles.signInText}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}