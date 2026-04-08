import { router } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
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
import Svg, { Line, Path } from "react-native-svg";
import styles from "../styles/debtStyles";

const loanOffers = [
  {
    name: "PNC Bank",
    image: require("../assets/pnc-bank-icon-1.png"),
  },
  {
    name: "Chase Bank",
    image: require("../assets/chase-icon-1.png"),
  },
  {
    name: "TD Bank",
    image: require("../assets/td-icon-1.png"),
  },
  {
    name: "Wells Fargo",
    image: require("../assets/wells-fargo-icon-1.png"),
  },
];

const academyItems = [
  "Key terminology",
  "How to avoid common pitfalls",
  "Your rights and obligations as a borrower",
  "How to calculate interest rates",
  "How to calculate time for pay off",
  "How to consolidate a new loan with your pre-existing one",
  "How to read terms & conditions",
  "How to apply",
];

function buildDebtPoints(chartWidth, chartHeight) {
  const left = 14;
  const right = Math.max(chartWidth - 10, left + 120);
  const top = 20;
  const bottom = chartHeight - 22;

  const usableWidth = right - left;
  const usableHeight = bottom - top;

  const xStep = usableWidth / 5;

  return [
    { x: left + xStep * 0, y: top + usableHeight * 0.84 },
    { x: left + xStep * 1, y: top + usableHeight * 0.62 },
    { x: left + xStep * 2, y: top + usableHeight * 0.70 },
    { x: left + xStep * 3, y: top + usableHeight * 0.60 },
    { x: left + xStep * 4, y: top + usableHeight * 0.64 },
    { x: left + xStep * 5, y: top + usableHeight * 0.18 },
  ];
}

function TopNav() {
  const currentIndex = 1;
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
    if (index === currentIndex) return;

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

function DebtCard() {
  const [chartWidth, setChartWidth] = useState(0);
  const chartHeight = 140;

  const points = useMemo(() => {
    if (!chartWidth) return [];
    return buildDebtPoints(chartWidth, chartHeight);
  }, [chartWidth]);

  const linePath = points.length
    ? points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
    : "";

  const left = 14;
  const right = Math.max(chartWidth - 10, left + 120);

  return (
    <View style={styles.frameDebt}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.sectionTitle}>Debt</Text>
        <Text style={styles.amountText}>$19,499</Text>
      </View>

      <View style={styles.chartWrap}>
        <View
          style={styles.chartLeft}
          onLayout={(e) => {
            const nextWidth = Math.floor(e.nativeEvent.layout.width);
            if (nextWidth !== chartWidth) setChartWidth(nextWidth);
          }}
        >
          {chartWidth > 0 && (
            <Svg width="100%" height={chartHeight}>
              <Line x1={left} y1={108} x2={right} y2={108} stroke="#ECEFF6" strokeWidth="1" />
              <Line x1={left} y1={64} x2={right} y2={64} stroke="#ECEFF6" strokeWidth="1" />
              <Line x1={left} y1={20} x2={right} y2={20} stroke="#ECEFF6" strokeWidth="1" />

              <Path
                d={linePath}
                fill="none"
                stroke="#3E4BB5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          )}

          <View style={styles.monthRow}>
            {["May", "Jun", "July", "Aug", "Sep", "Oct"].map((m) => (
              <Text key={m} style={styles.monthLabel}>
                {m}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.chartRight}>
          <Text style={styles.axisLabel}>$20K</Text>
          <Text style={styles.axisLabel}>$15K</Text>
          <Text style={styles.axisLabel}>$10K</Text>
        </View>
      </View>
    </View>
  );
}

function LoanOffersCard() {
  return (
    <View style={styles.frame153}>
      <Text style={styles.loanOffers}>Loan Offers</Text>
      <Text style={styles._basedonyourcreditscore}>*Based on your credit score</Text>

      <View style={styles.loanGrid}>
        {loanOffers.map((item) => (
          <View key={item.name} style={styles.loanItem}>
            <Text style={styles.loanLabel}>{item.name}</Text>

            <Image
              source={item.image}
              style={styles.loanIcon}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>

      <View style={styles.__frame62}>
        <Text style={styles._findoutmore}>Find out more</Text>
      </View>
    </View>
  );
}

function AcademyCard() {
  return (
    <View style={styles.frameAcademy}>
      <Text style={styles.sectionTitle}>Borrowing Academy</Text>
      <Text style={styles.academyIntro}>
        Find out all of the most important aspects of taking a personal loan,
        including:
      </Text>

      <View style={styles.academyList}>
        {academyItems.map((item) => (
          <View key={item} style={styles.academyRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.academyText}>{item}</Text>
          </View>
        ))}

        <View style={styles.academyRow}>
          <Text style={styles.starGold}>★</Text>
          <Text style={styles.academyText}>Everything else you need to get started</Text>
        </View>
      </View>

      <View style={styles._frame62}>
        <Text style={styles.seemoreoffers}>Take me now</Text>
      </View>
    </View>
  );
}

export default function Debt() {
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
            <DebtCard />
            <LoanOffersCard />
            <AcademyCard />
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