import Header from "./components/Header/Header";
import css from './styles/app.module.scss'
import Hero from './components/Header/hero/Hero'
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from './components/Portfolio/Portfolio'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Portfolio/>
    <AboutMe/>
    <Footer/>
  </div>
};

export default App;
