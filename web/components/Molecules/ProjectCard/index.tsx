import React from 'react'
import { ProjectCardProps } from '@/components/Molecules/ProjectCard/types'
import {
  Card,
  Description,
  Img,
  Media,
  Content,
  Title,
} from '@/components/Molecules/ProjectCard/styles'

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <Media>
        <Img width={400} height={400} src={project.image} alt={project.title} loading="lazy" />
      </Media>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Content>
    </Card>
  )
}

export default ProjectCard
