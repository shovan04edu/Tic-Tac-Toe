"use client"

import type React from "react"

import { useState } from "react"
import { ChromeIcon as Google, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MicrosoftIcon } from "@/components/microsoft-icon"

interface LoginPageProps {
  onLogin: () => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex flex-col">
      <header className="p-6">
        <h1 className="text-2xl font-bold text-white">TicTacPro</h1>
      </header>

      <div className="absolute top-6 right-6 text-white">Play with friends, anywhere!</div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to TicTacPro</h2>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border border-gray-300"
              onClick={onLogin}
            >
              <Google className="h-4 w-4 text-google" />
              <span>Continue with Google</span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border border-gray-300"
              onClick={onLogin}
            >
              <MicrosoftIcon className="h-4 w-4 text-microsoft" />
              <span>Continue with Microsoft</span>
            </Button>

            <Button
              className="w-full bg-playgames hover:bg-playgames/90 text-white flex items-center justify-center gap-2"
              onClick={onLogin}
            >
              <Play className="h-4 w-4" />
              <span>Continue with Play Games</span>
            </Button>
          </div>

          <div className="my-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Sign Up
              </Button>
            </form>
          </div>

          <div className="text-center text-sm">
            Already have an account?
            <button className="text-primary font-medium ml-1" onClick={onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

