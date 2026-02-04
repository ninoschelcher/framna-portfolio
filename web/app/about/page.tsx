import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import { getProjects } from '@/lib/data/projects'
import AdminOverview from '@/components/Organisms/AdminOverview'
import AboutOverview from '@/components/Organisms/AboutOverview'
import { Metadata } from 'next'

export const dynamic = 'force-static'

export default async function Page() {
  return (
    <MainLayout>
      <AboutOverview />
    </MainLayout>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About',
  }
}
