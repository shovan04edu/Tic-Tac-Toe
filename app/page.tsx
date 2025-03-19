"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import GamePage from "@/components/game-page"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return <main className="min-h-screen">{!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <GamePage />}</main>
}

