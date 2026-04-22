import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import TopNav from "../components/TopNav";
import styles from "../styles/notificationsStyles";

export default function Notifications() {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: 64, paddingBottom: 110 },
        ]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBackground
          style={styles.dashboardHomeScreenContainer}
          source={require("../assets/twirl-background-png-1.png")}
          resizeMode="cover"
        >
          <View style={styles.bG} />
          <View style={styles.time} />
          <View style={styles.frame188} />

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

          <View style={styles.mainContent}>
            <TopNav currentIndex={0} />

            <View style={styles.frameNotifications}>
              <View style={styles.heroWrap}>
                <Image
                  source={require("../assets/notifications.png")}
                  style={styles.heroImage}
                />
              </View>

              <View style={styles.notificationList}>
                <View style={styles.notificationRow}>
                  <View style={styles.notificationHead}>
                    <View style={styles.dateWrap}>
                      <Text style={styles.star}>★</Text>
                      <Text style={styles.dateText}>Oct 22</Text>
                    </View>
                    <Text style={styles.titleText}>Update V.2.1</Text>
                  </View>

                  <Text style={styles.bodyText}>
                    The long-awaited new version of CreditKing is now live. If you
                    haven&apos;t already, take the opportunity to access a reported list
                    of new features available only in the latest iteration of your
                    favorite credit related app.
                  </Text>

                  <Text style={styles.linkText}>Go to App Store</Text>
                </View>

                <View style={styles.notificationRow}>
                  <View style={styles.notificationHead}>
                    <View style={styles.dateWrap}>
                      <Text style={styles.star}>★</Text>
                      <Text style={styles.dateText}>Oct 11</Text>
                    </View>
                    <Text style={styles.titleText}>Finance Magazine Op-Ed</Text>
                  </View>

                  <Text style={styles.bodyText}>
                    Renowned finance magazine the Economist leaps praise on
                    CreditKing&apos;s versatility and reliability.
                  </Text>

                  <Text style={styles.linkText}>Read the full article</Text>
                </View>

                <View style={styles.notificationRow}>
                  <View style={styles.notificationHead}>
                    <View style={styles.dateWrap}>
                      <Text style={styles.star}>★</Text>
                      <Text style={styles.dateText}>Oct 3</Text>
                    </View>
                    <Text style={styles.titleText}>Credit Conference</Text>
                  </View>

                  <Text style={styles.bodyText}>
                    The 2024 rendition of the International Credit Conference has
                    been scheduled in Redmond, WA. This year&apos;s get-together will
                    feature team building seminars, raffles, a chili cook-off, and
                    much more.
                  </Text>

                  <Text style={styles.linkText}>Book my ticket</Text>
                </View>

                <View style={styles.notificationRow}>
                  <View style={styles.notificationHead}>
                    <View style={styles.dateWrap}>
                      <Text style={styles.star}>★</Text>
                      <Text style={styles.dateText}>Sep 27</Text>
                    </View>
                    <Text style={styles.titleText}>Prize Awarded</Text>
                  </View>

                  <Text style={styles.bodyText}>
                    CreditKing receives coveted user interface award, lauded for
                    &quot;outstanding accessibility and user friendliness.&quot;
                  </Text>

                  <Text style={styles.linkText}>Find out more</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>

      <HeaderBar />

      <BottomNav activeTab="notifications" />
    </View>
  );
}