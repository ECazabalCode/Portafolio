import Navbar from './modules/site/components/Navbar'
import Banner from './modules/site/components/Banner'
import AboutMe from './modules/site/components/AboutMe'
import MySkills from './modules/site/components/MySkills'
import Contact from './modules/site/components/Contact'
import Footer from './modules/site/components/Footer'
import './css/app.css'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <MySkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
