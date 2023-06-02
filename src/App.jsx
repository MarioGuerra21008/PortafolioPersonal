import React from 'react'
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import Contact from './components/ContactMe'
import Projects from './components/MyFavoriteProjects'
import Things from './components/ThingsILikeToTalkAbout'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Banner />
      </header>
      <div>
        <AboutMe />
      </div>
      <div>
        <Things />
      </div>
      <div>
        <Projects />
      </div>
      <footer className="footer">
        <Contact />
      </footer>
    </div>
  )
}

export default App
