import { useMemo, useState } from "react";
import { Image, Text, View } from "react-native";
import Svg, { Line, Path } from "react-native-svg";
import GrayBg from "../components/gray_bg";
import styles from "../styles/debtStyles";

const loanOffers = [
  { name: "PNC Bank", image: require("../assets/pnc-bank-icon-1.png") },
  { name: "Chase Bank", image: require("../assets/chase-icon-1.png") },
  { name: "TD Bank", image: require("../assets/td-icon-1.png") },
  { name: "Wells Fargo", image: require("../assets/wells-fargo-icon-1.png") },
];

const academyItems = [
  "Key terminology",
  "How to avoid common pitfalls",
  "Your rights and obligations as a borrower",
  "How to calculate interest rates",
  "How to calculate time for pay off",
  "How to consolidate a new loan with your pre-existing one",
  "How to read terms & conditions",
  "How to apply",
];

function buildDebtPoints(chartWidth, chartHeight) {
  const left = 14;
  const right = Math.max(chartWidth - 10, left + 120);
  const top = 20;
  const bottom = chartHeight - 22;

  const usableWidth = right - left;
  const usableHeight = bottom - top;
  const xStep = usableWidth / 5;

  return [
    { x: left + xStep * 0, y: top + usableHeight * 0.84 },
    { x: left + xStep * 1, y: top + usableHeight * 0.62 },
    { x: left + xStep * 2, y: top + usableHeight * 0.7 },
    { x: left + xStep * 3, y: top + usableHeight * 0.6 },
    { x: left + xStep * 4, y: top + usableHeight * 0.64 },
    { x: left + xStep * 5, y: top + usableHeight * 0.18 },
  ];
}

function DebtCard() {
  const [chartWidth, setChartWidth] = useState(0);
  const chartHeight = 140;

  const points = useMemo(() => {
    if (!chartWidth) return [];
    return buildDebtPoints(chartWidth, chartHeight);
  }, [chartWidth]);

  const linePath = points.length
    ? points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
    : "";

  const left = 14;
  const right = Math.max(chartWidth - 10, left + 120);

  return (
    <View style={styles.frameDebt}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.sectionTitle}>Debt</Text>
        <Text style={styles.amountText}>$19,499</Text>
      </View>

      <View style={styles.chartWrap}>
        <View
          style={styles.chartLeft}
          onLayout={(e) => {
            const nextWidth = Math.floor(e.nativeEvent.layout.width);
            if (nextWidth !== chartWidth) setChartWidth(nextWidth);
          }}
        >
          {chartWidth > 0 && (
            <Svg width="100%" height={chartHeight}>
              <Line x1={left} y1={108} x2={right} y2={108} stroke="#ECEFF6" />
              <Line x1={left} y1={64} x2={right} y2={64} stroke="#ECEFF6" />
              <Line x1={left} y1={20} x2={right} y2={20} stroke="#ECEFF6" />

              <Path
                d={linePath}
                fill="none"
                stroke="#3E4BB5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </Svg>
          )}

          <View style={styles.monthRow}>
            {["May", "Jun", "July", "Aug", "Sep", "Oct"].map((m) => (
              <Text key={m} style={styles.monthLabel}>
                {m}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.chartRight}>
          <Text style={styles.axisLabel}>$20K</Text>
          <Text style={styles.axisLabel}>$15K</Text>
          <Text style={styles.axisLabel}>$10K</Text>
        </View>
      </View>
    </View>
  );
}

function LoanOffersCard() {
  return (
    <View style={styles.frame153}>
      <Text style={styles.sectionTitle}>Loan Offers</Text>
      <Text style={styles.creditCardsSubtitle}>*Based on your credit score</Text>

      <View style={styles.loanGrid}>
        {loanOffers.map((item) => (
          <View key={item.name} style={styles.loanItem}>
            <Text style={styles.loanLabel}>{item.name}</Text>
            <Image source={item.image} style={styles.loanIcon} />
          </View>
        ))}
      </View>

      <View style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Find out more</Text>
      </View>
    </View>
  );
}

function AcademyCard() {
  return (
    <View style={styles.frameAcademy}>
      <Text style={styles.sectionTitle}>Borrowing Academy</Text>

      <Text style={styles.academyIntro}>
        Find out all of the most important aspects of taking a personal loan,
        including:
      </Text>

      <View style={styles.academyList}>
        {academyItems.map((item) => (
          <View key={item} style={styles.academyRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.academyText}>{item}</Text>
          </View>
        ))}

        <View style={styles.academyRow}>
          <Text style={styles.starGold}>★</Text>
          <Text style={styles.academyText}>
            Everything else you need to get started
          </Text>
        </View>
      </View>

      <View style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Take me now</Text>
      </View>
    </View>
  );
}

export default function Debt() {
  return (
    <View style={styles.screen}>
      <GrayBg fadeTopNavOnScroll>
        <DebtCard />
        <LoanOffersCard />
        <AcademyCard />
        <View style={styles.bottomSpacer} />
      </GrayBg>
    </View>
  );
}