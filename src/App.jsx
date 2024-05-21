import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './intro/Intro'
import Ingredients from './ingredients/Ingredients'
import Infographic from './infographic/Infographic'
import Tools from './tools/Tools'
import PrimarySections from './primarySections/PrimarySections'
// import { Intro}  from './intro/Intro'
// import { Tools } from './tools/Tools'
// import { Infographic } from './infographic/Infographic'
// import { Ingredients } from './ingredients/Ingredients'

// import  Intro from './intro/Intro'

function App() {
  // const [count, setCount] = useState(0)

  const directions = 'something'

  return (
    <>
      <h1>Recipe Thing</h1>
      <div>.</div>
      <div>.</div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
       */}

      <PrimarySections />
    </>
  )
}

export default App
