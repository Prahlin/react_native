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
import Svg, { Path, Rect } from "react-native-svg";
import styles from "../styles/notificationsStyles";

const notificationItems = [
  {
    date: "Oct 22",
    title: "Update V.2.1",
    body:
      "The long-awaited new version of CreditKing is now live. If you haven't already, take the opportunity to access a reported list of new features available only in the latest iteration of your favorite credit related app.",
    link: "Go to App Store",
  },
  {
    date: "Oct 11",
    title: "Finance Magazine Op-Ed",
    body:
      "Renowned finance magazine the Economist leaps praise on CreditKing's versatility and reliability.",
    link: "Read the full article",
  },
  {
    date: "Oct 3",
    title: "Credit Conference",
    body:
      "The 2024 rendition of the International Credit Conference has been scheduled in Redmond, WA. This year's got-together will feature team building seminars, raffles, a chili cook-off, and much more.",
    link: "Book my ticket",
  },
  {
    date: "Sep 27",
    title: "Prize Awarded",
    body:
      'CreditKing receives coveted user interface awarded, lauded for "outstanding accessibility and user friendliness."',
    link: "Find out more",
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
  const [selectedLetterCount, setSelectedLetterCount] = useState(
    tabs[currentIndex].label.length
  );
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
            if (selectedLetterCount >= chars.length) {
              isBlue = true;
            } else if (selectedDirection === "rtl") {
              const fromRightIndex = chars.length - 1 - charIndex;
              isBlue = fromRightIndex < selectedLetterCount;
            } else {
              isBlue = charIndex < selectedLetterCount;
            }
          }

          return (
            <Text
              key={`${label}-${char}-${charIndex}`}
              style={[
                styles.dashboardLetter,
                isBlue ? styles.dashboardLetterActive : styles.dashboardLetterInactive,
              ]}
            >
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
        <Animated.View
          style={[
            styles.navUnderlineActive,
            trackWidth > 0
              ? { width: stepWidth, transform: [{ translateX }] }
              : { width: "20%", left: 0 },
          ]}
        />
      </View>
    </View>
  );
}

function NewsIcon() {
  return (
    <Svg width="92" height="92" viewBox="0 0 92 92" fill="none">
      <Rect x="22" y="16" width="42" height="56" rx="4" stroke="#7280DE" strokeWidth="6" />
      <Rect x="30" y="26" width="12" height="12" rx="2" stroke="#7280DE" strokeWidth="4" />
      <Rect x="47" y="28" width="10" height="4" rx="2" fill="#97A2FE" />
      <Rect x="47" y="36" width="10" height="4" rx="2" fill="#97A2FE" />
      <Rect x="30" y="47" width="27" height="4" rx="2" fill="#97A2FE" />
      <Rect x="30" y="56" width="27" height="4" rx="2" fill="#97A2FE" />
    </Svg>
  );
}

function NotificationsCard() {
  return (
    <View style={styles.frameNotifications}>
      <View style={styles.heroWrap}>
        <NewsIcon />
      </View>

      <View style={styles.notificationList}>
        {notificationItems.map((item) => (
          <View key={`${item.date}-${item.title}`} style={styles.notificationRow}>
            <View style={styles.notificationHead}>
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
          source={require("../assets/frame-28-blue.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.bottomTab}
        onPress={() => router.push("/rewards")}
      >
        <Image
          source={require("../assets/frame-29.png")}
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

export default function Notifications() {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          style={styles.dashboardHomeScreenContainer}
          source={require("../assets/twirl-background-png-1.png")}
          resizeMode="cover"
        >
          <View style={styles.bG} />
          <View style={styles.time} />
          <View style={styles.frame188} />

          <ImageBackground
            style={styles.twirlbackgroundPNG1}
            source={require("../assets/twirl-background-png-1.png")}
            resizeMode="contain"
          />
          <ImageBackground
            style={styles.twirlbackgroundPNG2}
            source={require("../assets/twirl-background-png-2.png")}
            resizeMode="contain"
          />

          <View style={styles.mainContent}>
            <TopNav />
            <NotificationsCard />
          </View>
        </ImageBackground>
      </ScrollView>

      <View style={styles.stickyHeaderWrap}>
        <View style={styles.welcomeSteve}>
          <View style={styles.frame189}>
            <Text style={styles._welcomeSteve}>Welcome, Steve</Text>

            <View style={styles.notificationListAnimation}>
              <Svg style={styles.vector} width="13" height="19" viewBox="0 0 13 19" fill="none">
                <Path d="M0.409294 7.25253C0.590182 4.17743 3.13669 1.77632 6.21711 1.77632C9.29752 1.77632 11.844 4.17743 12.0249 7.25253L12.4342 14.2105H0L0.409294 7.25253Z" fill="white" />
                <Path d="M4.14474 14.8026H8.28947V16.2829C8.28947 17.4274 7.36164 18.3553 6.21711 18.3553C5.07257 18.3553 4.14474 17.4274 4.14474 16.2829V14.8026Z" fill="white" />
                <Path d="M4.14474 3.55263H7.69737V1.77632C7.69737 0.795284 6.90208 0 5.92105 0C4.94002 0 4.14474 0.795284 4.14474 1.77632V3.55263Z" fill="white" />
              </Svg>

              <Svg style={styles.ellipse19} width="10" height="10" viewBox="0 0 10 10" fill="none">
                <Path d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="#FF3B30" />
              </Svg>

              <Text style={styles.__myVar}>!</Text>
            </View>

            <View style={styles.settingsListAnimation}>
              <Svg style={styles.ellipse16} width="4" height="4" viewBox="0 0 4 4" fill="none">
                <Path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="white" />
              </Svg>
              <Svg style={styles.ellipse17} width="4" height="4" viewBox="0 0 4 4" fill="none">
                <Path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="white" />
              </Svg>
              <Svg style={styles.ellipse18} width="4" height="4" viewBox="0 0 4 4" fill="none">
                <Path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="white" />
              </Svg>
            </View>
          </View>
        </View>
      </View>

      <BottomNav />
    </View>
  );
}