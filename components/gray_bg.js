import { Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const IS_ANDROID = Platform.OS === "android";

const ROWS = 25;
const PAIRS_PER_ROW = 5;

const CROWN_OPACITY = 0.1;
const WAND_OPACITY = CROWN_OPACITY * 0.5;

const BACKGROUND_ICONS = Array.from({
  length: ROWS * PAIRS_PER_ROW * 2,
}).map((_, i) => {
  const pairIndex = Math.floor(i / 2);
  const row = Math.floor(pairIndex / PAIRS_PER_ROW);
  const col = pairIndex % PAIRS_PER_ROW;

  const isCrown = i % 2 === 1;
  const isOffsetRow = row % 2 === 1;

  const baseLeft = col * 20 + 2;
  const offsetLeft = col * 20 + 12;
  const pairStartLeft = isOffsetRow ? offsetLeft : baseLeft;

  const crownOffset = 5.5;

  const baseTop = row * 4.1 + 1;
  const adjustedTop = isCrown ? baseTop : baseTop - 1.55;

  const finalLeft = pairStartLeft + (isCrown ? crownOffset : 0);

  return {
    id: i,
    isCrown,
    top: `${adjustedTop}%`,
    left: `${finalLeft}%`,
    androidLeft: `${pairStartLeft - 4}%`,
  };
});

export default function GrayBg({
  children,
  paddingTop = 151,
  paddingHorizontal = 8,
  gap = 8,
  bottomPadding = 110,
}) {
  return (
    <View style={styles.root}>
      <View pointerEvents="none" style={styles.fixedBackground}>
        {BACKGROUND_ICONS.map((icon) => (
          <Image
            key={icon.id}
            source={
              icon.isCrown
                ? require("../assets/fancy_crown.png")
                : require("../assets/wand.png")
            }
            style={{
              position: "absolute",
              width: icon.isCrown ? 22 : 40,
              height: icon.isCrown ? 22 : 40,
              opacity: icon.isCrown ? CROWN_OPACITY : WAND_OPACITY,
              top: icon.top,
              left:
                !icon.isCrown && IS_ANDROID
                  ? icon.androidLeft
                  : icon.left,
            }}
            resizeMode="contain"
          />
        ))}
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop,
          paddingHorizontal,
          paddingBottom: bottomPadding,
          gap,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
    overflow: "hidden",
  },

  fixedBackground: {
    ...StyleSheet.absoluteFillObject,
backgroundColor: "#F4F5FB", 
    overflow: "hidden",
  },

  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 1,
  },
});