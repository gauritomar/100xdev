import { useState } from 'react'
import './App.css'

function App() {
  /*
  state variables are variables that react needs to constantly
  watch for updation to check if they have been changed or not
  */
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((count) => Math.floor(Math.random()*100))}>
        count is {count}
      </button>
    </div>
  )
}

export default App


