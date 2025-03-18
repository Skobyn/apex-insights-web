"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
