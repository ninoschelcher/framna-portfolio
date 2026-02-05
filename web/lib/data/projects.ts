'use server'

import { revalidateTag, updateTag } from 'next/cache'

export type Project = {
  createdAt: string
  description: string
  id: string
  image: string
  title: string
}

const BASE_URL = 'https://6982270cc9a606f5d4493aff.mockapi.io/projects'

export const getProjects = async (): Promise<Project[]> => {
  try {
    return await fetch(BASE_URL, {
      method: 'GET',
      next: { tags: ['projects'] },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`getProjects failed with status ${res.status}`)
      }
      return res.json()
    })
  } catch (error) {
    console.error('Error in getProjects:', error)
    throw error
  }
}

export const getProject = async (id: string): Promise<Project> => {
  try {
    return await fetch(`${BASE_URL}/${id}`, {
      method: 'GET',
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`getProject failed with status ${res.status}`)
      }
      return res.json()
    })
  } catch (error) {
    console.error('Error in getProject:', error)
    throw error
  }
}

export const createProject = async ({
  data,
}: {
  data: Record<string, string>
}): Promise<Project> => {
  try {
    const project = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`createProject failed with status ${res.status}`)
      }

      return res.json()
    })

    updateTag('projects')

    return project
  } catch (error) {
    console.error('Error in createProject:', error)
    throw error
  }
}

export const updateProject = async ({
  id,
  data,
}: {
  id: string
  data: Record<string, string>
}): Promise<Project> => {
  try {
    const project = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`updateProject failed with status ${res.status}`)
      }
      return res.json()
    })

    updateTag('projects')

    return project
  } catch (error) {
    console.error('Error in updateProject:', error)
    throw error
  }
}

export const deleteProject = async (id: string): Promise<Project> => {
  try {
    const project = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`deleteProject failed with status ${res.status}`)
      }
      return res.json()
    })

    updateTag('projects')

    return project
  } catch (error) {
    console.error('Error in deleteProject:', error)
    throw error
  }
}
