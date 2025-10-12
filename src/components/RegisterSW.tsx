"use client";

import { useEffect } from "react";

export function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const register = async () => {
        try {
          await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registered.");
        } catch (err) {
          console.error("SW registration failed:", err);
        }
      };
      register();
    }
  }, []);

  return null;
}
