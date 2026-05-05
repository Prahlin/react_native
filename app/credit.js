import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import Svg, { Line, Path } from "react-native-svg";
import GrayBg from "../components/gray_bg";
import styles from "../styles/creditStyles";

function buildCreditPoints(chartWidth, chartHeight, profile = "tu") {
  const left = 12;
  const right = Math.max(chartWidth - 10, left + 120);
  const top = 18;
  const bottom = chartHeight - 22;

  const usableWidth = right - left;
  const usableHeight = bottom - top;
  const xStep = usableWidth / 5;

  if (profile === "eq") {
    return [
      { x: left + xStep * 0, y: top + usableHeight * 0.72 },
      { x: left + xStep * 1, y: top + usableHeight * 0.69 },
      { x: left + xStep * 2, y: top + usableHeight * 0.64 },
      { x: left + xStep * 3, y: top + usableHeight * 0.57 },
      { x: left + xStep * 4, y: top + usableHeight * 0.46 },
      { x: left + xStep * 5, y: top + usableHeight * 0.34 },
    ];
  }

  return [
    { x: left + xStep * 0, y: top + usableHeight * 0.76 },
    { x: left + xStep * 1, y: top + usableHeight * 0.73 },
    { x: left + xStep * 2, y: top + usableHeight * 0.68 },
    { x: left + xStep * 3, y: top + usableHeight * 0.62 },
    { x: left + xStep * 4, y: top + usableHeight * 0.49 },
    { x: left + xStep * 5, y: top + usableHeight * 0.31 },
  ];
}

function ScoreMeter({ markerLeft = "54%" }) {
  return (
    <View style={styles.scoreMeterWrap}>
      <View style={styles.scoreBarBase} />
      <View style={styles.scoreBarMutedLeft} />
      <View style={styles.scoreBarLight} />
      <View style={styles.scoreBarMid} />
      <View style={styles.scoreBarDark} />

      <Svg
        style={styles.scoreArrowLine}
        width="44"
        height="6"
        viewBox="0 0 44 6"
        fill="none"
      >
        <Path
          d="M0 2.88672L5 5.77347V-3.26633e-05L0 2.88672ZM43.5 2.88672L38.5 -3.26633e-05V5.77347L43.5 2.88672ZM4.5 3.38672H39V2.38672H4.5V3.38672Z"
          fill="black"
        />
      </Svg>

      <View style={[styles.scoreMarker, { left: markerLeft }]} />
      <Text style={styles.fairText}>Fair</Text>
      <Text style={styles.excellentText}>Excellent</Text>
    </View>
  );
}

function CreditChart({ profile = "tu" }) {
  const [chartWidth, setChartWidth] = useState(0);
  const chartHeight = 132;

  const points = useMemo(() => {
    if (!chartWidth) return [];
    return buildCreditPoints(chartWidth, chartHeight, profile);
  }, [chartWidth, chartHeight, profile]);

  const pathD = points.length
    ? points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
    : "";

  const left = 12;
  const right = Math.max(chartWidth - 10, left + 120);

  return (
    <View style={styles.scoreChartWrap}>
      <View
        style={styles.scoreChartLeft}
        onLayout={(e) => {
          const nextWidth = Math.floor(e.nativeEvent.layout.width);
          if (nextWidth !== chartWidth) setChartWidth(nextWidth);
        }}
      >
        {chartWidth > 0 && (
          <Svg width="100%" height={chartHeight}>
            <Line
              x1={left}
              y1={100}
              x2={right}
              y2={100}
              stroke="#ECEFF6"
              strokeWidth="1"
            />
            <Line
              x1={left}
              y1={60}
              x2={right}
              y2={60}
              stroke="#ECEFF6"
              strokeWidth="1"
            />
            <Line
              x1={left}
              y1={20}
              x2={right}
              y2={20}
              stroke="#ECEFF6"
              strokeWidth="1"
            />

            <Path
              d={pathD}
              fill="none"
              stroke="#3E4BB5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}

        <View style={styles.scoreMonthsRow}>
          {["May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m) => (
            <Text key={m} style={styles.scoreMonthText}>
              {m}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.scoreChartAxis}>
        <Text style={styles.scoreAxisText}>850</Text>
        <Text style={styles.scoreAxisText}>700</Text>
        <Text style={styles.scoreAxisText}>550</Text>
      </View>
    </View>
  );
}

function CreditScoreCard() {
  return (
    <View style={styles.frameCreditScore}>
      <Text style={styles.sectionTitle}>Credit score</Text>

      <View style={styles.bureauSection}>
        <Text style={styles.bureauTitle}>TransUnion</Text>

        <View style={styles.bureauTopRow}>
          <View style={styles.scoreCopyWrap}>
            <Text style={styles.currentScoreLabel}>Current score</Text>
            <Text style={styles.currentScoreValue}>665</Text>
          </View>

          <ScoreMeter markerLeft="54%" />
        </View>

        <CreditChart profile="tu" />
      </View>

      <View style={styles.bureauSection}>
        <Text style={styles.bureauTitle}>Equifax</Text>

        <View style={styles.bureauTopRow}>
          <View style={styles.scoreCopyWrap}>
            <Text style={styles.currentScoreLabel}>Current score</Text>
            <Text style={styles.currentScoreValue}>663</Text>
          </View>

          <ScoreMeter markerLeft="52%" />
        </View>

        <CreditChart profile="eq" />
      </View>

      <View style={styles.outlineButton}>
        <Text style={styles.outlineButtonText}>Find out more</Text>
      </View>
    </View>
  );
}

function ImpactCard() {
  const impactRows = [
    "Payment history",
    "Credit usage",
    "Derogatory marks",
    "Credit age",
    "Total accounts",
    "Hard inquiries",
  ];

  return (
    <View style={styles.frameImpact}>
      <Text style={styles.sectionTitle}>What impacts your score?</Text>

      <View style={styles.impactList}>
        {impactRows.map((item) => (
          <View key={item} style={styles.impactRow}>
            <Text style={styles.impactLabel}>{item}</Text>
            <Text style={styles.outlineButtonText}>Learn more</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Credit() {
  return (
    <View style={styles.screen}>
      <GrayBg>
        <CreditScoreCard />
        <ImpactCard />
        <View style={styles.bottomSpacer} />
      </GrayBg>
    </View>
  );
}