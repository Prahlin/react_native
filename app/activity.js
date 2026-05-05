import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import GrayBg from "../components/gray_bg";
import styles from "../styles/activityStyles";

const activityItems = [
  {
    date: "Oct 31",
    title: "TransUnion credit score decreased",
    value: "-2",
    tone: "down",
  },
  {
    date: "Oct 30",
    title: "Credit card debt increased",
    value: "$263",
    tone: "up",
  },
  {
    date: "Oct 28",
    title: "Credit limit increase approved",
    value: "Chase",
    tone: "star",
  },
  {
    date: "Oct 26",
    title: "Credit card debt decreased",
    value: "$141",
    tone: "downGood",
  },
  {
    date: "Oct 25",
    title: "Equifax credit score decreased",
    value: "-3",
    tone: "down",
  },
  {
    date: "Oct 22",
    title: "Credit card debt decreased",
    value: "$288",
    tone: "downGood",
  },
  {
    date: "Oct 21",
    title: "Property loan approved",
    value: "Citibank",
    tone: "star",
  },
];

function PulseIcon() {
  return (
    <Svg width="110" height="78" viewBox="0 0 110 78" fill="none">
      <Path
        d="M8 46H28L41 20L56 58L69 40H102"
        stroke="#7280DE"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function TrendMarker({ tone }) {
  if (tone === "up") return <Text style={styles.markerUp}>▲</Text>;

  if (tone === "down" || tone === "downGood") {
    return (
      <Text
        style={tone === "downGood" ? styles.markerDownGood : styles.markerDown}
      >
        ▼
      </Text>
    );
  }

  return <Text style={styles.markerStar}>★</Text>;
}

function ActivityCard() {
  return (
    <View style={styles.frameActivity}>
      <View style={styles.heroWrap}>
        <PulseIcon />
      </View>

      <View style={styles.activityList}>
        {activityItems.map((item) => (
          <View key={`${item.date}-${item.title}`} style={styles.activityRow}>
            <Text style={styles.activityDate}>{item.date}</Text>

            <View style={styles.activityDetailWrap}>
              <Text style={styles.activityTitle}>{item.title}</Text>

              <View style={styles.activityMetaRow}>
                <TrendMarker tone={item.tone} />
                <Text style={styles.activityValue}>{item.value}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Activity() {
  return (
    <View style={styles.screen}>
      <GrayBg>
        <ActivityCard />
        <View style={styles.bottomSpacer} />
      </GrayBg>
    </View>
  );
}