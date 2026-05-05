import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { memo, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Defs, Pattern, Rect } from "react-native-svg";

import TwirlBackground from "../components/TwirlBackground";
import { useUser } from "../components/UserContext";
import styles from "../styles/indexStyles";

const DOT_GAP = 5;
const OUTER_BORDER_WIDTH = 3;

const EllipseDots = memo(({ color }) => (
  <View pointerEvents="none" style={styles.ellipseDotsLayer}>
    <Svg width="100%" height="100%">
      <Defs>
        <Pattern
          id="ellipseDotPattern"
          x="0"
          y="0"
          width={DOT_GAP}
          height={DOT_GAP}
          patternUnits="userSpaceOnUse"
        >
          <Circle cx="1.5" cy="1.5" r="1.5" fill={color} opacity="0.1" />
        </Pattern>
      </Defs>

      <Rect width="100%" height="100%" fill="url(#ellipseDotPattern)" />
    </Svg>
  </View>
));

const CustomSwitch = memo(() => {
  const [checked, setChecked] = useState(false);
  const switchAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    const next = !checked;
    setChecked(next);

    Animated.timing(switchAnim, {
      toValue: next ? 1 : 0,
      duration: 90,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={{
        width: 44,
        height: 20,
        borderRadius: 10,
        backgroundColor: checked ? "#8D98F0" : "#D0D4DC",
        justifyContent: "center",
        zIndex: 20,
        elevation: 20,
      }}
    >
      <Animated.View
        pointerEvents="none"
        style={{
          position: "absolute",
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: checked ? "#3E4BB5" : "#FFFFFF",
          top: -2,
          left: -2,
          transform: [
            {
              translateX: switchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 20],
              }),
            },
          ],
        }}
      />
    </TouchableOpacity>
  );
});

