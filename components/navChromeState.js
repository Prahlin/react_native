import { useEffect, useState } from "react";

let forceHidden = false;
const listeners = new Set();

const emit = () => {
  listeners.forEach((listener) => listener(forceHidden));
};

export const forceHideChrome = () => {
  forceHidden = true;
  emit();
};

export const releaseChromeHide = () => {
  forceHidden = false;
  emit();
};

export const useForceHideChrome = () => {
  const [hidden, setHidden] = useState(forceHidden);

  useEffect(() => {
    listeners.add(setHidden);

    return () => {
      listeners.delete(setHidden);
    };
  }, []);

  return hidden;
};