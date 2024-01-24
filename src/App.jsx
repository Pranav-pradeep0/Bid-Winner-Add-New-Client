import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNewClientModal from './assets/Components/AddNewClientModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddNewClientModal></AddNewClientModal>
    </>
  )
}

export default App
