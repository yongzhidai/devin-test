import { useState, useEffect, useCallback } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Trophy, Play } from 'lucide-react'

type Position = {
  x: number
  y: number
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

function App() {
  const GRID_SIZE = 20
  const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }]
  const INITIAL_FOOD = { x: 5, y: 5 }

  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Position>(INITIAL_FOOD)
  const [direction, setDirection] = useState<Direction>('RIGHT')
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    }
    setFood(newFood)
  }, [])

  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setDirection('RIGHT')
    setIsGameOver(false)
    setScore(0)
    generateFood()
    setIsPlaying(true)
  }

  const moveSnake = useCallback(() => {
    if (!isPlaying || isGameOver) return

    setSnake(prevSnake => {
      const head = prevSnake[0]
      const newHead = { ...head }

      switch (direction) {
        case 'UP':
          newHead.y = (newHead.y - 1 + GRID_SIZE) % GRID_SIZE
          break
        case 'DOWN':
          newHead.y = (newHead.y + 1) % GRID_SIZE
          break
        case 'LEFT':
          newHead.x = (newHead.x - 1 + GRID_SIZE) % GRID_SIZE
          break
        case 'RIGHT':
          newHead.x = (newHead.x + 1) % GRID_SIZE
          break
      }

      // Check if snake hits itself
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true)
        setIsPlaying(false)
        return prevSnake
      }

      const newSnake = [newHead, ...prevSnake]
      
      // Check if snake eats food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => prev + 1)
        generateFood()
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, generateFood, isGameOver, isPlaying])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP')
          break
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN')
          break
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT')
          break
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [direction, isPlaying])

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, 200)
    return () => clearInterval(gameLoop)
  }, [moveSnake])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="text-yellow-500" size={24} />
        <span className="text-2xl font-bold">Score: {score}</span>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div 
          className="grid gap-px bg-gray-300 p-2 rounded-lg border-2 border-gray-400"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            width: '400px',
            height: '400px',
            backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
            backgroundSize: `${400/GRID_SIZE}px ${400/GRID_SIZE}px`
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE
            const y = Math.floor(index / GRID_SIZE)
            const isSnake = snake.some(segment => segment.x === x && segment.y === y)
            const isFood = food.x === x && food.y === y

            return (
              <div
                key={index}
                className={`
                  w-full h-full rounded
                  ${isSnake ? 'bg-green-600 shadow-md rounded-sm ring-1 ring-green-400' : ''}
                  ${isFood ? 'bg-red-500 animate-pulse shadow-md rounded-full' : ''}
                `}
              />
            )
          })}
        </div>
      </div>

      <div className="mt-4">
        <Button 
          onClick={resetGame}
          className="flex items-center gap-2"
        >
          <Play size={16} />
          {isPlaying ? 'Restart Game' : 'Start Game'}
        </Button>
      </div>

      {isGameOver && (
        <Alert className="mt-4 w-96">
          <AlertTitle>Game Over!</AlertTitle>
          <AlertDescription>
            Your final score is {score}. Press the Start button to play again!
          </AlertDescription>
        </Alert>
      )}

      {!isPlaying && !isGameOver && (
        <Alert className="mt-4 w-96">
          <AlertTitle>Welcome to Snake Game!</AlertTitle>
          <AlertDescription>
            Use arrow keys to control the snake. Eat the red food to grow and score points!
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default App
