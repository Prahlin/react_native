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
import Svg, { Path } from "react-native-svg";
import styles from "../styles/spendingStyles";

const monthlyBars = [
  { month: "May", value: 0.58 },
  { month: "Jun", value: 0.72 },
  { month: "Jul", value: 0.42 },
  { month: "Aug", value: 0.58 },
  { month: "Sep", value: 0.8 },
  { month: "Oct", value: 0.58, active: true },
];

const trackedAccounts = [
  { name: "Wells Fargo", subtitle: "From your credit profile", type: "wf" },
  { name: "PNC", subtitle: "From your credit profile", type: "pnc" },
  { name: "TD", subtitle: "From your credit profile", type: "td" },
  { name: "Chase", subtitle: "From your credit profile", type: "chase" },
  { name: "Citi", subtitle: "From your credit profile", type: "citi" },
  { name: "CapitalOne", subtitle: "From your credit profile", type: "cap1" },
  { name: "American Express", subtitle: "From your credit profile", type: "amex" },
];

function SmallBankLogo({ type }) {
  const knownAssets = {
    wf: require("../assets/wells-fargo-icon-1.png"),
    pnc: require("../assets/pnc-bank-icon-1.png"),
    td: require("../assets/td-icon-1.png"),
    chase: require("../assets/chase-icon-1.png"),
  };

  if (knownAssets[type]) {
    return (
      <Image
        source={knownAssets[type]}
        style={styles.trackLogoImage}
        resizeMode="contain"
      />
    );
  }

  if (type === "citi") {
    return (
      <View style={[styles.trackLogoTile, styles.trackLogoCiti]}>
        <Text style={styles.trackLogoCitiText}>citi</Text>
      </View>
    );
  }

  if (type === "cap1") {
    return (
      <View style={[styles.trackLogoTile, styles.trackLogoCap1]}>
        <Text style={styles.trackLogoCap1Text}>CapitalOne</Text>
      </View>
    );
  }

  return (
    <View style={[styles.trackLogoTile, styles.trackLogoAmex]}>
      <Text style={styles.trackLogoAmexText}>AM{"\n"}EX</Text>
    </View>
  );
}

function TopNav() {
  const currentIndex = 2;
  const tabs = [
    { label: "Dashboard", route: "/home" },
    { label: "Debt", route: "/debt" },
    { label: "Spending", route: "/spending" },
    { label: "Credit", route: "/credit" },
    { label: "Accounts", route: "/accounts" },
  ];

  const underlineAnim = useRef(new Animated.Value(currentIndex)).current;
  const widthScale = useRef(new Animated.Value(1)).current;
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

      Animated.parallel([
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
        ]),
        Animated.sequence([
          Animated.timing(widthScale, {
            toValue: 0.65,
            duration: 180,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: false,
          }),
          Animated.timing(widthScale, {
            toValue: 1,
            duration: 140,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: false,
          }),
        ]),
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
                  width: widthScale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, stepWidth],
                  }),
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

function SpendingCard() {
  const CHART_WIDTH = 330;
  const CHART_HEIGHT = 120;
  const BAR_WIDTH = 38;
  const BAR_HEIGHT = 92;
  const VERTICAL_GAP = 14;

  return (
    <View style={styles.frameSpending}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.sectionTitle}>October Spending</Text>
        <Text style={styles.amountText}>$3,765</Text>
      </View>

      <View style={[styles.barChartWrap, { marginVertical: VERTICAL_GAP }]}>
        <View style={[styles.barsRow, { width: CHART_WIDTH, height: CHART_HEIGHT }]}>
          {monthlyBars.map((item) => (
            <View key={item.month} style={styles.barGroup}>
              <View style={[styles.barTrack, { width: BAR_WIDTH, height: BAR_HEIGHT }]}>
                <View
                  style={[
                    styles.barFill,
                    {
                      width: BAR_WIDTH,
                      height: BAR_HEIGHT * item.value,
                    },
                  ]}
                />
              </View>

              <Text style={item.active ? styles.monthLabelActive : styles.monthLabel}>
                {item.month}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function ExpenditureCard() {
  const CHART_SIZE = 180;
  const VERTICAL_GAP = 14;

  return (
    <View style={styles.frameExpenditure}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.sectionTitle}>Expenditure</Text>
        <Text style={styles.sourcesText}>12 sources</Text>
      </View>

      <View style={styles.expenditureBody}>
        <View style={[styles.expenditureImageWrap, { marginVertical: VERTICAL_GAP }]}>
          <Image
            source={require("../assets/expenditure.png")}
            style={{ width: CHART_SIZE, height: CHART_SIZE }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>View full breakdown</Text>
        </View>
      </View>
    </View>
  );
}

function TrackSpendingCard() {
  return (
    <View style={styles.frameTrack}>
      <Text style={styles.sectionTitle}>Track Your Spending</Text>
      <Text style={styles.trackIntro}>
        Link your bank accounts to see your spending in one place
      </Text>

      <View style={styles.accountList}>
        {trackedAccounts.map((item) => (
          <View key={item.name} style={styles.accountRow}>
            <SmallBankLogo type={item.type} />
            <View style={styles.accountTextWrap}>
              <Text style={styles.accountName}>{item.name}</Text>
              <Text style={styles.accountSubtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.outlineButton}>
        <Text style={styles.outlineButtonText}>View more accounts</Text>
      </View>
    </View>
  );
}

export default function Spending() {
  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
            <SpendingCard />
            <ExpenditureCard />
            <TrackSpendingCard />
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
    </View>
  );
}