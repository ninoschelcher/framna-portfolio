'use client'
import React, { useState } from 'react'
import { AdminOverviewProps } from '@/components/Organisms/AdminOverview/types'
import {
  Actions,
  Button,
  ButtonWrapper,
  EmptyState,
  Header,
  OverviewWrapper,
  Row,
  Table,
  TableWrapper,
  Td,
  Th,
  Title,
  ActionButton,
  ProjectCell,
  ProjectTitle,
  ProjectThumbnail,
} from '@/components/Organisms/AdminOverview/styles'
import { deleteProject, Project } from '@/lib/data/projects'
import CreateProjectModal from '@/components/Molecules/CreateProjectModal'
import { Text } from '@/components/Organisms/ProjectOverview/styles'
import { Container } from '@/layouts/MainLayout/styles'

const AdminOverview = ({ projects }: AdminOverviewProps) => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleDeleteProject = async (id: string, title?: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"? This cannot be undone.`,
    )

    if (!confirmed) return

    try {
      await deleteProject(id)
    } catch (error) {
      console.error('Failed to delete project', error)
    }
  }

  return (
    <Container>
      <OverviewWrapper>
        <Header>
          <div>
            <Title>Projects ({projects.length})</Title>
            <Text>Manage your projects</Text>
          </div>
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
                  <Th>Project</Th>
                  <Th>Description</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <Row key={project.id ?? project.title}>
                    <Td>
                      <ProjectCell>
                        <ProjectThumbnail
                          width={32}
                          height={32}
                          src={project.image}
                          alt={project.title}
                        />
                        <ProjectTitle>{project.title}</ProjectTitle>
                      </ProjectCell>
                    </Td>
                    <Td>{project.description}</Td>
                    <Td>
                      <ButtonWrapper>
                        <ActionButton
                          onClick={() => setActiveProject(project)}
                          aria-label="Edit project"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            width="16"
                            height="16"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </ActionButton>
                        <ActionButton
                          type="button"
                          onClick={() => handleDeleteProject(project.id, project.title)}
                          aria-label="Edit project"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="red"
                            width="16"
                            height="16"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </ActionButton>
                      </ButtonWrapper>
                    </Td>
                  </Row>
                ))}
              </tbody>
            </Table>
          )}
        </TableWrapper>
        <CreateProjectModal
          key={activeProject?.id}
          show={showCreateProjectModal || !!activeProject}
          onClose={() => {
            setShowCreateProjectModal(false)
            setActiveProject(null)
          }}
          project={activeProject}
        />
      </OverviewWrapper>
    </Container>
  )
}

export default AdminOverview
