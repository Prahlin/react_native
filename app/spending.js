import { Image, Text, View } from "react-native";
import GrayBg from "../components/gray_bg";
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
  return (
    <View style={styles.frameExpenditure}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.sectionTitle}>Expenditure</Text>
        <Text style={styles.sourcesText}>12 sources</Text>
      </View>

      <View style={styles.expenditureBody}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 12,
            overflow: "hidden",
          }}
        >
<Image
  source={require("../assets/spending.png")}
  style={{
    width: 180,
    height: 180,
    alignSelf: "center",
  }}
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
      <GrayBg>
        <SpendingCard />
        <ExpenditureCard />
        <TrackSpendingCard />
        <View style={styles.bottomSpacer} />
      </GrayBg>
    </View>
  );
}