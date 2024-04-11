import { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Quote from './components/Quote';
import Contact from './components/Contact';

function App() {

  const heroData = [
    { 
      text1: "Mobile app Development",
      text2: "Revolutionize Your Business with Cutting-Edge Mobile App Development Solutions!", 
    },
    { 
      text1: "Website development and web systems",
      text2: "Unlock Limitless Possibilities: Elevate Your Online Presence with Expert Web Application Development!", 
    },
    { 
      text1: "Branding and advertisement",
      text2: "Crafting Irresistible Brands: Transforming Vision into Impactful Advertisement Strategies!", 
    },
  ]

useEffect(() => {
  window.scrollTo(0, 0);
},[])

useEffect(() => {
  setInterval(() => {
    setHerocount((count)=>{return count===2?0:count+1})
  }, 5000);
},[])

const [ herocount, setHerocount ] = useState(2);
const [ playstatus, setPlaystatus ] = useState(false);

  return (
    <div className="App">
    <section id='heros' className=''>
     <Background playstatus={playstatus} herocount={herocount} className='' />
     <Navbar className=''/>
     <Hero 
       setPlaystatus={setPlaystatus}
        heroData={heroData[herocount]}
        herocount={herocount}
        setHerocount={setHerocount}
        playstatus={playstatus} />
    </section>
    <section id='' className='bg-gray-200'>
      <About />
    </section>
    <section id='' className=''>
      <Services/>
    </section>
    <section>
      <Projects/>
    </section>
    <section>
      <Quote/>
    </section>
    <section className='bg-white'>
      <Contact />
    </section>
    </div>
  );
}

export default App;
