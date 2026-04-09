import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import styles from "../styles/rewardsStyles";

const rewardItems = [
  {
    date: "Nov 1",
    title: "October Cashback",
    body:
      "Great job, Steve! As a result of frequently using your CreditKing-linked credit cards during the month of September, you have accrued a grand total of $21.53 in cashback. You have the choice between redeeming this amount in the form of a statement credit, or as a gift card.",
    link: "Redeem now",
  },
  {
    date: "Oct 16",
    title: "Credit Card Offers",
    body:
      "Wow! Your credit score has awarded you a slew of invitations to credit cards.",
    link: "Explore offers",
  },
  {
    date: "Oct 3",
    title: "Premium Membership",
    body:
      "Great news, Steve! As a result of your lengthy, loyal commitment to CreditKing, you have earned the right to join our exclusive premium membership tier.",
    link: "Find out more",
  },
  {
    date: "Oct 1",
    title: "September Cashback",
    body:
      "Great job, Steve! As a result of frequently using your CreditKing-linked credit cards during the month of September, you have accrued a grand total of $17.72 in cashback. You have the choice between redeeming this amount in the form of a statement credit, or as a gift card.",
    link: "Redeem now",
  },
];

function TopNav() {
  const currentIndex = 0;
  const tabs = [
    { label: "Dashboard", route: "/home" },
    { label: "Debt", route: "/debt" },
    { label: "Spending", route: "/spending" },
    { label: "Credit", route: "/credit" },
    { label: "Accounts", route: "/accounts" },
  ];

  const underlineAnim = useRef(new Animated.Value(currentIndex)).current;
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);
  const [selectedLetterCount, setSelectedLetterCount] = useState(tabs[currentIndex].label.length);
  const [selectedDirection, setSelectedDirection] = useState("ltr");
  const [trackWidth, setTrackWidth] = useState(0);
  const letterTimers = useRef([]);

  const clearLetterTimers = () => {
    letterTimers.current.forEach(clearTimeout);
    letterTimers.current = [];
  };

  useEffect(() => {
    Animated.timing(underlineAnim, {
      toValue: currentIndex,
      duration: 110,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    return () => clearLetterTimers();
  }, [underlineAnim]);

  const animateLetters = (targetIndex, totalDuration) => {
    clearLetterTimers();
    const direction = targetIndex > currentIndex ? "ltr" : "rtl";
    const totalLetters = tabs[targetIndex].label.length;
    const stepDuration = totalDuration / totalLetters;
    setSelectedIndex(targetIndex);
    setSelectedDirection(direction);
    setSelectedLetterCount(0);
    tabs[targetIndex].label.split("").forEach((_, index) => {
      const timer = setTimeout(() => setSelectedLetterCount(index + 1), stepDuration * index);
      letterTimers.current.push(timer);
    });
  };

  const goToTab = (index, route) => {
    if (index === currentIndex) return;
    const totalDuration = 110;
    animateLetters(index, totalDuration);
    Animated.timing(underlineAnim, {
      toValue: index,
      duration: totalDuration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) router.push(route);
    });
  };

  const stepWidth = trackWidth / 5;
  const translateX = underlineAnim.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, stepWidth, stepWidth * 2, stepWidth * 3, stepWidth * 4],
  });

  const renderAnimatedLabel = (label, tabIndex) => {
    const chars = label.split("");
    return (
      <View style={styles.dashboardLetterRow}>
        {chars.map((char, charIndex) => {
          const isTargetTab = tabIndex === selectedIndex;
          let isBlue = false;
          if (isTargetTab) {
            if (selectedLetterCount >= chars.length) isBlue = true;
            else if (selectedDirection === "rtl") isBlue = chars.length - 1 - charIndex < selectedLetterCount;
            else isBlue = charIndex < selectedLetterCount;
          }
          return (
            <Text key={`${label}-${char}-${charIndex}`} style={[styles.dashboardLetter, isBlue ? styles.dashboardLetterActive : styles.dashboardLetterInactive]}>
              {char}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.frame155}>
      <View style={styles.topNav}>
        {tabs.map((tab, index) => (
          <Pressable key={tab.label} style={styles.navTab} onPress={() => goToTab(index, tab.route)}>
            {renderAnimatedLabel(tab.label, index)}
          </Pressable>
        ))}
      </View>
      <View style={styles.navTrack} onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}>
        <Animated.View style={[styles.navUnderlineActive, trackWidth > 0 ? { width: stepWidth, transform: [{ translateX }] } : { width: "20%", left: 0 }]} />
      </View>
    </View>
  );
}

function SmileBadge() {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <Circle cx="50" cy="50" r="40" fill="#7280DE" />
      <Path d="M33 62C37 69 44 73 50 73C56 73 63 69 67 62" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <Path d="M34 37L40 41L44 34" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M56 37L62 41L66 34" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function RewardsCard() {
  return (
    <View style={styles.frameRewards}>
      <View style={styles.heroWrap}>
        <SmileBadge />
      </View>

      <View style={styles.rewardList}>
        {rewardItems.map((item) => (
          <View key={`${item.date}-${item.title}`} style={styles.rewardRow}>
            <View style={styles.rewardHead}>
              <View style={styles.dateWrap}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <Text style={styles.bodyText}>{item.body}</Text>
            <Text style={styles.linkText}>{item.link}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <Pressable style={styles.bottomTab} onPress={() => router.push("/home")}>
        <Image
          source={require("../assets/frame-26.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.bottomTab}
        onPress={() => router.push("/activity")}
      >
        <Image
          source={require("../assets/frame-27.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.bottomTab}
        onPress={() => router.push("/notifications")}
      >
        <Image
          source={require("../assets/frame-28.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.bottomTab}
        onPress={() => router.push("/rewards")}
      >
        <Image
          source={require("../assets/frame-29-blue.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable style={styles.bottomTab} onPress={() => router.push("/stats")}>
        <Image
          source={require("../assets/frame-31.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>
    </View>
  );
}

export default function Rewards() {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <ImageBackground style={styles.dashboardHomeScreenContainer} source={require("../assets/twirl-background-png-1.png")} resizeMode="cover">
          <View style={styles.bG} />
          <View style={styles.time} />
          <View style={styles.frame188} />
          <ImageBackground style={styles.twirlbackgroundPNG1} source={require("../assets/twirl-background-png-1.png")} resizeMode="contain" />
          <ImageBackground style={styles.twirlbackgroundPNG2} source={require("../assets/twirl-background-png-2.png")} resizeMode="contain" />

          <View style={styles.mainContent}>
            <TopNav />
            <RewardsCard />
          </View>
        </ImageBackground>
      </ScrollView>

      <View style={styles.stickyHeaderWrap}>
        <View style={styles.welcomeSteve}>
          <View style={styles.frame189}>
            <Text style={styles._welcomeSteve}>Welcome, Steve</Text>
            <View style={styles.notificationListAnimation}>
              <Svg style={styles.vector} width="13" height="19" viewBox="0 0 13 19" fill="none"><Path d="M0.409294 7.25253C0.590182 4.17743 3.13669 1.77632 6.21711 1.77632C9.29752 1.77632 11.844 4.17743 12.0249 7.25253L12.4342 14.2105H0L0.409294 7.25253Z" fill="white" /><Path d="M4.14474 14.8026H8.28947V16.2829C8.28947 17.4274 7.36164 18.3553 6.21711 18.3553C5.07257 18.3553 4.14474 17.4274 4.14474 16.2829V14.8026Z" fill="white" /><Path d="M4.14474 3.55263H7.69737V1.77632C7.69737 0.795284 6.90208 0 5.92105 0C4.94002 0 4.14474 0.795284 4.14474 1.77632V3.55263Z" fill="white" /></Svg>
              <Svg style={styles.ellipse19} width="10" height="10" viewBox="0 0 10 10" fill="none"><Path d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="#FF3B30" /></Svg>
              <Text style={styles.__myVar}>!</Text>
            </View>
            <View style={styles.settingsListAnimation}>
              <Svg style={styles.ellipse16} width="4" height="4" viewBox="0 0 4 4" fill="none"><Path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="white" /></Svg>
              <Svg style={styles.ellipse17} width="4" height="4" viewBox="0 0 4 4" fill="none"><Path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="white" /></Svg>
              <Svg style={styles.ellipse18} width="4" height="4" viewBox="0 0 4 4" fill="none"><Path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="white" /></Svg>
            </View>
          </View>
        </View>
      </View>

      <BottomNav />
    </View>
  );
}