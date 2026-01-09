import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to the Hompage</h1>
        <div class="content">
          <div class="image">
            <img src= "./assets/react.svg" alt="image" />
          </div>
          <div class="content">
            <h2>Name: Queen Of Tears</h2>
            <h3>Ratings: 8.2</h3>
            <p>Summary: Bake Hyun-woo and Hong hae-in navigate a tense relationship both at home and at work.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
