import AppContext from './context/AppContext'
import Navbar from './modules/site/components/Navbar'
import Banner from './modules/site/components/Banner'
import Footer from './modules/site/components/Footer'
import Contact from './modules/site/components/Contact'
import AboutMe from './modules/site/components/AboutMe'
import MySkills from './modules/site/components/MySkills'
import './css/app.css'
import { useState } from 'react'

function App() {
  const [language,setLanguage] = useState('en')
  
  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <Navbar />
      <Banner />
      <AboutMe />
      <MySkills />
      <Contact />
      <Footer />
    </AppContext.Provider>
  )
}

export default App
