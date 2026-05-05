import { Slot, usePathname } from "expo-router";
import { useEffect } from "react";
import { Platform, View } from "react-native";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import TopNav from "../components/TopNav";
import {
  releaseChromeHide,
  useForceHideChrome,
} from "../components/navChromeState";

export default function RootLayout() {
  const pathname = usePathname();
  const forceHideChrome = useForceHideChrome();

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
      {/* HEADER */}
      {!hideNav && <HeaderBar />}

      {/* TOP NAV */}
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
            backgroundColor: "rgba(217,217,217,0.5)",
            zIndex: 900,
            elevation: 900,
          }}
        >
          <TopNav />
        </View>
      )}

      {/* SCREEN CONTENT */}
      <View
        style={{
          flex: 1,
          paddingTop: !hideNav && Platform.OS === "web" ? 10 : 0,
          backgroundColor: hideNav ? "#6A79D1" : "#ffffff",
        }}
      >
        <Slot />
      </View>

      {/* BOTTOM NAV */}
      {!hideNav && <BottomNav />}
    </View>
  );
}