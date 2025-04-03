import { useState } from 'react'
import baking from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from "./Title.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Title />
      </div>
  )
}

export default App
