import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Container />
      </main>
      <Footer />
    </div>
  )
}

export default App
