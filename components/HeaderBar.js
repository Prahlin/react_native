import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "../styles/headerStyles";

let hasBellBeenClicked = false;

export function resetBellClickedState() {
  hasBellBeenClicked = false;
}

const POPUP_RIGHT_OVERHANG = 27;
const CLOSE_GUARD_MS = 250;

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [bellClicked, setBellClicked] = useState(hasBellBeenClicked);

  const [menuRight, setMenuRight] = useState(12);
  const [notificationsRight, setNotificationsRight] = useState(12);

  const menuScale = useRef(new Animated.Value(0.96)).current;
  const notificationsScale = useRef(new Animated.Value(0.96)).current;

  const closeAllowedAtRef = useRef(0);

  const bellRef = useRef(null);
  const menuRef = useRef(null);

  const notifications = [
    "New software update",
    "Credit score change",
    "New CC offers available",
    "T&C have changed",
    "Credit score change",
  ];

  const guardClose = () => {
    closeAllowedAtRef.current = Date.now() + CLOSE_GUARD_MS;
  };

  const openMenu = () => {
    guardClose();
    setNotificationsOpen(false);

    if (menuRef.current?.measureInWindow) {
      menuRef.current.measureInWindow((x, y, width) => {
        const iconCenterX = x + width / 2;
        const viewportWidth =
          typeof window !== "undefined" ? window.innerWidth : 0;

        const rightDistanceFromIconCenter = viewportWidth - iconCenterX;
        const computedRight =
          rightDistanceFromIconCenter - POPUP_RIGHT_OVERHANG;

        setMenuRight(computedRight);
        setMenuOpen(true);

        menuScale.setValue(0.96);
        Animated.spring(menuScale, {
          toValue: 1,
          friction: 4,
          tension: 140,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const openNotifications = () => {
    guardClose();
    hasBellBeenClicked = true;
    setBellClicked(true);
    setMenuOpen(false);

    if (bellRef.current?.measureInWindow) {
      bellRef.current.measureInWindow((x, y, width) => {
        const iconCenterX = x + width / 2;
        const viewportWidth =
          typeof window !== "undefined" ? window.innerWidth : 0;

        const rightDistanceFromIconCenter = viewportWidth - iconCenterX;
        const computedRight =
          rightDistanceFromIconCenter - POPUP_RIGHT_OVERHANG;

        setNotificationsRight(computedRight);
        setNotificationsOpen(true);

        notificationsScale.setValue(0.96);
        Animated.spring(notificationsScale, {
          toValue: 1,
          friction: 4,
          tension: 140,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const closeAll = () => {
    if (Date.now() < closeAllowedAtRef.current) {
      return;
    }

    setMenuOpen(false);
    setNotificationsOpen(false);
  };

  return (
    <View style={styles.root} pointerEvents="box-none">
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, Steve</Text>

        <View style={styles.middleSection}>
          <View style={styles.leftBellSpacer} />

          <Pressable
            ref={bellRef}
            style={styles.bellButton}
            onPress={openNotifications}
          >
            <Image
              source={
                bellClicked
                  ? require("../assets/bell-clicked.png")
                  : require("../assets/frame-223.png")
              }
              style={styles.bellIcon}
              resizeMode="contain"
            />
          </Pressable>

          <View style={styles.rightBellSpacer} />
        </View>

        <Pressable ref={menuRef} style={styles.menuButton} onPress={openMenu}>
          <Text style={styles.menuDots}>⋮</Text>
        </Pressable>
      </View>

      {(menuOpen || notificationsOpen) && (
        <Pressable style={styles.overlay} onPress={closeAll} />
      )}

      {menuOpen && (
        <Animated.View
          style={[
            styles.menu,
            {
              right: menuRight,
              transform: [{ scale: menuScale }],
            },
          ]}
        >
          <View
            style={[
              styles.arrowRight,
              { right: POPUP_RIGHT_OVERHANG - 8 },
            ]}
          />

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeAllowedAtRef.current = 0;
              closeAll();
              router.push("/profile");
            }}
          >
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeAllowedAtRef.current = 0;
              closeAll();
              router.push("/settings");
            }}
          >
            <Text style={styles.itemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeAllowedAtRef.current = 0;
              closeAll();
              router.push("/notifications");
            }}
          >
            <Text style={styles.itemText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.item, styles.last]}
            onPress={() => {
              closeAllowedAtRef.current = 0;
              closeAll();
              router.push("/loadout");
            }}
          >
            <Text style={styles.itemText}>Log out</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {notificationsOpen && (
        <Animated.View
          style={[
            styles.notifications,
            {
              right: notificationsRight,
              transform: [{ scale: notificationsScale }],
            },
          ]}
        >
          <View
            style={[
              styles.notificationsArrow,
              { right: POPUP_RIGHT_OVERHANG - 5 },
            ]}
          />

          {notifications.map((text, i) => (
            <View
              key={i}
              style={[
                styles.notificationItem,
                i === notifications.length - 1 && styles.last,
              ]}
            >
              <Text style={styles.star}>★</Text>
              <Text style={styles.notificationText}>{text}</Text>
            </View>
          ))}
        </Animated.View>
      )}
    </View>
  );
}