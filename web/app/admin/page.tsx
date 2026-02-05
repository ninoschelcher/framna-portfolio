import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import { getProjects } from '@/lib/data/projects'
import AdminOverview from '@/components/Organisms/AdminOverview'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const projects = await getProjects()

  return (
    <MainLayout>
      <AdminOverview projects={projects} />
    </MainLayout>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Admin',
  }
}
