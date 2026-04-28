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

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/bg.png")} style={styles.bgPattern} />

      <View style={styles.topBar} />

      <View style={styles.stage}>
        <Image source={require("../assets/ellipse-14.png")} style={styles.bgEllipse1} />
        <Image source={require("../assets/ellipse-14.png")} style={styles.bgEllipse2} />
        <Image source={require("../assets/ellipse-14.png")} style={styles.bgEllipse3} />
        <Image source={require("../assets/ellipse-14.png")} style={styles.bgEllipse4} />

        <TwirlBackground source={require("../assets/twirl-background-png-1.png")} />

        <Image source={require("../assets/ellipse-14.png")} style={styles.ellipseLeftSide} />
        <Image source={require("../assets/ellipse-14.png")} style={styles.ellipseRightSide} />

        <Image source={require("../assets/ellipse-13.png")} style={styles.ellipseTop} />

        <Image
          source={require("../assets/ellipse-13-1.png")}
          style={[styles.ellipseMiddle, { top: cardHeight / 2 - 80 }]}
        />

        <Image source={require("../assets/ellipse-13-2.png")} style={styles.ellipseBottom} />

        <Image source={require("../assets/ellipse-13.png")} style={styles.ellipseTopLeft} />

        <Image
          source={require("../assets/ellipse-13-1.png")}
          style={[styles.ellipseMiddleLeft, { top: cardHeight / 2 - 80 }]}
        />

        <Image source={require("../assets/ellipse-13-2.png")} style={styles.ellipseBottomLeft} />

        <Image source={require("../assets/ellipse-14.png")} style={styles.ellipseLeftSideBottom} />
        <Image source={require("../assets/ellipse-14.png")} style={styles.ellipseRightSideBottom} />

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
                
                <Image
                  source={require("../assets/ellipse-4.png")}
                  style={styles.coinOuter}
                />

                <Image
                  source={require("../assets/ellipse-5.png")}
                  style={styles.coinInner}
                />

                {/* DOTS (original layout restored) */}
                <View style={styles.coinDotsLayer} pointerEvents="none">
{[
  [63, 49], [68, 49], [73, 49], [78, 49], [83, 49], [88, 49], [93, 49], 

  [63, 54], [68, 54], [73, 54], [78, 54], [83, 54], [88, 54], [93, 54], [98, 54],

  [63, 59], [68, 59], [73, 59], [78, 59], [83, 59], [88, 59], [93, 59], [98, 59],

  [58, 64], [63, 64], [68, 64], [73, 64], [78, 64], [83, 64], [88, 64], [93, 64], [98, 64],

  [58, 69], [63, 69], [68, 69], [73, 69], [78, 69], [83, 69], [88, 69], [93, 69], [98, 69],

  [58, 74], [63, 74], [68, 74], [73, 74], [78, 74], [83, 74], [88, 74], [93, 74], [98, 74],

  [58, 79], [63, 79], [68, 79], [73, 79], [78, 79], [83, 79], [88, 79], [93, 79], [98, 79],

  [63, 84], [68, 84], [73, 84], [78, 84], [83, 84], [88, 84], [93, 84], [98, 84],

  [63, 89], [68, 89], [73, 89], [78, 89], [83, 89], [88, 89], [93, 89],

   [68, 94], [73, 94], [78, 94], [83, 94], [88, 94]
].map(([left, top], index) => (
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
}
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