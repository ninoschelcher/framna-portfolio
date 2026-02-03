import React from 'react'
import { ProjectOverviewProps } from '@/app/components/Organisms/ProjectOverview/types'
import { Wrapper } from '@/app/components/Organisms/ProjectOverview/styles'
import ProjectCard from '@/app/components/Molecules/ProjectCard'

const ProjectOverview = ({ projects }: ProjectOverviewProps) => {
  if (!projects.length) return <p>You currently have no projects</p>

  return (
    <Wrapper>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </Wrapper>
  )
}

export default ProjectOverview
