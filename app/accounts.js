import { Image, Text, View } from "react-native";
import GrayBg from "../components/gray_bg";
import styles from "../styles/accountsStyles";

export default function Accounts() {
  return (
    <View style={styles.screen}>
      <GrayBg>
        <View style={styles.frameAccounts}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.sectionTitle}>Accounts</Text>
            <Text style={styles.amountText}>13</Text>
          </View>

          <View style={styles.accountsImageWrap}>
            <Image
              source={require("../assets/accounts.png")}
              style={styles.accountsImage}
            />
          </View>

          <View style={styles.accountsList}>
            <View style={styles.accountRow}>
              <View style={styles.rowIconWrap}>
                <Image
                  source={require("../assets/credit-cards.png")}
                  style={styles.rowIcon}
                />
              </View>

              <View style={styles.accountCopy}>
                <Text style={styles.accountLabel}>Credit cards</Text>
                <Text style={styles.accountSubLabel}>9 accounts</Text>
              </View>

              <Text style={styles.accountValue}>$17,691</Text>
            </View>

            <View style={styles.accountRow}>
              <View style={styles.rowIconWrap}>
                <Image
                  source={require("../assets/debit-cards.png")}
                  style={styles.rowIcon}
                />
              </View>

              <View style={styles.accountCopy}>
                <Text style={styles.accountLabel}>Debit cards</Text>
                <Text style={styles.accountSubLabel}>2 accounts</Text>
              </View>

              <Text style={styles.accountValue}>$0</Text>
            </View>

            <View style={styles.accountRow}>
              <View style={styles.rowIconWrap}>
                <Image
                  source={require("../assets/loans.png")}
                  style={styles.rowIcon}
                />
              </View>

              <View style={styles.accountCopy}>
                <Text style={styles.accountLabel}>Loans</Text>
                <Text style={styles.accountSubLabel}>1 account</Text>
              </View>

              <Text style={styles.accountValue}>$1,806</Text>
            </View>

            <View style={styles.accountRow}>
              <View style={styles.rowIconWrap}>
                <Image
                  source={require("../assets/property.png")}
                  style={styles.rowIcon}
                />
              </View>

              <View style={styles.accountCopy}>
                <Text style={styles.accountLabel}>Property</Text>
                <Text style={styles.accountSubLabel}>1 account</Text>
              </View>

              <Text style={styles.accountValue}>$-</Text>
            </View>

            <View style={[styles.accountRow, styles.accountRowNoBorder]}>
              <View style={styles.rowIconWrap}>
                <Image
                  source={require("../assets/other-assets.png")}
                  style={styles.rowIcon}
                />
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
      </GrayBg>
    </View>
  );
}