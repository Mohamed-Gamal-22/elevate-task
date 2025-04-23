import AboutusSection from './_components/aboutus-section/AboutusSection';
import FirstGifts from './_components/first-gifts/FirstGifts';
import FirstSlider from './_components/first-slider/FirstSlider';
import GridSextion from './_components/grid-section/GridSextion';
import Logout from './_components/logout/Logout';
import Popular from './_components/popular/Popular';
import PreFooter from './_components/prefooter/PreFooter';
import PremiumGifts from './_components/primum-gifts/PrimumGifts';
import SecondNav from './_components/second-nav/SecondNav';
import Testimonials from './_components/testimonials/Testimonials';
import ThirdNav from './_components/third-nav/ThirdNav';



export default function Home() {
  return <>
    <Logout />
    <SecondNav />
    <FirstSlider />
    <FirstGifts />
    <ThirdNav />
    <PremiumGifts />
    <Popular />
    <AboutusSection />
    <GridSextion />
    <Testimonials />
    <PreFooter />
  </>
}
