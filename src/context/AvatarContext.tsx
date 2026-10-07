"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type AvatarMode = "photo" | "char";

interface AvatarContextType {
  avatarMode: AvatarMode;
  toggleAvatarMode: () => void;
  setAvatarMode: (mode: AvatarMode) => void;
  avatarSrc: string;
  avatarLabel: string;
}

const AvatarContext = createContext<AvatarContextType>({
  avatarMode: "photo",
  toggleAvatarMode: () => {},
  setAvatarMode: () => {},
  avatarSrc: "/avatar.png",
  avatarLabel: "Foto Real",
});

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const [avatarMode, setAvatarModeState] = useState<AvatarMode>("photo");

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("portfolio-avatar-mode") as AvatarMode;
      if (saved === "photo" || saved === "char") {
        setAvatarModeState(saved);
      }
    }
  }, []);

  const setAvatarMode = (mode: AvatarMode) => {
    setAvatarModeState(mode);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("portfolio-avatar-mode", mode);
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
