import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import GrayBg from "../components/gray_bg";

import styles from "../styles/homeStyles";

//
// 🔷 CREDIT SCORE CARD
//
function CreditScoreCard() {
  return (
    <View style={styles.frameCreditScore}>
      <Text style={styles.sectionTitle}>Credit Score</Text>

      <View style={styles.creditScoreRow}>
        <View style={styles.creditColumn}>
          <Text style={styles.creditBureau}>TransUnion</Text>
          <Text style={styles.creditValue}>665</Text>

          <View style={styles.creditMeterWrap}>
            <View style={styles.creditMeterTrack}>
              <View style={styles.creditMeterGray} />
              <View style={styles.creditMeterMid1} />
              <View style={styles.creditMeterMid2} />
              <View style={styles.creditMeterBlue} />
            </View>

            <View style={styles.creditPointerWrap}>
              <Svg width="10" height="8">
                <Path d="M5 8L0.67 0.5H9.33L5 8Z" fill="#F5C400" />
              </Svg>
            </View>

            <View style={styles.creditRangeRow}>
              <Text style={styles.creditRangeLabel}>Fair</Text>
              <Text style={styles.creditRangeLabel}>Excellent</Text>
            </View>
          </View>
        </View>

        <View style={styles.creditColumn}>
          <Text style={styles.creditBureau}>Equifax</Text>
          <Text style={styles.creditValue}>663</Text>

          <View style={styles.creditMeterWrap}>
            <View style={styles.creditMeterTrack}>
              <View style={styles.creditMeterGray} />
              <View style={styles.creditMeterMid1} />
              <View style={styles.creditMeterMid2} />
              <View style={styles.creditMeterBlue} />
            </View>

            <View style={styles.creditPointerWrap}>
              <Svg width="10" height="8">
                <Path d="M5 8L0.67 0.5H9.33L5 8Z" fill="#F5C400" />
              </Svg>
            </View>

            <View style={styles.creditRangeRow}>
              <Text style={styles.creditRangeLabel}>Fair</Text>
              <Text style={styles.creditRangeLabel}>Excellent</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Find out more</Text>
      </View>
    </View>
  );
}

//
// 🔷 SPENDING CARD
//
function SpendingCard() {
  return (
    <View style={styles.frameSpending}>
      <Text style={styles.sectionTitle}>Spending</Text>

      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", gap: 22 }}>
          <View style={styles.spendingArrowWrap}>
            <Svg width="36" height="32">
              <Path d="M18 2L33 27H3L18 2Z" fill="#3CC85A" />
            </Svg>
          </View>

          <View style={{ width: 30, alignItems: "center" }}>
            <View style={{ width: 25, height: 96, backgroundColor: "#6A79D1" }} />
            <Text style={{ marginTop: 8, fontSize: 12, fontWeight: "900" }}>
              Oct
            </Text>
          </View>

          <View style={styles.spendingArrowWrap}>
            <Svg width="36" height="32">
              <Path d="M18 30L3 5H33L18 30Z" fill="#FF463B" />
            </Svg>
          </View>
        </View>
      </View>

      <View style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>View details</Text>
      </View>
    </View>
  );
}

//
// 🔷 CREDIT CARD OFFERS
//
function CreditCardOffersCard() {
  return (
    <View style={styles.frameCreditCards}>
      <Text style={styles.sectionTitle}>Credit Card Offers</Text>
      <Text style={styles.creditCardsSubtitle}>
        *Based on your credit score
      </Text>
    </View>
  );
}

//
// 🔷 LOAN OFFERS
//
function LoanOffersCard() {
  return (
    <View style={styles.frame153}>
      <Text style={styles.sectionTitle}>Loan Offers</Text>
    </View>
  );
}

//
// 🚀 MAIN HOME SCREEN
//
export default function Home() {
  const { fromLoadin } = useLocalSearchParams();
  const screenWidth = Dimensions.get("window").width;

  const scrollY = useRef(new Animated.Value(0)).current;

  const slideAnim = useRef(
    new Animated.Value(fromLoadin === "1" ? -screenWidth : 0)
  ).current;

  useEffect(() => {
    if (fromLoadin === "1") {
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 18,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -8,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 4,
          duration: 70,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 80,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [fromLoadin, slideAnim]);

  return (
    <Animated.View
      style={[
        styles.screen,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
<GrayBg fadeTopNavOnScroll>
  <CreditScoreCard />
  <SpendingCard />
  <CreditCardOffersCard />
  <LoanOffersCard />
  <View style={styles.bottomSpacer} />
</GrayBg>
    </Animated.View>
  );
}