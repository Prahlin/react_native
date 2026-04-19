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
import styles from "../styles/accountsStyles";

const accountRows = [
  {
    key: "credit",
    label: "Credit cards",
    sublabel: "9 accounts",
    value: "$17,691",
    icon: "cards",
  },
  {
    key: "debit",
    label: "Debit cards",
    sublabel: "2 accounts",
    value: "$0",
    icon: "cards",
  },
  {
    key: "loans",
    label: "Loans",
    sublabel: "1 account",
    value: "$1,806",
    icon: "dollar",
  },
  {
    key: "property",
    label: "Property",
    sublabel: "1 account",
    value: "$-",
    icon: "house",
  },
  {
    key: "other",
    label: "Other assets",
    sublabel: "0 account",
    value: "$0",
    icon: "other",
  },
];

function TopNav() {
  const currentIndex = 4;
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
      const timer = setTimeout(() => {
        setSelectedLetterCount(index + 1);
      }, stepDuration * index);

      letterTimers.current.push(timer);
    });
  };

  const goToTab = (index, route) => {
    if (index === currentIndex) {
      animateLetters(index, 320);

      Animated.sequence([
        Animated.timing(underlineAnim, {
          toValue: currentIndex - 0.1,
          duration: 180,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(underlineAnim, {
          toValue: currentIndex,
          duration: 140,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
      ]).start();

      return;
    }

    if (index === 0) {
      const totalDuration = 320;
      animateLetters(index, totalDuration);

      Animated.sequence([
        Animated.timing(underlineAnim, {
          toValue: -0.1,
          duration: 180,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(underlineAnim, {
          toValue: 0,
          duration: 140,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) router.push(route);
      });

      return;
    }

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
    inputRange: [-0.1, 0, 1, 2, 3, 4],
    outputRange: [
      -0.1 * stepWidth,
      0,
      1 * stepWidth,
      2 * stepWidth,
      3 * stepWidth,
      4 * stepWidth,
    ],
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
                isBlue
                  ? styles.dashboardLetterActive
                  : styles.dashboardLetterInactive,
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
          <Pressable
            key={tab.label}
            style={styles.navTab}
            onPress={() => goToTab(index, tab.route)}
          >
            {renderAnimatedLabel(tab.label, index)}
          </Pressable>
        ))}
      </View>

<View
  style={styles.navTrack}
  onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
>
  <Animated.View
    style={[
      styles.navUnderlineActive,
      trackWidth > 0
        ? {
            width: stepWidth,
            transform: [{ translateX }],
          }
        : {
            width: "20%",
            left: `${currentIndex * 20}%`,
          },
    ]}
  />
</View>
    </View>
  );
}

function MonitorIcon() {
  return (
    <Svg width="94" height="82" viewBox="0 0 94 82" fill="none">
      <Rect x="15" y="2" width="48" height="36" rx="3" stroke="#6A79D1" strokeWidth="6" />
      <Rect x="21" y="10" width="8" height="18" fill="#97A2FE" />
      <Rect x="33" y="18" width="8" height="10" fill="#97A2FE" />
      <Rect x="45" y="13" width="8" height="15" fill="#97A2FE" />
      <Rect x="28" y="43" width="23" height="6" rx="3" fill="#6A79D1" />
      <Rect x="14" y="52" width="49" height="10" rx="4" fill="#6A79D1" />
    </Svg>
  );
}

function RowIcon({ type }) {
  if (type === "cards") {
    return (
      <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <Rect x="1" y="3" width="16" height="10" fill="#B8BCC7" />
        <Rect x="3" y="6" width="10" height="1.5" fill="#FFFFFF" opacity="0.9" />
        <Rect x="5" y="1" width="14" height="10" fill="#C7CBD6" />
        <Rect x="7" y="4" width="8" height="1.5" fill="#FFFFFF" opacity="0.9" />
      </Svg>
    );
  }

  if (type === "dollar") {
    return (
      <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <Rect x="1" y="2" width="18" height="12" fill="#B8BCC7" rx="1" />
        <Path d="M10.5 5.2C9.4 5.2 8.9 5.8 8.9 6.4C8.9 7 9.4 7.3 10.3 7.6C11.4 7.9 12 8.3 12 9.2C12 10 11.4 10.7 10.2 10.8V11.7H9.4V10.8C8.5 10.7 7.8 10.3 7.4 9.8L8.1 9.1C8.5 9.5 9.1 9.8 9.9 9.8C10.8 9.8 11.2 9.4 11.2 9C11.2 8.5 10.8 8.2 9.8 7.9C8.6 7.5 8.1 7 8.1 6.2C8.1 5.4 8.7 4.7 9.9 4.6V3.8H10.7V4.6C11.5 4.7 12 5 12.4 5.4L11.7 6.1C11.4 5.7 11 5.2 10.5 5.2Z" fill="#FFFFFF" />
      </Svg>
    );
  }

  if (type === "house") {
    return (
      <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
        <Path d="M2 9.2L10 3L18 9.2V16H2V9.2Z" fill="#C7CBD6" />
        <Path d="M7.2 16V10.6H12.8V16" fill="#B8BCC7" />
        <Rect x="4.4" y="9" width="2.2" height="2.8" fill="#FFFFFF" opacity="0.8" />
        <Rect x="13.4" y="9" width="2.2" height="2.8" fill="#FFFFFF" opacity="0.8" />
      </Svg>
    );
  }

  return (
    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <Path d="M8 2L12.8 6.3L10.6 8.2L5.8 3.8L8 2Z" fill="#C7CBD6" />
      <Path d="M4.8 8.7L10.8 6.6L14.2 16L8.2 18L4.8 8.7Z" fill="#B8BCC7" />
      <Path d="M12.5 3.2L16.2 7L14.5 8.7L10.8 4.9L12.5 3.2Z" fill="#C7CBD6" />
    </Svg>
  );
}

function AccountsCard() {
  return (
    <View style={styles.frameAccounts}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.sectionTitle}>Accounts</Text>
        <Text style={styles.amountText}>13</Text>
      </View>

      <View style={styles.monitorWrap}>
        <MonitorIcon />
      </View>

      <View style={styles.accountsList}>
        {accountRows.map((item, index) => (
          <View
            key={item.key}
            style={[
              styles.accountRow,
              index === accountRows.length - 1 && styles.accountRowNoBorder,
            ]}
          >
            <View style={styles.rowIconWrap}>
              <RowIcon type={item.icon} />
            </View>

            <View style={styles.accountCopy}>
              <Text style={styles.accountLabel}>{item.label}</Text>
              <Text style={styles.accountSubLabel}>{item.sublabel}</Text>
            </View>

            <Text style={styles.accountValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.outlineButton}>
        <Text style={styles.outlineButtonText}>View details</Text>
      </View>
    </View>
  );
}

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.frame26}>
        <Svg style={styles.bottomHomeIcon} width="20" height="19" viewBox="0 0 20 19" fill="none">
          <Path d="M2.10679 9.09133C2.10679 8.43731 2.63698 7.90712 3.291 7.90712H16.3173C16.9713 7.90712 17.5015 8.43731 17.5015 9.09133V17.3808C17.5015 18.0348 16.9713 18.565 16.3173 18.565H3.291C2.63698 18.565 2.10679 18.0348 2.10679 17.3808V9.09133Z" fill="#6A79D1" />
          <Path d="M7.43574 13.2361C7.43574 12.582 7.96593 12.0519 8.61995 12.0519H10.9884C11.6424 12.0519 12.1726 12.582 12.1726 13.2361V18.565H7.43574V13.2361Z" fill="white" />
          <Path d="M9.02892 0.289032C9.47391 -0.0963437 10.1344 -0.0963439 10.5794 0.289031L19.197 7.75207C20.0258 8.46986 19.5182 9.83146 18.4217 9.83146H1.18659C0.0901428 9.83146 -0.417497 8.46986 0.411336 7.75207L9.02892 0.289032Z" fill="#6A79D1" />
        </Svg>
        <Text style={styles.home}>Home</Text>
      </View>

      <View style={styles.frame27}>
        <Image source={require("../assets/frame-27.png")} style={styles.bottomNavIcon} />
      </View>

      <View style={styles.frame28}>
        <Image source={require("../assets/frame-28.png")} style={styles.bottomNavIcon} />
      </View>

      <View style={styles.frame29}>
        <Image source={require("../assets/frame-29.png")} style={styles.bottomNavIcon} />
      </View>

      <View style={styles.frame31}>
        <Image source={require("../assets/frame-31.png")} style={styles.bottomNavIcon} />
      </View>
    </View>
  );
}

export default function Accounts() {
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
            <AccountsCard />
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
                <Path d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="#3E4BB5" />
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