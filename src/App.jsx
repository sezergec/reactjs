import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import './assets/scss/app.scss'

const App = () => {
  return (
    <div className="container">
    <Header />
      <main>
        <Sidebar />
        <Content />
      </main>
    </div>
  )
}

export default App