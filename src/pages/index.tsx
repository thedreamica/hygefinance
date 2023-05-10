import Box from '@mui/material/Box';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Hero from '@/components/hero'
import Usp from '@/components/usp';
import Services from '@/components/services';
import Steps from '@/components/steps';
import PreApproval from '@/components/preApproval'
import HowItWorks from '@/components/howItWorks';
import CTA from '@/components/cta';
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box>
      <Hero/>
      <Usp/>
      <Services/>
      <Steps/>
      <PreApproval />
      <HowItWorks />
      <CTA/>
      <Footer />
    </Box>
  )
}
