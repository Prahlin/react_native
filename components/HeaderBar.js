import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Svg, { Circle, Defs, Pattern, Rect } from "react-native-svg";

import styles from "../styles/headerStyles";
import { forceHideChrome } from "./navChromeState";

let hasBellBeenClicked = false;

export function resetBellClickedState() {
  hasBellBeenClicked = false;
}

const POPUP_RIGHT_OVERHANG = 27;
const POPUP_NUDGE_RIGHT = 0;
const CLOSE_GUARD_MS = 250;

const MENU_MIN_WIDTH = 0;
const NOTIFICATIONS_MIN_WIDTH = 0;

const SCREEN_MARGIN = 8;
const ARROW_WIDTH = 16;
const ARROW_EDGE_PADDING = 8;

const MENU_HORIZONTAL_PADDING = 16;
const NOTIFICATION_HORIZONTAL_PADDING = 16;
const NOTIFICATION_STAR_WIDTH = 14;
const NOTIFICATION_STAR_MARGIN_RIGHT = 8;

const DOT_GAP = 5;

const clamp = (value, min, max) => {
  return Math.max(min, Math.min(value, max));
};

const HeaderDots = memo(({ color }) => (
  <View pointerEvents="none" style={styles.headerDotsLayer}>
    <Svg width="100%" height="100%">
      <Defs>
        <Pattern
          id="headerDotPattern"
          x="0"
          y="0"
          width={DOT_GAP}
          height={DOT_GAP}
          patternUnits="userSpaceOnUse"
        >
<Circle cx="0.75" cy="0.75" r="0.75" fill={color} opacity="0.05" />
        </Pattern>
      </Defs>

      <Rect width="100%" height="100%" fill="url(#headerDotPattern)" />
    </Svg>
  </View>
));

