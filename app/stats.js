import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import styles from "../styles/statsStyles";

export default function Stats() {
  return (
    <View style={styles.screen}>
<ScrollView
  contentContainerStyle={styles.scrollContent}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
>
        <ImageBackground
          style={styles.dashboardHomeScreenContainer}
          source={require("../assets/twirl-background-png-1.png")}
          resizeMode="cover"
        >
          {/* Background decorations */}
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

          {/* Main content */}
          <View style={styles.mainContent}>
            <TopNav currentIndex={0} />

            {/* SINGLE CARD (matches rewards) */}
            <View style={styles.frameRewards}>
              
              {/* HERO IMAGE (now inside card) */}
              <View style={styles.heroWrap}>
                <Image
                  source={require("../assets/stats.png")}
                  style={styles.heroImage}
                />
              </View>

              {/* Membership Tier */}
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Membership Tier</Text>

                <View style={styles.row}>
                  <View>
                    <Text style={styles.label}>Current tier</Text>
                    <Text style={styles.label}>Starting tier</Text>
                  </View>

                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.valuePrimary}>Exclusive</Text>
                    <Text style={styles.valueSecondary}>Standard</Text>
                  </View>
                </View>
              </View>

              {/* Membership Duration */}
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

              {/* Frequency of Use */}
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

              {/* Monthly Logins */}
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

              {/* Linked Accounts */}
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

              {/* Cashback Accrued */}
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
          </View>
        </ImageBackground>
      </ScrollView>

      {/* Sticky Header */}
      <View style={styles.stickyHeaderWrap}>
        <View style={styles.welcomeSteve}>
          <View style={styles.frame189}>
            <Text style={styles._welcomeSteve}>Welcome, Steve</Text>
          </View>
        </View>
      </View>

      {/* Bottom Nav */}
      <BottomNav activeTab="stats" />
    </View>
  );
}