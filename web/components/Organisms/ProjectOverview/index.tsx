import React from 'react'
import { ProjectOverviewProps } from '@/components/Organisms/ProjectOverview/types'
import {
  ProjectWrapper,
  TextWrapper,
  Wrapper,
  Header,
  Text,
} from '@/components/Organisms/ProjectOverview/styles'
import ProjectCard from '@/components/Molecules/ProjectCard'

const ProjectOverview = ({ projects }: ProjectOverviewProps) => {
  if (!projects.length) return <p>You currently have no projects</p>

  return (
    <Wrapper>
      <TextWrapper>
        <Header>My projects</Header>
        <Text>Explore my latest projects and work</Text>
      </TextWrapper>
      <ProjectWrapper>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ProjectWrapper>
    </Wrapper>
  )
}

export default ProjectOverview
