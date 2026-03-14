import { useState } from "react";
import Index from "./screens/index";
import LoadIn from "./screens/loadin";

export default function App() {
  const [screen, setScreen] = useState("index");

  if (screen === "loadin") {
    return <LoadIn />;
  }

  return <Index goToLoadIn={() => setScreen("loadin")} />;
}