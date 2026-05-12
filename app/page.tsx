import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Map } from '@/components/map'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Map />
      <Contact />
    </>
  )
}
