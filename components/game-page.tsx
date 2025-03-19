"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChromeIcon as Google } from "lucide-react"

type Player = "X" | "O" | null

interface GameState {
  board: Player[][]
  currentPlayer: "X" | "O"
  scores: {
    X: number
    O: number
  }
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(3)
      .fill(null)
      .map(() => Array(3).fill(null)),
    currentPlayer: "X",
    scores: { X: 0, O: 0 },
  })

  const [soundOn, setSoundOn] = useState(true)

  const resetGame = () => {
    setGameState((prev) => ({
      ...prev,
      board: Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)),
      currentPlayer: "X",
    }))
  }

  const resetScores = () => {
    setGameState((prev) => ({
      ...prev,
      scores: { X: 0, O: 0 },
    }))
  }

  const handleCellClick = (row: number, col: number) => {
    if (gameState.board[row][col]) return

    const newBoard = [...gameState.board]
    newBoard[row][col] = gameState.currentPlayer

    setGameState((prev) => ({
      ...prev,
      board: newBoard,
      currentPlayer: prev.currentPlayer === "X" ? "O" : "X",
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-secondary p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">TicTacPro</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
            <span className="flex items-center gap-1">
              <Google className="h-4 w-4 text-google" />
              Google
            </span>
          </Button>
          <Button variant="outline" className="bg-microsoft text-white hover:bg-microsoft/90">
            Microsoft
          </Button>
          <Button className="bg-playgames text-white hover:bg-playgames/90">Play Games</Button>
        </div>
      </header>

      <div className="flex-1 bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr_250px] gap-4">
          {/* Player 1 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold">Player 1</h2>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-500">Online</span>
            </div>

            <div className="flex justify-center mb-4">
              <span className="text-[#00a4ef] text-6xl font-light">X</span>
            </div>

            <div className="text-center">
              <p>Score: {gameState.scores.X}</p>
            </div>
          </div>

          {/* Game Board */}
          <div className="flex flex-col items-center">
            <div className="mb-6 mt-4">
              <h2 className="text-lg font-medium text-center">
                Player {gameState.currentPlayer === "X" ? "1" : "2"}'s Turn
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-1 border border-gray-300 mb-6">
              {gameState.board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <button
                    key={`${rowIndex}-${colIndex}`}
                    className="w-24 h-24 border border-gray-300 flex items-center justify-center text-4xl text-[#00a4ef] font-light"
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell}
                  </button>
                )),
              )}
            </div>

            <div className="flex gap-4 mb-8">
              <Button className="bg-[#00a4ef] hover:bg-[#00a4ef]/90 text-white" onClick={resetGame}>
                New Game
              </Button>
              <Button variant="outline" onClick={resetScores}>
                Reset Score
              </Button>
            </div>

            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Switch id="sound" checked={soundOn} onCheckedChange={setSoundOn} />
                <Label htmlFor="sound">Sound: {soundOn ? "On" : "Off"}</Label>
              </div>

              <Button variant="ghost" size="sm">
                Settings
              </Button>
            </div>
          </div>

          {/* Player 2 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold">Player 2</h2>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-500">Online</span>
            </div>

            <div className="flex justify-center mb-4">
              <span className="text-[#db4437] text-6xl font-light">O</span>
            </div>

            <div className="text-center">
              <p>Score: {gameState.scores.O}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-secondary p-4 text-white text-sm flex justify-between items-center">
        <div>
          © 2024 TicTacPro. All rights reserved.
          <div className="text-xs text-gray-400">Version 1.0.0</div>
        </div>
        <a href="#" className="text-white">
          <Twitter className="h-5 w-5" />
        </a>
      </footer>
    </div>
  )
}

