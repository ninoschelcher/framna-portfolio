import { Container } from '@/layouts/MainLayout/styles'
import { getProjects } from '@/lib/data/projects'
import MainLayout from '@/layouts/MainLayout'
import ProjectOverview from '@/components/Organisms/ProjectOverview'
import { Metadata } from 'next'

export const dynamic = 'force-static'

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
