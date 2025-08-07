import AboutSection from './packages/components/about/about-section';
import Header from './packages/components/header/header';
import './ui/styles/globals.scss';
import Footer from './packages/components/footer/footer';
import { GoToWhatsapp } from './packages/components/go-to-whatsapp/go-to-whatsapp';
import { BackToTopButton } from './packages/components/back-to-top/back-to-top-button';
import Banner from './packages/components/banner/banner';
import Servicos from './packages/components/servicos/servicos';
export default function Home() {
  return (
    <>
    <Header />
    <AboutSection/> 

    <Banner />
    <Servicos />
    <GoToWhatsapp />
    <BackToTopButton />
    <Footer />
    </>

  );
}