export default function HeaderBar() {
  const { width: screenWidth } = useWindowDimensions();

  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [bellClicked, setBellClicked] = useState(hasBellBeenClicked);

  const [menuLeft, setMenuLeft] = useState(12);
  const [notificationsLeft, setNotificationsLeft] = useState(12);

  const [menuArrowLeft, setMenuArrowLeft] = useState(POPUP_RIGHT_OVERHANG);
  const [notificationsArrowLeft, setNotificationsArrowLeft] =
    useState(POPUP_RIGHT_OVERHANG);

  const [menuIconCenterX, setMenuIconCenterX] = useState(null);
  const [notificationsIconCenterX, setNotificationsIconCenterX] =
    useState(null);

  const [menuTextWidths, setMenuTextWidths] = useState({});
  const [notificationTextWidths, setNotificationTextWidths] = useState({});

  const menuScale = useRef(new Animated.Value(0.96)).current;
  const notificationsScale = useRef(new Animated.Value(0.96)).current;

  const closeAllowedAtRef = useRef(0);

  const bellRef = useRef(null);
  const menuRef = useRef(null);

  const menuItems = ["Profile", "Settings", "Notifications", "Log out"];

  const notifications = [
    "New software update",
    "Credit score change",
    "New CC offers available",
    "T&C have changed",
    "Credit score change",
  ];

  const menuMaxTextWidth = Math.max(0, ...Object.values(menuTextWidths));

  const notificationsMaxTextWidth = Math.max(
    0,
    ...Object.values(notificationTextWidths)
  );

  const menuPopupWidth = Math.max(
    MENU_MIN_WIDTH,
    Math.ceil(menuMaxTextWidth + MENU_HORIZONTAL_PADDING * 2)
  );

  const notificationsLeftWordGap =
    NOTIFICATION_HORIZONTAL_PADDING +
    NOTIFICATION_STAR_WIDTH +
    NOTIFICATION_STAR_MARGIN_RIGHT;

  const notificationsPopupWidth = Math.max(
    NOTIFICATIONS_MIN_WIDTH,
    Math.ceil(
      notificationsMaxTextWidth +
        notificationsLeftWordGap +
        NOTIFICATION_HORIZONTAL_PADDING
    )
  );

  const getPopupPosition = useCallback(
    (iconCenterX, popupWidth) => {
      const rightMarginAfterNudge = Math.max(
        0,
        SCREEN_MARGIN - POPUP_NUDGE_RIGHT
      );

      const minLeft = SCREEN_MARGIN;
      const maxLeft = Math.max(
        minLeft,
        screenWidth - popupWidth - rightMarginAfterNudge
      );

      const rawLeft =
        iconCenterX + POPUP_RIGHT_OVERHANG - popupWidth + POPUP_NUDGE_RIGHT;

      const popupLeft = clamp(rawLeft, minLeft, maxLeft);

      const arrowLeft = clamp(
        iconCenterX - popupLeft - ARROW_WIDTH / 2,
        ARROW_EDGE_PADDING,
        popupWidth - ARROW_WIDTH - ARROW_EDGE_PADDING
      );

      return { popupLeft, arrowLeft };
    },
    [screenWidth]
  );

  useEffect(() => {
    if (!menuOpen || menuIconCenterX === null) return;

    const { popupLeft, arrowLeft } = getPopupPosition(
      menuIconCenterX,
      menuPopupWidth
    );

    setMenuLeft(popupLeft);
    setMenuArrowLeft(arrowLeft);
  }, [menuOpen, menuIconCenterX, menuPopupWidth, getPopupPosition]);

  useEffect(() => {
    if (!notificationsOpen || notificationsIconCenterX === null) return;

    const { popupLeft, arrowLeft } = getPopupPosition(
      notificationsIconCenterX,
      notificationsPopupWidth
    );

    setNotificationsLeft(popupLeft);
    setNotificationsArrowLeft(arrowLeft);
  }, [
    notificationsOpen,
    notificationsIconCenterX,
    notificationsPopupWidth,
    getPopupPosition,
  ]);

  const guardClose = () => {
    closeAllowedAtRef.current = Date.now() + CLOSE_GUARD_MS;
  };

  const measureMenuText = (text, width) => {
    const nextWidth = Math.ceil(width);

    setMenuTextWidths((prev) => {
      if (prev[text] === nextWidth) return prev;

      return {
        ...prev,
        [text]: nextWidth,
      };
    });
  };

  const measureNotificationText = (text, width) => {
    const nextWidth = Math.ceil(width);

    setNotificationTextWidths((prev) => {
      if (prev[text] === nextWidth) return prev;

      return {
        ...prev,
        [text]: nextWidth,
      };
    });
  };

  const openMenu = () => {
    guardClose();
    setNotificationsOpen(false);

    menuRef.current?.measureInWindow?.((x, y, width) => {
      const iconCenterX = x + width / 2;
      setMenuIconCenterX(iconCenterX);

      const { popupLeft, arrowLeft } = getPopupPosition(
        iconCenterX,
        menuPopupWidth
      );

      setMenuLeft(popupLeft);
      setMenuArrowLeft(arrowLeft);
      setMenuOpen(true);

      menuScale.setValue(0.96);
      Animated.spring(menuScale, {
        toValue: 1,
        friction: 4,
        tension: 140,
        useNativeDriver: true,
      }).start();
    });
  };

  const openNotifications = () => {
    guardClose();
    hasBellBeenClicked = true;
    setBellClicked(true);
    setMenuOpen(false);

    bellRef.current?.measureInWindow?.((x, y, width) => {
      const iconCenterX = x + width / 2;
      setNotificationsIconCenterX(iconCenterX);

      const { popupLeft, arrowLeft } = getPopupPosition(
        iconCenterX,
        notificationsPopupWidth
      );

      setNotificationsLeft(popupLeft);
      setNotificationsArrowLeft(arrowLeft);
      setNotificationsOpen(true);

      notificationsScale.setValue(0.96);
      Animated.spring(notificationsScale, {
        toValue: 1,
        friction: 4,
        tension: 140,
        useNativeDriver: true,
      }).start();
    });
  };

  const closeAll = () => {
    if (Date.now() < closeAllowedAtRef.current) return;

    setMenuOpen(false);
    setNotificationsOpen(false);
  };

  const handleMenuPress = (text) => {
    closeAllowedAtRef.current = 0;

    setMenuOpen(false);
    setNotificationsOpen(false);

    if (text === "Profile") {
      router.push("/profile");
      return;
    }

    if (text === "Settings") {
      router.push("/settings");
      return;
    }

    if (text === "Notifications") {
      router.push("/notifications");
      return;
    }

    if (text === "Log out") {
      forceHideChrome();
      router.replace("/loadout");
    }
  };

  return (
    <View style={styles.root} pointerEvents="box-none">
      <View pointerEvents="none" style={styles.measureLayer}>
        {menuItems.map((text) => (
          <Text
            key={`menu-measure-${text}`}
            numberOfLines={1}
            style={styles.itemText}
            onLayout={(e) => {
              measureMenuText(text, e.nativeEvent.layout.width);
            }}
          >
            {text}
          </Text>
        ))}

        {notifications.map((text, i) => (
          <View
            key={`notification-measure-${text}-${i}`}
            style={styles.notificationMeasureRow}
          >
            <Text style={styles.star}>★</Text>

            <Text
              numberOfLines={1}
              style={styles.notificationMeasureText}
              onLayout={(e) => {
                measureNotificationText(text, e.nativeEvent.layout.width);
              }}
            >
              {text}
            </Text>
          </View>
        ))}
      </View>

      <LinearGradient
colors={["#6F7EF0", "#97A2FE"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.header}
      >
        <HeaderDots color="#3E4BB5" />

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

        <Pressable
          ref={menuRef}
          style={styles.menuButton}
          hitSlop={12}
          onPress={openMenu}
        >
          <Text style={styles.menuDots}>⋮</Text>
        </Pressable>
      </LinearGradient>

      {(menuOpen || notificationsOpen) && (
        <Pressable style={styles.overlay} onPress={closeAll} />
      )}

      {menuOpen && (
        <Animated.View
          style={[
            styles.menu,
            {
              left: menuLeft,
              width: menuPopupWidth,
              transform: [{ scale: menuScale }],
            },
          ]}
        >
          <View
            style={[
              styles.arrowRight,
              {
                left: menuArrowLeft + 1,
              },
            ]}
          />

          {menuItems.map((text, i) => (
            <TouchableOpacity
              key={text}
              style={[styles.item, i === menuItems.length - 1 && styles.last]}
              onPress={() => handleMenuPress(text)}
            >
              <Text numberOfLines={1} style={styles.itemText}>
                {text}
              </Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}

      {notificationsOpen && (
        <Animated.View
          style={[
            styles.notifications,
            {
              left: notificationsLeft,
              width: notificationsPopupWidth,
              transform: [{ scale: notificationsScale }],
            },
          ]}
        >
          <View
            style={[
              styles.notificationsArrow,
              {
                left: notificationsArrowLeft - 2,
              },
            ]}
          />

          {notifications.map((text, i) => (
            <View
              key={`${text}-${i}`}
              style={[
                styles.notificationItem,
                i === notifications.length - 1 && styles.last,
              ]}
            >
              <Text style={styles.star}>★</Text>

              <Text numberOfLines={1} style={styles.notificationText}>
                {text}
              </Text>
            </View>
          ))}
        </Animated.View>
      )}
    </View>
  );
}