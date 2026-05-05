import { Image, Text, View } from "react-native";
import GrayBg from "../components/gray_bg";
import styles from "../styles/rewardsStyles";

const rewardItems = [
  {
    date: "Nov 1",
    title: "October Cashback",
    body:
      "Great job, Steve! As a result of frequently using your CreditKing-linked credit cards during the month of September, you have accrued a grand total of $21.53 in cashback. You have the choice between redeeming this amount in the form of a statement credit, or as a gift card.",
    link: "Redeem now",
  },
  {
    date: "Oct 16",
    title: "Credit Card Offers",
    body:
      "Wow! Your credit score has awarded you a slew of invitations to credit cards.",
    link: "Explore offers",
  },
  {
    date: "Oct 3",
    title: "Premium Membership",
    body:
      "Great news, Steve! As a result of your lengthy, loyal commitment to CreditKing, you have earned the right to join our exclusive premium membership tier.",
    link: "Find out more",
  },
  {
    date: "Oct 1",
    title: "September Cashback",
    body:
      "Great job, Steve! As a result of frequently using your CreditKing-linked credit cards during the month of September, you have accrued a grand total of $17.72 in cashback. You have the choice between redeeming this amount in the form of a statement credit, or as a gift card.",
    link: "Redeem now",
  },
];

function RewardsCard() {
  return (
    <View style={styles.frameRewards}>
      <View style={styles.heroWrap}>
        <Image
          source={require("../assets/rewards.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.rewardList}>
        {rewardItems.map((item) => (
          <View key={`${item.date}-${item.title}`} style={styles.rewardRow}>
            <View style={styles.rewardHead}>
              <View style={styles.dateWrap}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>

              <Text style={styles.titleText}>{item.title}</Text>
            </View>

            <Text style={styles.bodyText}>{item.body}</Text>
            <Text style={styles.linkText}>{item.link}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Rewards() {
  return (
    <View style={styles.screen}>
      <GrayBg>
        <RewardsCard />
        <View style={styles.bottomSpacer} />
      </GrayBg>
    </View>
  );
}