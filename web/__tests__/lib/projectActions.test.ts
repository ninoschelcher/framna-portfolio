import { createProject, deleteProject, getProjects, updateProject } from '@/lib/data/projects'
import { revalidatePath } from 'next/cache'

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}))

global.fetch = jest.fn()

const BASE_URL = 'https://6982270cc9a606f5d4493aff.mockapi.io/projects'

describe('projects actions', () => {
  beforeEach(() => {
    ;(fetch as jest.Mock).mockReset()
    ;(revalidatePath as jest.Mock).mockReset()
  })

  it('getProjects fetches all projects', async () => {
    const mockProjects = [
      {
        id: '1',
        title: 'Project 1',
        description: 'Description 1',
        image:
          'https://plus.unsplash.com/premium_photo-1661319071349-e89f0097393a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]

    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProjects,
    })

    const result = await getProjects()

    expect(fetch).toHaveBeenCalledWith(BASE_URL, expect.objectContaining({ method: 'GET' }))
    expect(result).toEqual(mockProjects)
  })

  it('createProject posts data and calls revalidatePath', async () => {
    const data = { title: 'New', description: 'D' }
    const mockCreated = {
      id: '1',
      title: 'New project 1',
      description: 'New description 1',
      image:
        'https://plus.unsplash.com/premium_photo-1661319071349-e89f0097393a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }

    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCreated,
    })

    const result = await createProject({ data })

    expect(fetch).toHaveBeenCalledWith(
      BASE_URL,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    )
    expect(revalidatePath).toHaveBeenCalledWith('/', 'layout')
    expect(result).toEqual(mockCreated)
  })

  it('updateProject puts data and calls revalidatePath', async () => {
    const data = { title: 'Updated title', description: 'Update description' }
    const mockUpdated = {
      id: '1',
      title: 'Updated title 2',
      description: 'Update description 2',
      image:
        'https://plus.unsplash.com/premium_photo-1661319071349-e89f0097393a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }

    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUpdated,
    })

    const result = await updateProject({ id: '1', data })

    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/1`,
      expect.objectContaining({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    )
    expect(revalidatePath).toHaveBeenCalledWith('/', 'layout')
    expect(result).toEqual(mockUpdated)
  })

  it('deleteProject deletes a project and calls revalidatePath', async () => {
    const mockDeleted = {
      id: '1',
      title: 'Deleted project',
      description: 'Deleted project description',
      image:
        'https://plus.unsplash.com/premium_photo-1661319071349-e89f0097393a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }

    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockDeleted,
    })

    const result = await deleteProject('1')

    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/1`,
      expect.objectContaining({ method: 'DELETE' }),
    )
    expect(revalidatePath).toHaveBeenCalledWith('/', 'layout')
    expect(result).toEqual(mockDeleted)
  })

  it('throws if getProjects response is not ok', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    })

    await expect(getProjects()).rejects.toThrow('getProjects failed with status 500')
  })
})
