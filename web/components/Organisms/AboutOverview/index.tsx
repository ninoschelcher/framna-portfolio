import React from 'react'
import { Container } from '@/layouts/MainLayout/styles'
import AboutCard from '@/components/Molecules/AboutCard'
import AboutGrid from '@/components/Organisms/AboutGrid'

const AboutOverview = () => {
  return (
    <Container>
      <AboutCard />
      <AboutGrid />
    </Container>
  )
}

export default AboutOverview
