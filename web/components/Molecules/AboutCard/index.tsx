import React from 'react'
import { AboutCardWrapper } from '@/components/Molecules/AboutCard/styles'
import { Header, Text } from '@/components/Organisms/ProjectOverview/styles'

const AboutCard = () => {
  return (
    <AboutCardWrapper>
      <Header>About me</Header>
      <Text>
        My name is Nino Schelcher. I am 27 years old, born and raised in Amsterdam. I have been
        working as a front-end developer for 3 years now. After high school I studied
        Applicatieontwikkelaar at the ROC Amsterdam where I learned more about web development.
        After that study I decided to do the study Communication & Multimedia Design which "evolved"
        me into a front-end developer. The thing I love the most about doing this job is being able
        to go from a blank canvas to a full fledged product with me being the painter of that
        canvas.
      </Text>
      <Text>
        In my free time I enjoy playing video games, playing a game of padel, reading a book or you
        can find me in a cafe for a nice draft beer.
      </Text>
    </AboutCardWrapper>
  )
}

export default AboutCard
