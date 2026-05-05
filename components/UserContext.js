import { createContext, useContext, useMemo, useState } from "react";

const DEFAULT_DISPLAY_NAME = "Steve";

const UserContext = createContext({
  displayName: DEFAULT_DISPLAY_NAME,
  setDisplayName: () => {},
  resetDisplayName: () => {},
});

export function UserProvider({ children }) {
  const [displayName, setDisplayNameState] = useState(DEFAULT_DISPLAY_NAME);

  const setDisplayName = (name) => {
    const cleanedName = String(name ?? "").trim();

    setDisplayNameState(cleanedName || DEFAULT_DISPLAY_NAME);
  };

  const resetDisplayName = () => {
    setDisplayNameState(DEFAULT_DISPLAY_NAME);
  };

  const value = useMemo(
    () => ({
      displayName,
      setDisplayName,
      resetDisplayName,
    }),
    [displayName]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}