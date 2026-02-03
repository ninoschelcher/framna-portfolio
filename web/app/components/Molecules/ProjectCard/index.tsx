import React from 'react'
import { ProjectCardProps } from '@/app/components/Molecules/ProjectCard/types'
import {
  Card,
  Description,
  Img,
  Media,
  Content,
  Title,
} from '@/app/components/Molecules/ProjectCard/styles'

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <Media>
        <Img src={project.image} alt={project.title} loading="lazy" />
      </Media>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Content>
    </Card>
  )
}

export default ProjectCard
