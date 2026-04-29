import { Slot, usePathname } from "expo-router";
import { View } from "react-native";
import BottomNav from "../components/BottomNav";
import HeaderBar from "../components/HeaderBar";
import TopNav from "../components/TopNav";

export default function RootLayout() {
  const pathname = usePathname();

  // ✅ Hide ALL nav on auth + loading screens
  const hideNav =
    pathname === "/" ||
    pathname === "/loadin" ||
    pathname === "/loadout";

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      
      {/* 🔵 HEADER */}
      {!hideNav && <HeaderBar />}

      {/* 🔵 TOP NAV (overlay, no white gap) */}
      {!hideNav && (
        <View
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
          }}
        >
          <TopNav />
        </View>
      )}

      {/* 🔵 SCREEN CONTENT */}
      <Slot />

      {/* 🔵 BOTTOM NAV */}
      {!hideNav && <BottomNav />}
    </View>
  );
}