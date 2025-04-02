import AboutusSection from './_components/aboutus-section/AboutusSection';
import FirstGifts from './_components/first-gifts/FirstGifts';
import FirstSlider from './_components/first-slider/FirstSlider';
import Popular from './_components/popular/Popular';
import PremiumGifts from './_components/primum-gifts/PrimumGifts';
import SecondNav from './_components/second-nav/SecondNav';
import ThirdNav from './_components/third-nav/ThirdNav';

export default function Home() {
  return <>
    <SecondNav />
    <FirstSlider />
    <FirstGifts />
    <ThirdNav />
    <PremiumGifts />
    <Popular />
    <AboutusSection />
  </>
}
