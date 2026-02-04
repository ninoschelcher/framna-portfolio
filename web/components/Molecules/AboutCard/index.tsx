import React from 'react'
import { AboutCardWrapper } from '@/components/Molecules/AboutCard/styles'
import { Header, Text } from '@/components/Organisms/ProjectOverview/styles'

const AboutCard = () => {
  return (
    <AboutCardWrapper>
      <Header>About me</Header>
      <Text>
        My name is Nino Schelcher. I am 27 years old, born and raised in Amsterdam. I have been
        working as a front-end developer for 3 years now. The thing I love the most about this job
        is being able to go from a blank canvas to a full fledged product.
      </Text>
      <Text>
        In my free time I enjoy playing video games, playing a game of padel, reading a book or find
        me in a cafe for a nice draft beer.
      </Text>
    </AboutCardWrapper>
  )
}

export default AboutCard
