import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import styles from "../styles/accountsStyles";

export default function Accounts() {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: 151 },
        ]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBackground
          style={styles.dashboardHomeScreenContainer}
          source={require("../assets/twirl-background-png-1.png")}
          resizeMode="cover"
        >
          <View style={styles.mainContent}>


            <View style={styles.frameAccounts}>
              <View style={styles.cardHeaderRow}>
                <Text style={styles.sectionTitle}>Accounts</Text>
                <Text style={styles.amountText}>13</Text>
              </View>

              <View style={styles.accountsImageWrap}>
                <Image
                  source={require("../assets/accounts.png")}
                  style={{ width: 360, height: 240, resizeMode: "contain" }}
                />
              </View>

              <View style={styles.accountsList}>
                <View style={styles.accountRow}>
                  <View style={styles.rowIconWrap}>
                    <Image source={require("../assets/credit-cards.png")} style={{ width: 39, height: 39, resizeMode: "contain" }} />
                  </View>
                  <View style={styles.accountCopy}>
                    <Text style={styles.accountLabel}>Credit cards</Text>
                    <Text style={styles.accountSubLabel}>9 accounts</Text>
                  </View>
                  <Text style={styles.accountValue}>$17,691</Text>
                </View>

                <View style={styles.accountRow}>
                  <View style={styles.rowIconWrap}>
                    <Image source={require("../assets/debit-cards.png")} style={{ width: 39, height: 39, resizeMode: "contain" }} />
                  </View>
                  <View style={styles.accountCopy}>
                    <Text style={styles.accountLabel}>Debit cards</Text>
                    <Text style={styles.accountSubLabel}>2 accounts</Text>
                  </View>
                  <Text style={styles.accountValue}>$0</Text>
                </View>

                <View style={styles.accountRow}>
                  <View style={styles.rowIconWrap}>
                    <Image source={require("../assets/loans.png")} style={{ width: 39, height: 39, resizeMode: "contain" }} />
                  </View>
                  <View style={styles.accountCopy}>
                    <Text style={styles.accountLabel}>Loans</Text>
                    <Text style={styles.accountSubLabel}>1 account</Text>
                  </View>
                  <Text style={styles.accountValue}>$1,806</Text>
                </View>

                <View style={styles.accountRow}>
                  <View style={styles.rowIconWrap}>
                    <Image source={require("../assets/property.png")} style={{ width: 39, height: 39, resizeMode: "contain" }} />
                  </View>
                  <View style={styles.accountCopy}>
                    <Text style={styles.accountLabel}>Property</Text>
                    <Text style={styles.accountSubLabel}>1 account</Text>
                  </View>
                  <Text style={styles.accountValue}>$-</Text>
                </View>

                <View style={[styles.accountRow, styles.accountRowNoBorder]}>
                  <View style={styles.rowIconWrap}>
                    <Image source={require("../assets/other-assets.png")} style={{ width: 39, height: 39, resizeMode: "contain" }} />
                  </View>
                  <View style={styles.accountCopy}>
                    <Text style={styles.accountLabel}>Other assets</Text>
                    <Text style={styles.accountSubLabel}>0 account</Text>
                  </View>
                  <Text style={styles.accountValue}>$0</Text>
                </View>
              </View>

              <View style={styles.outlineButton}>
                <Text style={styles.outlineButtonText}>View details</Text>
              </View>
            </View>

            <View style={styles.bottomSpacer} />
          </View>
        </ImageBackground>
      </ScrollView>

      <HeaderBar />
      <BottomNav activeTab="accounts" />
    </View>
  );
}