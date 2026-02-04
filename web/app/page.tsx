import { Container } from '@/layouts/MainLayout/styles'

export const dynamic = 'force-static'

import { getProjects } from '@/lib/data/projects'
import MainLayout from '@/layouts/MainLayout'
import ProjectOverview from '@/components/Organisms/ProjectOverview'
import { Metadata } from 'next'

export default async function Page() {
  const projects = await getProjects()

  return (
    <MainLayout>
      <Container>
        <ProjectOverview projects={projects} />
      </Container>
    </MainLayout>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Portfolio',
  }
}