export default function Index() {
  const { fromLoadout } = useLocalSearchParams();
  const { setDisplayName } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErrorVisible, setUsernameErrorVisible] = useState(false);
  const [passwordErrorVisible, setPasswordErrorVisible] = useState(false);

  const jiggleAnim = useRef(new Animated.Value(0)).current;

  const usernameErrorOpacity = useRef(new Animated.Value(0)).current;
  const passwordErrorOpacity = useRef(new Animated.Value(0)).current;

  const usernameErrorTimeoutRef = useRef(null);
  const passwordErrorTimeoutRef = useRef(null);

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const isWeb = Platform.OS === "web";
  const TOP_YELLOW_TOP = isWeb ? "20.75%" : "23.5%";

  const FIELD_ERROR_LEFT = 20;
  const FIELD_ERROR_BOTTOM = isWeb ? 70 : 60;
  const FIELD_ERROR_BG_COLOR = isWeb ? "#97A2FE" : "#97A2FE";

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

  useEffect(() => {
    return () => {
      clearTimeout(usernameErrorTimeoutRef.current);
      clearTimeout(passwordErrorTimeoutRef.current);
    };
  }, []);

  const jiggleScreen = () => {
    jiggleAnim.stopAnimation();
    jiggleAnim.setValue(0);

    return Animated.sequence([
      Animated.timing(jiggleAnim, {
        toValue: -10,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(jiggleAnim, {
        toValue: 10,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(jiggleAnim, {
        toValue: -8,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(jiggleAnim, {
        toValue: 8,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(jiggleAnim, {
        toValue: -4,
        duration: 45,
        useNativeDriver: true,
      }),
      Animated.timing(jiggleAnim, {
        toValue: 0,
        duration: 45,
        useNativeDriver: true,
      }),
    ]);
  };

  const runJiggle = () => {
  jiggleAnim.stopAnimation();
  jiggleAnim.setValue(0);

  Animated.sequence([
    Animated.timing(jiggleAnim, {
      toValue: -10,
      duration: 45,
      useNativeDriver: true,
    }),
    Animated.timing(jiggleAnim, {
      toValue: 10,
      duration: 45,
      useNativeDriver: true,
    }),
    Animated.timing(jiggleAnim, {
      toValue: -8,
      duration: 45,
      useNativeDriver: true,
    }),
    Animated.timing(jiggleAnim, {
      toValue: 8,
      duration: 45,
      useNativeDriver: true,
    }),
    Animated.timing(jiggleAnim, {
      toValue: -4,
      duration: 45,
      useNativeDriver: true,
    }),
    Animated.timing(jiggleAnim, {
      toValue: 0,
      duration: 45,
      useNativeDriver: true,
    }),
  ]).start();
};

 const showFieldError = (
  setVisible,
  opacityValue,
  timeoutRef,
  otherSetVisible = () => {},
  otherOpacityValue = null,
  otherTimeoutRef = null
) => {
  clearTimeout(timeoutRef?.current);
  clearTimeout(otherTimeoutRef?.current);

  otherSetVisible(false);

  if (otherOpacityValue) {
    otherOpacityValue.stopAnimation();
    otherOpacityValue.setValue(0);
  }

  setVisible(true);

  opacityValue.stopAnimation();
  opacityValue.setValue(0);

  runJiggle();

  Animated.timing(opacityValue, {
    toValue: 0.5,
    duration: 120,
    useNativeDriver: true,
  }).start();

  timeoutRef.current = setTimeout(() => {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 160,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  }, 1600);
};

const showUsernameError = () => {
  showFieldError(
    setUsernameErrorVisible,
    usernameErrorOpacity,
    usernameErrorTimeoutRef,
    setPasswordErrorVisible,
    passwordErrorOpacity,
    passwordErrorTimeoutRef
  );
};

const showPasswordError = () => {
  showFieldError(
    setPasswordErrorVisible,
    passwordErrorOpacity,
    passwordErrorTimeoutRef,
    setUsernameErrorVisible,
    usernameErrorOpacity,
    usernameErrorTimeoutRef
  );
};

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
            transform: [...(style.transform || []), { scaleX }, { scaleY }],
          },
        ]}
      />
    );
  };

  const renderGradientEllipse = (style, flip = false) => (
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
          <EllipseDots color="#3E4BB5" />
        </LinearGradient>
      </View>
    </>
  );

  const renderYellowEllipse = (style, flipVertical = false) => (
    <>
      {renderBlackOuterBorder(style)}

      <LinearGradient
        pointerEvents="none"
        colors={["#FFF200", "#FFC700"]}
        start={{ x: 0, y: flipVertical ? 0 : 1 }}
        end={{ x: 0, y: flipVertical ? 1 : 0 }}
        style={[style, { overflow: "hidden" }]}
      >
        <EllipseDots color="#8C6A00" />
      </LinearGradient>
    </>
  );

  const renderFieldError = (message, opacity) => (
    <Animated.View
      pointerEvents="none"
      style={{
        position: "absolute",
        left: FIELD_ERROR_LEFT,
        bottom: FIELD_ERROR_BOTTOM,
        borderRadius: 10,
        paddingVertical: 5.5,
        paddingHorizontal: 14,
        zIndex: 999,
        elevation: isWeb ? 0 : 999,
        shadowColor: "#000",
        shadowOpacity: isWeb ? 0 : 0.2,
        shadowRadius: isWeb ? 0 : 8,
        shadowOffset: isWeb ? { width: 0, height: 0 } : { width: 0, height: 3 },
      }}
    >
      <Animated.View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: FIELD_ERROR_BG_COLOR,
          borderRadius: 10,
          opacity,
        }}
      />

      <Animated.View
        pointerEvents="none"
        style={{
          position: "absolute",
          bottom: -8,
          left: 24,
          width: 0,
          height: 0,
          borderLeftWidth: 8,
          borderRightWidth: 8,
          borderTopWidth: 8,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderTopColor: FIELD_ERROR_BG_COLOR,
          opacity,
        }}
      />

      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Inter",
          fontWeight: "700",
          fontSize: 13,
        }}
      >
        {message}
      </Text>
    </Animated.View>
  );

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [
          { translateX: Animated.add(slideXAnim, jiggleAnim) },
          { translateY: slideYAnim },
        ],
      }}
    >
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/bg.png")} style={styles.bgPattern} />

        <View style={styles.topBar} />

