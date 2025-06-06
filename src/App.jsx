import Navbar from './modules/site/components/Navbar'
import Banner from './modules/site/components/Banner'
import AboutMe from './modules/site/components/AboutMe'
import MySkills from './modules/site/components/MySkills'
import Contact from './modules/site/components/Contact'
import Footer from './modules/site/components/Footer'
import FeaturedProject from './modules/site/components/FeaturedProjects'
import './css/app.css'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <MySkills />
      <FeaturedProject/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
