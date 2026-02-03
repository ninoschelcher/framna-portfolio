'use client'
import React, { useState } from 'react'
import { AdminOverviewProps } from '@/app/components/Organisms/AdminOverview/types'
import {
  Actions,
  Button,
  ButtonWrapper,
  EmptyState,
  Header,
  Row,
  Table,
  TableWrapper,
  Td,
  Th,
  Title,
  Wrapper,
} from '@/app/components/Organisms/AdminOverview/styles'
import { createProject, deleteProject, Project, updateProject } from '@/app/lib/data/projects'
import CreateProjectModal from '@/app/components/Molecules/CreateProjectModal'

const AdminOverview = ({ projects }: AdminOverviewProps) => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject(id)
    } catch (error) {
      console.error('Failed to create/update project', error)
    } finally {
    }
  }

  return (
    <Wrapper>
      <Header>
        <Title>Projects ({projects.length})</Title>
        <Actions>
          <Button onClick={() => setShowCreateProjectModal(true)}>+ New Project</Button>
        </Actions>
      </Header>
      <TableWrapper>
        {!projects.length ? (
          <EmptyState>No projects yet. Create your first project.</EmptyState>
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <Row key={project.id ?? project.title}>
                  <Td>{project.id}</Td>
                  <Td>{project.title}</Td>
                  <Td>
                    <ButtonWrapper>
                      <Button onClick={() => setActiveProject(project)}>Edit</Button>
                      <Button onClick={() => handleDeleteProject(project.id)}>Delete</Button>
                    </ButtonWrapper>
                  </Td>
                </Row>
              ))}
            </tbody>
          </Table>
        )}
      </TableWrapper>
      <CreateProjectModal
        show={showCreateProjectModal || !!activeProject}
        onClose={() => {
          setShowCreateProjectModal(false)
          setActiveProject(null)
        }}
        project={activeProject}
      />
    </Wrapper>
  )
}

export default AdminOverview
