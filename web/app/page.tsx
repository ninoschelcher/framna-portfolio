import Image from 'next/image'
import { getProjects } from '@/app/lib/data/projects'
import MainLayout from '@/app/layouts/MainLayout'
import ProjectOverview from '@/app/components/Organisms/ProjectOverview'

export default async function Page() {
  const projects = await getProjects()

  return (
    <MainLayout>
      <ProjectOverview projects={projects} />
    </MainLayout>
  )
}
