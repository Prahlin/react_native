import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import styles from "../styles/homeStyles";

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
      ]).start();

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

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <Pressable
        style={styles.frame26}
        onPress={() => router.push("/home")}
      >
        <Image
          source={require("../assets/frame-26-blue.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.frame27}
        onPress={() => router.push("/activity")}
      >
        <Image
          source={require("../assets/frame-27.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.frame28}
        onPress={() => router.push("/notifications")}
      >
        <Image
          source={require("../assets/frame-28.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.frame29}
        onPress={() => router.push("/rewards")}
      >
        <Image
          source={require("../assets/frame-29.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>

      <Pressable
        style={styles.frame31}
        onPress={() => router.push("/stats")}
      >
        <Image
          source={require("../assets/frame-31.png")}
          style={styles.bottomNavIcon}
        />
      </Pressable>
    </View>
  );
}

export default function Home() {
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

          <View style={styles.time}>
            <Text style={styles.statusText}>1:13 PM</Text>
          </View>

          <View style={styles.frame188}>
            <View style={styles.alarm}>
              <Svg style={styles.union} width="13" height="13" viewBox="0 0 13 13" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.71015 0.98288C2.935 0.758032 2.935 0.393483 2.71015 0.168635C2.48531 -0.0562118 2.12076 -0.0562118 1.89591 0.168635L0.168636 1.89591C-0.0562118 2.12076 -0.0562118 2.4853 0.168636 2.71015C0.393483 2.935 0.758032 2.935 0.98288 2.71015L2.71015 0.98288ZM10.7708 0.168635C10.5459 -0.0562118 10.1814 -0.0562118 9.95651 0.168635C9.73167 0.393483 9.73167 0.758032 9.95651 0.98288L11.6838 2.71015C11.9086 2.935 12.2732 2.935 12.498 2.71015C12.7229 2.4853 12.7229 2.12076 12.498 1.89591L10.7708 0.168635ZM6.33335 2.30307C3.78949 2.30307 1.72729 4.36527 1.72729 6.90913C1.72729 9.45298 3.78949 11.5152 6.33335 11.5152C8.87721 11.5152 10.9394 9.45298 10.9394 6.90913C10.9394 4.36527 8.87721 2.30307 6.33335 2.30307ZM0.575775 6.90913C0.575775 3.7293 3.15353 1.15155 6.33335 1.15155C9.51317 1.15155 12.0909 3.7293 12.0909 6.90913C12.0909 10.0889 9.51317 12.6667 6.33335 12.6667C3.15353 12.6667 0.575775 10.0889 0.575775 6.90913ZM6.33332 3.45455C6.6513 3.45455 6.90907 3.71233 6.90907 4.03031V6.60107L8.37992 7.58153C8.64451 7.75789 8.71604 8.11535 8.53968 8.37994C8.36332 8.64454 8.00585 8.71606 7.74126 8.5397L6.2702 7.55919C6.11254 7.454 5.98306 7.31137 5.89367 7.14425C5.8043 6.97715 5.75754 6.79057 5.75756 6.60107V4.03031C5.75756 3.71233 6.01533 3.45455 6.33332 3.45455Z"
                  fill="#222227"
                />
              </Svg>
            </View>

            <View style={styles.bluetooth}>
              <Svg style={styles.vectorStroke} width="9" height="12" viewBox="0 0 9 12" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.96806 0.058639C4.16062 -0.0354424 4.39104 -0.015139 4.56327 0.111084L8.2171 2.78893C8.36239 2.89542 8.44686 3.06335 8.44439 3.24081C8.44192 3.41828 8.35281 3.5839 8.2046 3.68648L4.99063 5.91111L8.2046 8.13574C8.35281 8.23832 8.44192 8.40394 8.44439 8.58141C8.44686 8.75887 8.36239 8.9268 8.2171 9.03329L4.56327 11.7111C4.39104 11.8374 4.16062 11.8577 3.96806 11.7636C3.77551 11.6695 3.65387 11.4772 3.65387 11.2668V6.83638L0.896948 8.74465C0.640795 8.92195 0.286055 8.86277 0.104613 8.61246C-0.076829 8.36215 -0.0162635 8.0155 0.23989 7.8382L3.024 5.91111L0.23989 3.98402C-0.0162635 3.80672 -0.076829 3.46007 0.104613 3.20976C0.286055 2.95946 0.640795 2.90027 0.896948 3.07757L3.65387 4.98584V0.555409C3.65387 0.345037 3.77551 0.15272 3.96806 0.058639ZM4.79062 7.13392L6.91128 8.60178L4.79062 10.156V7.13392ZM4.79062 4.6883V1.66622L6.91128 3.22044L4.79062 4.6883Z"
                  fill="#222227"
                />
              </Svg>
            </View>

            <View style={styles.wifi}>
              <Text style={styles.statusText}>WiFi</Text>
            </View>

            <View style={styles.signal}>
              <Text style={styles.statusText}>Sig</Text>
            </View>

            <View style={styles.battery}>
              <Text style={styles.statusText}>Bat</Text>
            </View>
          </View>

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

            <View style={styles.frame156}>
              <Text style={styles.creditScore}>Credit Score</Text>

              <View style={styles.transUnionEquifaxAutoLayout}>
                <View style={styles.creditBureaus}>
                  <Text style={styles.transUnion}>TransUnion</Text>
                  <Text style={styles.myVar}>665</Text>
                  <Text style={styles.equifax}>Equifax</Text>
                  <Text style={styles._myVar}>663</Text>
                </View>

                <View style={styles.creditRangesRow}>
                  <View style={styles.transUnionCreditRange}>
                    <View style={styles.rectangle11} />
                    <View style={styles.rectangle12} />
                    <View style={styles.rectangle13} />
                    <View style={styles.rectangle14} />
                    <View style={styles.rectangle15} />
                    <View style={styles.rectangle16} />
                    <Svg style={styles.arrow1} width="44" height="6" viewBox="0 0 44 6" fill="none">
                      <Path d="M0 2.88672L5 5.77347V-3.26633e-05L0 2.88672ZM43.5 2.88672L38.5 -3.26633e-05V5.77347L43.5 2.88672ZM4.5 3.38672H39V2.38672H4.5V3.38672Z" fill="black" />
                    </Svg>
                    <Text style={styles.fair}>Fair</Text>
                    <Text style={styles.excellent}>Excellent</Text>
                    <Svg style={styles.arrow2} width="8" height="7" viewBox="0 0 8 7" fill="none">
                      <Path d="M3.53564 6.12402L7.07118 0.000298977H0.000110388L3.53564 6.12402Z" fill="#FFD700" />
                    </Svg>
                  </View>

                  <View style={styles.equifaxCreditRange}>
                    <View style={styles.rectangle17} />
                    <View style={styles.rectangle19} />
                    <View style={styles.rectangle20} />
                    <View style={styles.rectangle21} />
                    <View style={styles.rectangle22} />
                    <View style={styles.rectangle18} />
                    <Svg style={styles.arrow3} width="44" height="6" viewBox="0 0 44 6" fill="none">
                      <Path d="M0 2.88672L5 5.77347V-3.26633e-05L0 2.88672ZM43.5 2.88672L38.5 -3.26633e-05V5.77347L43.5 2.88672ZM4.5 3.38672H39V2.38672H4.5V3.38672Z" fill="black" />
                    </Svg>
                    <Text style={styles._fair}>Fair</Text>
                    <Text style={styles._excellent}>Excellent</Text>
                    <Svg style={styles.arrow4} width="8" height="7" viewBox="0 0 8 7" fill="none">
                      <Path d="M3.53564 6.12402L7.07118 0.000298977H0.000110388L3.53564 6.12402Z" fill="#FFD700" />
                    </Svg>
                  </View>
                </View>
              </View>

              <View style={styles.frame62}>
                <Text style={styles.findoutmore}>Find out more</Text>
              </View>
            </View>

            <View style={styles.frame107}>
              <Text style={styles._spending}>Spending</Text>

              <View style={styles.frame187}>
                <View style={styles.frame38}>
                  <Svg style={styles.polygon12} width="25" height="22" viewBox="0 0 25 22" fill="none">
                    <Path d="M10.6634 0.999999C11.4332 -0.333335 13.3577 -0.333333 14.1275 1L24.5198 19C25.2896 20.3333 24.3274 22 22.7878 22H2.00316C0.463562 22 -0.498687 20.3333 0.271113 19L10.6634 0.999999Z" fill="#34C759" />
                  </Svg>

                  <View style={styles.frame37}>
                    <View style={styles.rectangle35} />
                  </View>

                  <Svg style={styles._polygon12} width="25" height="22" viewBox="0 0 25 22" fill="none">
                    <Path d="M10.6634 21C11.4332 22.3333 13.3577 22.3333 14.1275 21L24.5198 3C25.2896 1.66667 24.3274 0 22.7878 0H2.00316C0.463562 0 -0.498687 1.66667 0.271113 3L10.6634 21Z" fill="#FF3B30" />
                  </Svg>
                </View>

                <Text style={styles.oct}>Oct</Text>
              </View>

              <View style={styles.___frame62}>
                <Text style={styles.viewdetails}>View details</Text>
              </View>
            </View>

            <View style={styles.frame157}>
              <Text style={styles.creditCardOffers}>Credit Card Offers</Text>
              <Text style={styles.basedonyourcreditscore}>*Based on your credit score</Text>

              <View style={styles.offersGrid}>
                <View style={styles.offerItem}>
                  <Text style={styles.offerLabel}>SavorOne</Text>
                  <ImageBackground
                    style={styles.offerCard}
                    source={require("../assets/capital-one-savorone-2.png")}
                  />
                </View>

                <View style={styles.offerItem}>
                  <Text style={styles.offerLabel}>Discover IT</Text>
                  <ImageBackground
                    style={styles.offerCard}
                    source={require("../assets/capital-one-savorone-1.png")}
                  />
                </View>

                <View style={styles.offerItem}>
                  <Text style={styles.offerLabel}>BOA Cash Rewards</Text>
                  <ImageBackground
                    style={styles.offerCard}
                    source={require("../assets/bank-of-america-customized-cash-rewards-1.png")}
                  />
                </View>

                <View style={styles.offerItem}>
                  <Text style={styles.offerLabel}>Wells Fargo Active Cash</Text>
                  <ImageBackground
                    style={styles.offerCard}
                    source={require("../assets/wells-fargo-active-cash-card-1.png")}
                  />
                </View>

                <View style={styles.offerItem}>
                  <Text style={styles.offerLabel}>PNC Unlimited</Text>
                  <ImageBackground
                    style={styles.offerCard}
                    source={require("../assets/pnc-cash-unlimited-1.png")}
                  />
                </View>

                <View style={styles.offerItem}>
                  <Text style={styles.offerLabel}>TD Double Up</Text>
                  <ImageBackground
                    style={styles.offerCard}
                    source={require("../assets/td-double-up-1.png")}
                  />
                </View>
              </View>

              <View style={styles._frame62}>
                <Text style={styles.seemoreoffers}>See more offers</Text>
              </View>
            </View>

            <View style={styles.frame153}>
              <Text style={styles.loanOffers}>Loan Offers</Text>
              <Text style={styles._basedonyourcreditscore}>*Based on your credit score</Text>

              <View style={styles.loanGrid}>
                <View style={styles.loanItem}>
                  <Text style={styles.loanLabel}>PNC Bank</Text>
                  <ImageBackground
                    style={styles.loanIcon}
                    source={require("../assets/pnc-bank-icon-1.png")}
                  />
                </View>

                <View style={styles.loanItem}>
                  <Text style={styles.loanLabel}>Chase Bank</Text>
                  <ImageBackground
                    style={styles.loanIcon}
                    source={require("../assets/chase-icon-1.png")}
                  />
                </View>

                <View style={styles.loanItem}>
                  <Text style={styles.loanLabel}>TD Bank</Text>
                  <ImageBackground
                    style={styles.loanIcon}
                    source={require("../assets/td-icon-1.png")}
                  />
                </View>

                <View style={styles.loanItem}>
                  <Text style={styles.loanLabel}>Wells Fargo</Text>
                  <ImageBackground
                    style={styles.loanIcon}
                    source={require("../assets/wells-fargo-icon-1.png")}
                  />
                </View>
              </View>

              <View style={styles.__frame62}>
                <Text style={styles._findoutmore}>Find out more</Text>
              </View>
            </View>
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