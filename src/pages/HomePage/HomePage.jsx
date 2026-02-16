import { useState, useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Experiences from '../../components/Experiences/Experiences'
import Featured from '../../components/Featured/Featured'
import Menu from '../../components/Menu/Menu'
import Benefits from '../../components/Benefits/Benefits'
import Events from '../../components/Events/Events'
import Gallery from '../../components/Gallery/Gallery'
import Location from '../../components/Location/Location'
import Footer from '../../components/Footer/Footer'
import PromoPopup from '../../components/PromoPopup/PromoPopup'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Mostrar popup después de 3 segundos
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <Experiences />
      <Featured />
      <Menu />
      <Benefits />
      <Events />
      <Gallery />
      <Location />
      <Footer />
      <PromoPopup show={showPopup} onClose={() => setShowPopup(false)} />
      <WhatsAppButton />
    </>
  )
}

export default HomePage
