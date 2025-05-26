'use client';

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useMediaQuery } from "usehooks-ts";

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      storageKey={storageKey}
    >
      {children}
    </NextThemesProvider>
  );
}
