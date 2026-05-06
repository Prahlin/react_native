import { Image, Text, View } from "react-native";
import GrayBg from "../components/gray_bg";
import styles from "../styles/statsStyles";

export default function Stats() {
  return (
    <View style={styles.screen}>
      <GrayBg
        fadeTopNavOnScroll
        paddingTop={80}
        reverseNavCrossfade
        initialNavCrossfadeProgress={1}
      >
        <View style={styles.frameRewards}>
          <View style={styles.heroWrap}>
            <Image
              source={require("../assets/stats.png")}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Membership Tier</Text>

            <View style={styles.row}>
              <View>
                <Text style={styles.label}>Current tier</Text>
                <Text style={styles.label}>Starting tier</Text>
              </View>

              <View style={styles.valueColumn}>
                <Text style={styles.valuePrimary}>Exclusive</Text>
                <Text style={styles.valueSecondary}>Standard</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Membership Duration</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Length as Exclusive</Text>
              <Text style={styles.value}>3 mts</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Length as Standard</Text>
              <Text style={styles.value}>13 yrs</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Frequency of Use</Text>

            <View style={styles.row}>
              <Text style={styles.label}>CreditKing App</Text>
              <Text style={styles.value}>High</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>CreditKing.com</Text>
              <Text style={styles.value}>Medium</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Monthly Logins</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Average</Text>
              <Text style={styles.value}>17 / mts</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Median</Text>
              <Text style={styles.value}>15 / mts</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Linked Accounts</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Credit cards</Text>
              <Text style={styles.value}>9</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Debit cards</Text>
              <Text style={styles.value}>2</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Loans</Text>
              <Text style={styles.value}>1</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Property</Text>
              <Text style={styles.value}>1</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Cashback Accrued</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Total cashback redemptions</Text>
              <Text style={styles.value}>67</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Total cashback redeemed</Text>
              <Text style={styles.value}>$459+</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </GrayBg>
    </View>
  );
}