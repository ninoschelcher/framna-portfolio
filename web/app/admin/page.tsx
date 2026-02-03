import React from 'react'
import MainLayout from '@/app/layouts/MainLayout'
import { getProjects } from '@/app/lib/data/projects'
import AdminOverview from '@/app/components/Organisms/AdminOverview'

export default async function Page() {
  const projects = await getProjects()

  return (
    <MainLayout>
      <AdminOverview projects={projects} />
    </MainLayout>
  )
}
