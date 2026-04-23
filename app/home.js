import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
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
              <Svg width="10" height="8" viewBox="0 0 10 8">
                <Path d="M5 8L0.669873 0.5L9.33013 0.5L5 8Z" fill="#F5C400" />
              </Svg>
            </View>

            <View style={styles.creditRangeRow}>
              <Text style={styles.creditRangeLabel}>Fair</Text>
              <View style={styles.creditArrowWrap}>
                <Svg width="60" height="8">
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

            <View
              style={[
                styles.creditPointerWrap,
                styles.creditPointerWrapRight,
              ]}
            >
              <Svg width="10" height="8">
                <Path d="M5 8L0.669873 0.5L9.33013 0.5L5 8Z" fill="#F5C400" />
              </Svg>
            </View>

            <View style={styles.creditRangeRow}>
              <Text style={styles.creditRangeLabel}>Fair</Text>
              <View style={styles.creditArrowWrap}>
                <Svg width="60" height="8">
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

      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", gap: 22 }}>
          <View style={{ width: 36, height: 32 }}>
            <Svg width="36" height="32">
              <Path
                d="M18 2 C18.6 2 19.1 2.3 19.5 3 L33 27 C33.7 28.2 32.8 30 31.4 30 H4.6 C3.2 30 2.3 28.2 3 27 L16.5 3 C16.9 2.3 17.4 2 18 2Z"
                fill="#3CC85A"
              />
            </Svg>
          </View>

          <View style={{ width: 30, alignItems: "center" }}>
            <View style={{ width: 25, height: 96, backgroundColor: "#6A79D1" }} />
            <Text style={{ marginTop: 8, fontSize: 12, fontWeight: "900" }}>
              Oct
            </Text>
          </View>

          <View style={{ width: 36, height: 32 }}>
            <Svg width="36" height="32">
              <Path
                d="M18 30 C17.4 30 16.9 29.7 16.5 29 L3 5 C2.3 3.8 3.2 2 4.6 2 H31.4 C32.8 2 33.7 3.8 33 5 L19.5 29 C19.1 29.7 18.6 30 18 30Z"
                fill="#FF463B"
              />
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
    { name: "SavorOne", bank: "BOA Cash\nRewards", asset: require("../assets/capital-one-savorone-2.png") },
    { name: "Discover IT", bank: "Wells Fargo\nActive Cash", asset: require("../assets/capital-one-savorone-1.png") },
    { name: "PNC Cash Unlimited", bank: "PNC Unlimited", asset: require("../assets/pnc-cash-unlimited-1.png") },
    { name: "TD Double Up", bank: "TD Double Up", asset: require("../assets/td-double-up-1.png") },
  ];

  return (
    <View style={styles.frameCreditCards}>
      <Text style={styles.sectionTitle}>Credit Card Offers</Text>
      <Text style={styles.creditCardsSubtitle}>*Based on your credit score</Text>

      <View style={styles.cardGrid}>
        {cards.map((card) => (
          <View key={card.name} style={styles.cardItem}>
            <Text style={styles.cardItemTitle}>{card.name}</Text>
            <ImageBackground source={card.asset} style={styles.cardOfferImage} resizeMode="contain" />
            <Text style={styles.cardItemBank}>{card.bank}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function LoanOffersCard() {
  const loans = [
    { name: "PNC Bank", asset: require("../assets/pnc-bank-icon-1.png") },
    { name: "Chase Bank", asset: require("../assets/chase-icon-1.png") },
    { name: "TD Bank", asset: require("../assets/td-icon-1.png") },
    { name: "Wells Fargo", asset: require("../assets/wells-fargo-icon-1.png") },
  ];

  return (
    <View style={styles.frame153}>
      <Text style={styles.sectionTitle}>Loan Offers</Text>
      <Text style={styles.creditCardsSubtitle}>*Based on your credit score</Text>

      <View style={styles.loanGrid}>
        {loans.map((loan) => (
          <View key={loan.name} style={styles.loanItem}>
            <Text style={styles.loanLabel}>{loan.name}</Text>
            <Image source={loan.asset} style={styles.loanIcon} resizeMode="contain" />
          </View>
        ))}
      </View>

      <View style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Find out more</Text>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: 64.5 },
        ]}
      >
        <ImageBackground
          style={styles.dashboardHomeScreenContainer}
          source={require("../assets/twirl-background-png-1.png")}
          resizeMode="cover"
        >
          <View style={styles.mainContent}>
            <TopNav />
            <CreditScoreCard />
            <SpendingCard />
            <CreditCardOffersCard />
            <LoanOffersCard />

            {/* ✅ Bottom spacer */}
            <View style={styles.bottomSpacer} />
          </View>
        </ImageBackground>
      </ScrollView>

      <HeaderBar />
      <BottomNav />
    </View>
  );
}