import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Node.js App (Vite)</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{message}</p>
            <p>Welcome to your full-stack application!</p>
          </div>
        )}
      </header>
    </div>
  )
}

export default App
