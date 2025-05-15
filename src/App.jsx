import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginComponent from './Component/Auth/Login/Login'
import RegisterComponent from './Component/Auth/Register/Register'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar with container for max-width and proper padding */}
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <Navbar />
        </div>
      </header>

      {/* Main content area with responsive padding */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Home />
        </div>
      </main>

      {/* Optional footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-600">
          © 2025 The Voice
        </div>
      </footer>
    </div>
  )
}

export default App