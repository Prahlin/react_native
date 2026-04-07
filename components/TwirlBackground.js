import { Dimensions, Image, View } from "react-native";

const { width, height } = Dimensions.get("window");

const TILE_WIDTH = width * 0.5;
const TILE_HEIGHT = height * 0.5;

// Change this to make the twirl more or less visible everywhere
const DEFAULT_OPACITY = 0.20;

const COLS = Math.ceil(width / TILE_WIDTH) + 3;
const ROWS = Math.ceil(height / TILE_HEIGHT) + 3;

export default function TwirlBackground({
  source,
  tileWidth = TILE_WIDTH,
  tileHeight = TILE_HEIGHT,
  opacity = DEFAULT_OPACITY,
}) {
  const startX = -tileWidth;
  const startY = -tileHeight / 2;

  const tiles = [];

  for (let row = 0; row < ROWS; row += 1) {
    const rowOffsetX = row % 2 === 0 ? 0 : tileWidth * 0.5;

    for (let col = 0; col < COLS; col += 1) {
      tiles.push(
        <Image
          key={`${row}-${col}`}
          source={source}
          resizeMode="contain"
          style={{
            position: "absolute",
            left: startX + col * tileWidth + rowOffsetX,
            top: startY + row * tileHeight,
            width: tileWidth,
            height: tileHeight,
            opacity,
          }}
        />
      );
    }
  }

  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      {tiles}
    </View>
  );
}