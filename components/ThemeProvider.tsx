"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Detectar preferencia del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // 2. Verificar si hay tema guardado en localStorage
    const stored = localStorage.getItem("theme") as Theme | null;
    
    // 3. Prioridad: localStorage > Preferencia del sistema
    const initialTheme = stored || (prefersDark ? "dark" : "light");
    
    // 4. Aplicar tema al DOM
    setTheme(initialTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(initialTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(initialTheme);
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Aplicar al HTML y Body
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
