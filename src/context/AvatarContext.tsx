"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type AvatarMode = "photo" | "char";

interface AvatarContextType {
  avatarMode: AvatarMode;
  toggleAvatarMode: () => void;
  setAvatarMode: (mode: AvatarMode) => void;
  avatarSrc: string;
  avatarLabel: string;
}

const STORAGE_KEY = "portfolio-avatar-mode";
const CHANGE_EVENT = "portfolio-avatar-mode-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): AvatarMode {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "char" ? "char" : "photo";
}

function getServerSnapshot(): AvatarMode {
  return "photo";
}

const AvatarContext = createContext<AvatarContextType>({
  avatarMode: "photo",
  toggleAvatarMode: () => {},
  setAvatarMode: () => {},
  avatarSrc: "/avatar.png",
  avatarLabel: "Foto Real",
});

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const avatarMode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setAvatarMode = (mode: AvatarMode) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, mode);
      window.dispatchEvent(new Event(CHANGE_EVENT));
    }
  };

  const toggleAvatarMode = () => {
    const next: AvatarMode = avatarMode === "photo" ? "char" : "photo";
    setAvatarMode(next);
  };

  const avatarSrc = avatarMode === "photo" ? "/avatar.png" : "/char.jpg";
  const avatarLabel = avatarMode === "photo" ? "Foto Real" : "3D Dev Char";

  return (
    <AvatarContext.Provider
      value={{
        avatarMode,
        toggleAvatarMode,
        setAvatarMode,
        avatarSrc,
        avatarLabel,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  return useContext(AvatarContext);
}
