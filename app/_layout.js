import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="loadin" />
      <Stack.Screen name="home" />
      <Stack.Screen name="debt" />
      <Stack.Screen name="activity" />
      <Stack.Screen name="spending" />
      <Stack.Screen name="credit" />
      <Stack.Screen name="accounts" />
      <Stack.Screen name="news" />
      <Stack.Screen name="rewards" />
      <Stack.Screen name="stats" />
    </Stack>
  );
}