import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TwirlBackground from "../components/TwirlBackground";
import styles from "../styles/indexStyles";

export default function Index() {
  const [remember, setRemember] = useState(false);

  const { fromLoadout } = useLocalSearchParams();

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const slideXAnim = useRef(
    new Animated.Value(fromLoadout === "1" ? screenWidth : 0)
  ).current;

  const slideYAnim = useRef(
    new Animated.Value(fromLoadout === "1" ? 0 : -screenHeight)
  ).current;

  useEffect(() => {
    if (fromLoadout === "1") {
      Animated.sequence([
        Animated.timing(slideXAnim, {
          toValue: -18,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(slideXAnim, {
          toValue: 8,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(slideXAnim, {
          toValue: -4,
          duration: 70,
          useNativeDriver: true,
        }),
        Animated.timing(slideXAnim, {
          toValue: 0,
          duration: 80,
          useNativeDriver: true,
        }),
      ]).start();

      return;
    }

    Animated.sequence([
      Animated.timing(slideYAnim, {
        toValue: 18,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideYAnim, {
        toValue: -8,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(slideYAnim, {
        toValue: 4,
        duration: 70,
        useNativeDriver: true,
      }),
      Animated.timing(slideYAnim, {
        toValue: 0,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fromLoadout, slideXAnim, slideYAnim]);

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

  const DOT_GAP = 5;
  const OUTER_BORDER_WIDTH = 3;

  const EllipseDots = ({ width, height, color }) => {
    const arr = [];

    for (let y = 0; y <= height; y += DOT_GAP) {
      for (let x = 0; x <= width; x += DOT_GAP) {
        arr.push(
          <View
            key={`${x}-${y}`}
            pointerEvents="none"
            style={[
              styles.ellipseDot,
              {
                left: x,
                top: y,
                backgroundColor: color,
              },
            ]}
          />
        );
      }
    }

    return (
      <View pointerEvents="none" style={styles.ellipseDotsLayer}>
        {arr}
      </View>
    );
  };

  const renderBlackOuterBorder = (style) => {
    const scaleX = (style.width + OUTER_BORDER_WIDTH * 2) / style.width;
    const scaleY = (style.height + OUTER_BORDER_WIDTH * 2) / style.height;

    return (
      <View
        pointerEvents="none"
        style={[
          style,
          {
            backgroundColor: "transparent",
            borderWidth: OUTER_BORDER_WIDTH,
            borderColor: "rgba(17,17,17,0.7)",
            zIndex: (style.zIndex ?? 0) - 1,
            transform: [
              ...(style.transform || []),
              { scaleX },
              { scaleY },
            ],
          },
        ]}
      />
    );
  };

  const renderGradientEllipse = (style, flip = false) => {
    const width = style.width ?? 200;
    const height = style.height ?? 200;

    return (
      <>
        {renderBlackOuterBorder(style)}

        <View pointerEvents="none" style={[style, { overflow: "hidden" }]}>
          <LinearGradient
            pointerEvents="none"
            colors={["#AAB4FF", "#5F6FE8"]}
            start={flip ? { x: 1, y: 0.5 } : { x: 0, y: 0.5 }}
            end={flip ? { x: 0, y: 0.5 } : { x: 1, y: 0.5 }}
            style={{ flex: 1 }}
          >
            <EllipseDots width={width} height={height} color="#3E4BB5" />
          </LinearGradient>
        </View>
      </>
    );
  };

  const renderYellowEllipse = (style, flipVertical = false) => {
    const width = style.width ?? 300;
    const height = style.height ?? 300;

    return (
      <>
        {renderBlackOuterBorder(style)}

        <LinearGradient
          pointerEvents="none"
          colors={["#FFF200", "#FFC700"]}
          start={{ x: 0, y: flipVertical ? 0 : 1 }}
          end={{ x: 0, y: flipVertical ? 1 : 0 }}
          style={[style, { overflow: "hidden" }]}
        >
          <EllipseDots width={width} height={height} color="#8C6A00" />
        </LinearGradient>
      </>
    );
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [
          { translateX: slideXAnim },
          { translateY: slideYAnim },
        ],
      }}
    >
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/bg.png")} style={styles.bgPattern} />

        <View style={styles.topBar} />

        <View style={styles.stage}>
          {renderGradientEllipse(styles.bgEllipse1, true)}
          {renderGradientEllipse(styles.bgEllipse2)}
          {renderGradientEllipse(styles.bgEllipse3, true)}
          {renderGradientEllipse(styles.bgEllipse4)}

          <TwirlBackground source={require("../assets/twirl-background-png-1.png")} />

          {renderGradientEllipse(styles.ellipseLeftSide, true)}
          {renderGradientEllipse(styles.ellipseRightSide)}
          {renderGradientEllipse(styles.ellipseLeftSideBottom, true)}
          {renderGradientEllipse(styles.ellipseRightSideBottom)}

          {renderYellowEllipse(styles.ellipseTop)}
          {renderYellowEllipse(styles.ellipseTopLeft)}

          {renderYellowEllipse(styles.ellipseMiddle)}
          {renderYellowEllipse(styles.ellipseMiddleLeft)}

          {renderYellowEllipse(styles.ellipseBottom, true)}
          {renderYellowEllipse(styles.ellipseBottomLeft, true)}

          <View style={styles.card}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View style={styles.logoContainer}>
                <View style={styles.coinGroup}>
                  <View style={styles.coinOuterCircle} />

                  <LinearGradient
                    colors={["#97A2FE", "#3E4BB5"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.coinGradientCircle}
                  />

                  <View style={styles.coinDotsLayer}>
                    {dots.map(([left, top], i) => (
                      <View
                        key={i}
                        style={[
                          styles.coinDot,
                          {
                            left: `${left}%`,
                            top: `${top}%`,
                          },
                        ]}
                      />
                    ))}
                  </View>

                  <Image source={require("../assets/dollar.png")} style={styles.dollar} />
                  <Image source={require("../assets/union.png")} style={styles.crown} />
                </View>

                <View style={styles.logoTextGroup}>
                  <Image source={require("../assets/credit.png")} style={styles.credit} />
                  <Image source={require("../assets/king.png")} style={styles.king} />
                </View>
              </View>

              <View style={styles.fieldRow}>
                <TextInput placeholder="Username" style={styles.input} />
              </View>

              <View style={styles.fieldRow}>
                <TextInput placeholder="Password" secureTextEntry style={styles.input} />
              </View>

              <View style={styles.rememberRow}>
<CustomSwitch value={remember} onValueChange={setRemember} />
                <Text style={styles.rememberText}>Remember me</Text>
              </View>

              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => router.push("/loadin")}
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