<View style={styles.stage}>
  {renderGradientEllipse(styles.ellipseTopCenterBack)}
  {renderGradientEllipse(styles.bgEllipse3, true)}
  {renderGradientEllipse(styles.bgEllipse4)}

  <TwirlBackground source={require("../assets/twirl-background-png-1.png")} />

  {renderGradientEllipse(styles.ellipseTopCenter)}
  {renderGradientEllipse(styles.ellipseLeftSide, true)}
  {renderGradientEllipse(styles.ellipseRightSide)}
  {renderGradientEllipse(styles.ellipseLeftSideBottom, true)}
  {renderGradientEllipse(styles.ellipseRightSideBottom)}

  {renderYellowEllipse({ ...styles.ellipseTop, top: TOP_YELLOW_TOP })}
  {renderYellowEllipse({ ...styles.ellipseTopLeft, top: TOP_YELLOW_TOP })}

  {renderYellowEllipse(styles.ellipseBottom, true)}
  {renderYellowEllipse(styles.ellipseBottomLeft, true)}

          <View pointerEvents="none" style={styles.fancyCrownSvg}>
            <Image
              source={require("../assets/fancy_crown.png")}
              style={[styles.fancyCrownImage, styles.crownBorderWide]}
            />

            <Image
              source={require("../assets/fancy_crown.png")}
              style={[styles.fancyCrownImage, styles.crownBorder]}
            />

            <Image
              source={require("../assets/fancy_crown.png")}
              style={styles.fancyCrownImage}
            />

            <Image
              source={require("../assets/fancy_crown.png")}
              style={[styles.fancyCrownImage, styles.crownLighten]}
            />

            <Image
              source={require("../assets/fancy_crown.png")}
              style={[styles.fancyCrownImage, styles.fancyCrownTint]}
            />
          </View>

          {renderGradientEllipse(styles.ellipseTopCenter)}

          <View pointerEvents="none" style={styles.wandSvg}>
            <Image
              source={require("../assets/wand2.png")}
              style={[styles.wandImage, styles.wandBorder]}
            />

            <Image
              source={require("../assets/wand2.png")}
              style={styles.wandImage}
            />

            <Image
              source={require("../assets/wand2.png")}
              style={[styles.wandImage, styles.wandTint]}
            />
          </View>

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

<View style={{ position: "relative", zIndex: 50 }}>
  {usernameErrorVisible &&
    renderFieldError("Please input username", usernameErrorOpacity)}

  <View style={styles.fieldRow}>
    <View style={styles.fieldIconContainer}>
      <Image
        source={require("../assets/avatar.png")}
        style={styles.avatarIcon}
      />
    </View>

    <TextInput
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
      style={styles.input}
    />
  </View>
</View>

<View style={{ position: "relative", zIndex: 50 }}>
  {passwordErrorVisible &&
    renderFieldError(
      `Please input password for ${username.trim()}`,
      passwordErrorOpacity
    )}

  <View style={styles.fieldRow}>
    <View style={styles.fieldIconContainer}>
      <Image
        source={require("../assets/lock.png")}
        style={styles.lockIcon}
      />
    </View>

    <TextInput
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      style={styles.input}
    />
  </View>
</View>

              <View style={styles.rememberRow}>
                <CustomSwitch />

                <Text style={styles.rememberText}>Remember me</Text>
              </View>

              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => {
                  if (!username.trim()) {
                    showUsernameError();
                    return;
                  }

                  if (!password.trim()) {
                    showPasswordError();
                    return;
                  }

                  setDisplayName(username);
                  router.push("/loadin");
                }}
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