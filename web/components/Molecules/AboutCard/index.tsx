import React from 'react'
import { AboutCardWrapper } from '@/components/Molecules/AboutCard/styles'
import { Header, Text } from '@/components/Organisms/ProjectOverview/styles'

const AboutCard = () => {
  return (
    <AboutCardWrapper>
      <Header>About me</Header>
      <Text>
        My name is Nino Schelcher, a 27-year-old front-end developer born and raised in Amsterdam. I
        have three years of professional experience building modern, user-focused web applications.
        After completing my studies in Applicatieontwikkelaar at ROC Amsterdam, where I first got in
        touch with web development, I continued with the study Communication & Multimedia Design.
        This combination helped me grow beyond pure development and shaped my understanding of
        design, and user experience — ultimately evolving me into a front-end developer who values
        both form and function.
      </Text>
      <Text>
        What I enjoy most about my work is the process of going from a blank canvas to a fully
        realized product. I like translating ideas and designs into clean, maintainable code and
        creating interfaces that feel intuitive and responsive for users. I enjoy working with
        modern front-end technologies and continuously improving my skills by staying up to date
        with new tools.
      </Text>
      <Text>
        In my free time I enjoy playing video games, staying active with a game of padel, reading
        books, or spending time in cafés enjoying a good draft beer.
      </Text>
    </AboutCardWrapper>
  )
}

export default AboutCard
