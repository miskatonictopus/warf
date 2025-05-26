import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-black dark:text-white" />
      <div
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative w-12 h-6 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-300 ${
          isDark ? "bg-white" : "bg-black"
        }`}
      >
        <div
          className={`transition-transform duration-300 rounded-full shadow-md ${
            isDark
              ? "h-4 w-4 bg-black translate-x-6"
              : "h-4 w-4 bg-white translate-x-0 border"
          }`}
        />
      </div>
      <Moon className="h-4 w-4 text-black dark:text-white" />
    </div>
  )
}
