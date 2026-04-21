import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import styles from "../styles/homeStyles";

export default function HeaderBar() {
  return (
    <View style={styles.stickyHeaderWrap}>
      <View style={styles.welcomeSteve}>
        <View style={styles.frame189}>
          <Text style={styles._welcomeSteve}>Welcome, Steve</Text>

          <View style={styles.notificationListAnimation}>
            <Svg
              style={styles.vector}
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
            >
              <Path
                d="M0.409294 7.25253C0.590182 4.17743 3.13669 1.77632 6.21711 1.77632C9.29752 1.77632 11.844 4.17743 12.0249 7.25253L12.4342 14.2105H0L0.409294 7.25253Z"
                fill="white"
              />
              <Path
                d="M4.14474 14.8026H8.28947V16.2829C8.28947 17.4274 7.36164 18.3553 6.21711 18.3553C5.07257 18.3553 4.14474 17.4274 4.14474 16.2829V14.8026Z"
                fill="white"
              />
              <Path
                d="M4.14474 3.55263H7.69737V1.77632C7.69737 0.795284 6.90208 0 5.92105 0C4.94002 0 4.14474 0.795284 4.14474 1.77632V3.55263Z"
                fill="white"
              />
            </Svg>

            <Svg
              style={styles.ellipse19}
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <Path
                d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
                fill="#3E4BB5"
              />
            </Svg>

            <Text style={styles.__myVar}>!</Text>
          </View>

          <View style={styles.settingsListAnimation}>
            <Svg
              style={styles.ellipse16}
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <Path
                d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z"
                fill="white"
              />
            </Svg>

            <Svg
              style={styles.ellipse17}
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <Path
                d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0 2 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z"
                fill="white"
              />
            </Svg>

            <Svg
              style={styles.ellipse18}
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <Path
                d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
}