import { Slot, usePathname } from "expo-router";
import { useEffect } from "react";
import { Platform, useWindowDimensions, View } from "react-native";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import TopNav from "../components/TopNav";
import {
  CrownWandPattern,
  GRAY_BG_COLOR,
} from "../components/gray_bg";
import {
  releaseChromeHide,
  useForceHideChrome,
} from "../components/navChromeState";

export default function RootLayout() {
  const pathname = usePathname();
  const forceHideChrome = useForceHideChrome();
  const { height: screenHeight } = useWindowDimensions();

  const isAuthOrLoadingScreen =
    pathname === "/" ||
    pathname === "/loadin" ||
    pathname === "/loadout";

  const hideNav = forceHideChrome || isAuthOrLoadingScreen;

  useEffect(() => {
    if (isAuthOrLoadingScreen) {
      releaseChromeHide();
    }
  }, [isAuthOrLoadingScreen]);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {!hideNav && <HeaderBar />}

      {!hideNav && (
        <View
          pointerEvents="box-none"
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            paddingHorizontal: 8,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: GRAY_BG_COLOR,
            overflow: "hidden",
            zIndex: 900,
            elevation: 900,
          }}
        >
          <CrownWandPattern
            style={{
              position: "absolute",
              top: -80,
              left: 0,
              right: 0,
              height: screenHeight,
            }}
          />

          <View style={{ zIndex: 1 }}>
            <TopNav />
          </View>
        </View>
      )}

      <View
        style={{
          flex: 1,
          paddingTop: !hideNav && Platform.OS === "web" ? 10 : 0,
          backgroundColor: hideNav ? "#6A79D1" : "#ffffff",
        }}
      >
        <Slot />
      </View>

      {!hideNav && <BottomNav />}
    </View>
  );
}