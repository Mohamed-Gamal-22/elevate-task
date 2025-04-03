import React from 'react'
import AboutusSection from '../_components/aboutus-section/AboutusSection'
import Testimonials from '../_components/testimonials/Testimonials'
import OurTeam from '../_components/our-team/OurTeam'
import InstagramSection from '../_components/instagram-section/InstagramSection'
import PreFooter from '../_components/prefooter/PreFooter'

export default function AboutPage() {
  return <>
    <AboutusSection />
    <Testimonials />
    <OurTeam /> 
    <InstagramSection />
    <PreFooter />
  </>
}
