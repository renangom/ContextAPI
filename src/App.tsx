import { useState } from 'react'
import { GlobalStyle } from './GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>App</div>
      <GlobalStyle />
    </>
  )
}

export default App
