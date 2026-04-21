import { ImageBackground, ScrollView, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import TopNav from "../components/TopNav";
import styles from "../styles/homeStyles";

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
              <Svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <Path d="M5 8L0.669873 0.5L9.33013 0.5L5 8Z" fill="#F5C400" />
              </Svg>
            </View>

            <View style={styles.creditRangeRow}>
              <Text style={styles.creditRangeLabel}>Fair</Text>
              <View style={styles.creditArrowWrap}>
                <Svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                  <Path d="M0 4H56" stroke="#111111" strokeWidth="1" />
                  <Path d="M56 1L59 4L56 7" stroke="#111111" strokeWidth="1" />
                </Svg>
              </View>
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

            <View style={[styles.creditPointerWrap, styles.creditPointerWrapRight]}>
              <Svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <Path d="M5 8L0.669873 0.5L9.33013 0.5L5 8Z" fill="#F5C400" />
              </Svg>
            </View>

            <View style={styles.creditRangeRow}>
              <Text style={styles.creditRangeLabel}>Fair</Text>
              <View style={styles.creditArrowWrap}>
                <Svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                  <Path d="M0 4H56" stroke="#111111" strokeWidth="1" />
                  <Path d="M56 1L59 4L56 7" stroke="#111111" strokeWidth="1" />
                </Svg>
              </View>
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

function SpendingCard() {
  return (
    <View style={styles.frameSpending}>
      <Text style={styles.sectionTitle}>Spending</Text>

      <View style={styles.spendingChartWrap}>
        <View style={styles.spendingChartInner}>
          <View style={styles.spendingUpWrap}>
            <Svg width="36" height="32" viewBox="0 0 36 32" fill="none">
              <Path d="M18 0L35.3205 30H0.679493L18 0Z" fill="#3CC85A" />
            </Svg>
          </View>

          <View style={styles.spendingBarWrap}>
            <View style={styles.spendingBar} />
            <Text style={styles.spendingMonth}>Oct</Text>
          </View>

          <View style={styles.spendingDownWrap}>
            <Svg width="36" height="32" viewBox="0 0 36 32" fill="none">
              <Path d="M18 32L0.679493 2L35.3205 2L18 32Z" fill="#FF463B" />
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

function CreditCardOffersCard() {
  const cards = [
    {
      name: "SavorOne",
      bank: "BOA Cash\nRewards",
      asset: require("../assets/capital-one-savorone-2.png"),
    },
    {
      name: "Discover IT",
      bank: "Wells Fargo\nActive Cash",
      asset: require("../assets/capital-one-savorone-1.png"),
    },
    {
      name: "PNC Unlimited",
      bank: "PNC Unlimited",
      asset: require("../assets/pnc-cash-unlimited-1.png"),
    },
    {
      name: "TD Double Up",
      bank: "TD Double Up",
      asset: require("../assets/td-double-up-1.png"),
    },
  ];

  return (
    <View style={styles.frameCreditCards}>
      <Text style={styles.sectionTitle}>Credit Card Offers</Text>
      <Text style={styles.creditCardsSubtitle}>*Based on your credit score</Text>

      <View style={styles.cardGrid}>
        {cards.map((card) => (
          <View key={card.name} style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{card.name}</Text>

            <ImageBackground
              source={card.asset}
              style={styles.cardOfferImage}
              resizeMode="contain"
            />

            <Text style={styles.cardItemBank}>{card.bank}</Text>
          </View>
        ))}
      </View>
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
            <TopNav currentIndex={0} />
            <CreditScoreCard />
            <SpendingCard />
            <CreditCardOffersCard />
          </View>
        </ImageBackground>
      </ScrollView>

      {/* ✅ NOW USING EXTERNAL HEADER COMPONENT */}
      <HeaderBar />

      <BottomNav activeTab="home" />
    </View>
  );
}