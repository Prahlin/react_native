import { LinearGradient } from "expo-linear-gradient";
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
  const [cardHeight, setCardHeight] = useState(0);
  

  const dots = [
    [65, 51], [70, 51], [75, 51], [80, 51], [85, 51], [90, 51], [95, 51],
    [65, 56], [70, 56], [75, 56], [80, 56], [85, 56], [90, 56], [95, 56], [100, 56],
    [65, 61], [70, 61], [75, 61], [80, 61], [85, 61], [90, 61], [95, 61], [100, 61],
    [60, 66], [65, 66], [70, 66], [75, 66], [80, 66], [85, 66], [90, 66], [95, 66], [100, 66],
    [60, 71], [65, 71], [70, 71], [75, 71], [80, 71], [85, 71], [90, 71], [95, 71], [100, 71],
    [60, 76], [65, 76], [70, 76], [75, 76], [80, 76], [85, 76], [90, 76], [95, 76], [100, 76],
    [60, 81], [65, 81], [70, 81], [75, 81], [80, 81], [85, 81], [90, 81], [95, 81], [100, 81],
    [65, 86], [70, 86], [75, 86], [80, 86], [85, 86], [90, 86], [95, 86], [100, 86],
    [65, 91], [70, 91], [75, 91], [80, 91], [85, 91], [90, 91], [95, 91],
    [70, 96], [75, 96], [80, 96], [85, 96], [90, 96],
  ];

  // 🔵 BLUE GRADIENT (unchanged)
const renderGradientEllipse = (style, flip = false) => {
  const borderWidth = style.borderWidth ?? 3;
  const borderRadius = style.borderRadius ?? 100;

  return (
    <View
      style={[
        style,
        {
          backgroundColor: "#3E4BB5",
          borderWidth: 0,
          padding: borderWidth,
          overflow: "hidden",
        },
      ]}
    >
      <LinearGradient
        colors={["#AAB4FF", "#5F6FE8"]}
        start={flip ? { x: 1, y: 0.5 } : { x: 0, y: 0.5 }}
        end={flip ? { x: 0, y: 0.5 } : { x: 1, y: 0.5 }}
        style={{
          flex: 1,
          borderRadius: borderRadius - borderWidth,
        }}
      />
    </View>
  );
};

  // 🟡 YELLOW GRADIENT (VERTICAL FLIP SUPPORT)
  const renderYellowEllipse = (style, flipVertical = false) => (
    <LinearGradient
      colors={["#FFF200", "#FFC700"]}
      start={{ x: 0, y: flipVertical ? 0 : 1 }}
      end={{ x: 0, y: flipVertical ? 1 : 0 }}
      style={style}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/bg.png")} style={styles.bgPattern} />

      <View style={styles.topBar} />

      <View style={styles.stage}>
        
        {/* 🔵 BLUE BACKGROUND */}
{/* 🔵 BLUE BACKGROUND */}
{renderGradientEllipse(styles.bgEllipse1, true)}
{renderGradientEllipse(styles.bgEllipse2)}

{renderGradientEllipse(styles.bgEllipse3, true)}
{renderGradientEllipse(styles.bgEllipse4)}

<TwirlBackground source={require("../assets/twirl-background-png-1.png")} />

{renderGradientEllipse(styles.ellipseLeftSide, true)}
{renderGradientEllipse(styles.ellipseRightSide)}

{renderGradientEllipse(styles.ellipseLeftSideBottom, true)}
{renderGradientEllipse(styles.ellipseRightSideBottom)}

        <TwirlBackground source={require("../assets/twirl-background-png-1.png")} />

        {renderGradientEllipse(styles.ellipseLeftSide, true)}
        {renderGradientEllipse(styles.ellipseRightSide)}
{renderGradientEllipse(styles.ellipseLeftSideBottom, true)}
        {renderGradientEllipse(styles.ellipseRightSideBottom)}

        {/* 🟡 YELLOW ELLIPSES */}

        {/* TOP */}
        {renderYellowEllipse(styles.ellipseTop)}
        {renderYellowEllipse(styles.ellipseTopLeft)}

        {/* MIDDLE */}
        {renderYellowEllipse(
          [styles.ellipseMiddle, { top: cardHeight / 2 - 80 }]
        )}
        {renderYellowEllipse(
          [styles.ellipseMiddleLeft, { top: cardHeight / 2 - 80 }]
        )}

        {/* BOTTOM (VERTICAL FLIP ✅) */}
        {renderYellowEllipse(styles.ellipseBottom, true)}
        {renderYellowEllipse(styles.ellipseBottomLeft, true)}

        {/* CARD */}
        <View
          style={styles.card}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setCardHeight(height);
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            
            {/* LOGO */}
            <View style={styles.logoContainer}>
              <View style={styles.coinGroup}>

                <View style={styles.coinOuterCircle} />

                <LinearGradient
                  colors={["#97A2FE", "#3E4BB5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.coinGradientCircle}
                />

                <View style={styles.coinDotsLayer} pointerEvents="none">
                  {dots.map(([left, top], index) => (
                    <View
                      key={index}
                      style={[
                        styles.coinDot,
                        {
                          left: `${left}%`,
                          top: `${top}%`,
                          width: 1.5,
                          height: 1.5,
                          borderRadius: 0.75,
                        },
                      ]}
                    />
                  ))}
                </View>

                {/* ICONS (UNCHANGED — restored) */}
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
                <Image source={require("../assets/credit.png")} style={styles.credit} />
                <Image source={require("../assets/king.png")} style={styles.king} />
              </View>
            </View>

            {/* INPUTS */}
            <View style={styles.fieldRow}>
              <View style={styles.usernameIcon}>
                <Image source={require("../assets/avatar.png")} style={styles.fieldIcon} />
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
                <Image source={require("../assets/lock.png")} style={styles.fieldIcon} />
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
  );
}