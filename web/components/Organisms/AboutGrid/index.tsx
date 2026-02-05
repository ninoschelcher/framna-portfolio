import React from 'react'
import {
  AboutGridCard,
  AboutGridWrapper,
  CardContent,
  CardIcon,
  CardText,
  CardTitle,
} from '@/components/Organisms/AboutGrid/styles'
import { CodeBracketIcon, ViewColumnsIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import { Container } from '@/layouts/MainLayout/styles'

const aboutData = [
  {
    icon: <CodeBracketIcon />,
    title: 'Frontend',
    content:
      'HTML, CSS, Javascript, React, Next.js, Typescript, TailwindCSS, Responsive design, Performance optimization',
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Tools & Workflows',
    content: 'Git & Github, Railway, Vercel, npm/yarn, Webstorm/VScode',
  },
  {
    icon: <ViewColumnsIcon />,

    title: 'CMS',
    content: 'Strapi, Payload CMS, Builder io',
  },
]

const AboutGrid = () => {
  return (
    <AboutGridWrapper>
      {aboutData.map((d, index) => {
        return (
          <AboutGridCard key={index}>
            <CardIcon>{d.icon}</CardIcon>

            <CardContent>
              <CardTitle>{d.title}</CardTitle>
              <CardText>{d.content}</CardText>
            </CardContent>
          </AboutGridCard>
        )
      })}
    </AboutGridWrapper>
  )
}

export default AboutGrid
