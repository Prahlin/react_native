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

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [bellClicked, setBellClicked] = useState(hasBellBeenClicked);

  const menuScale = useRef(new Animated.Value(0.96)).current;
  const notificationsScale = useRef(new Animated.Value(0.96)).current;

  const notifications = [
    "New software update",
    "Credit score change",
    "New CC offers available",
    "T&C have changed",
    "Credit score change",
  ];

  const openMenu = () => {
    setNotificationsOpen(false);
    setMenuOpen(true);

    menuScale.setValue(0.96);
    Animated.spring(menuScale, {
      toValue: 1,
      friction: 4,
      tension: 140,
      useNativeDriver: true,
    }).start();
  };

  const openNotifications = () => {
    hasBellBeenClicked = true;
    setBellClicked(true);

    setMenuOpen(false);
    setNotificationsOpen(true);

    notificationsScale.setValue(0.96);
    Animated.spring(notificationsScale, {
      toValue: 1,
      friction: 4,
      tension: 140,
      useNativeDriver: true,
    }).start();
  };

  const closeAll = () => {
    setMenuOpen(false);
    setNotificationsOpen(false);
  };

  return (
    <View style={styles.root} pointerEvents="box-none">
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, Steve</Text>

        <Pressable style={styles.bellButton} onPress={openNotifications}>
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

        <Pressable style={styles.menuButton} onPress={openMenu}>
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
              transform: [{ scale: menuScale }],
            },
          ]}
        >
          <View style={styles.arrowRight} />

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeAll();
              router.push("/profile");
            }}
          >
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeAll();
              router.push("/settings");
            }}
          >
            <Text style={styles.itemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              closeAll();
              router.push("/notifications");
            }}
          >
            <Text style={styles.itemText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.item, styles.last]}
            onPress={() => {
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
              transform: [{ scale: notificationsScale }],
            },
          ]}
        >
          <View style={styles.notificationsArrow} />

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