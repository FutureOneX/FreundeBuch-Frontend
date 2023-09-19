import { useState } from 'react'
import './App.css'
import FriendsList from './components/FriendsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FriendsList />
    </>
  )
}

export default App
