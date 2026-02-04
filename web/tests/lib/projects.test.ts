import { revalidateTag } from 'next/cache'
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  Project,
  updateProject,
} from '../../../web/lib/data/projects'
import { describe, it, expect, beforeEach, jest } from '@jest/globals'

const BASE_URL = 'https://6982270cc9a606f5d4493aff.mockapi.io/projects'

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

const mockRevalidateTag = revalidateTag as jest.MockedFunction<typeof revalidateTag>

const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>
global.fetch = mockFetch

describe('projects.ts server functions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('fetches all projects successfully', async () => {
    const mockProjects: Project[] = [
      { id: '1', title: 'Test', description: 'desc', image: '', createdAt: '' },
    ]

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockProjects,
    } as unknown as Response)

    const result = await getProjects()

    expect(fetch).toHaveBeenCalledWith(
      BASE_URL,
      expect.objectContaining({
        method: 'GET',
        next: { tags: ['projects'] },
      }),
    )
    expect(result).toEqual(mockProjects)
  })

  it('throws error if getProjects fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => [],
    } as unknown as Response)

    await expect(getProjects()).rejects.toThrow('getProjects failed with status 500')
  })

  it('fetches a single project by id', async () => {
    const mockProject: Project = {
      id: '1',
      title: 'Single',
      description: 'desc',
      image: '',
      createdAt: '',
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockProject,
    } as unknown as Response)

    const result = await getProject('1')

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/1`, expect.objectContaining({ method: 'GET' }))
    expect(result).toEqual(mockProject)
  })

  it('throws error if getProject fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => null,
    } as unknown as Response)

    await expect(getProject('1')).rejects.toThrow('getProject failed with status 404')
  })

  it('creates a project and revalidates cache', async () => {
    const newProject = { id: '2', title: 'New', description: 'desc', image: '', createdAt: '' }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: async () => newProject,
    } as unknown as Response)

    const result = await createProject({
      data: { title: 'New', description: 'desc', image: '', createdAt: '' },
    })

    expect(fetch).toHaveBeenCalledWith(
      BASE_URL,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ title: 'New', description: 'desc', image: '', createdAt: '' }),
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    expect(mockRevalidateTag).toHaveBeenCalledWith('projects', 'max')
    expect(result).toEqual(newProject)
  })

  it('throws error if createProject fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => null,
    } as unknown as Response)

    await expect(createProject({ data: { title: '' } })).rejects.toThrow(
      'createProject failed with status 400',
    )
    expect(mockRevalidateTag).not.toHaveBeenCalled()
  })

  it('updates a project and revalidates cache', async () => {
    const updatedProject = {
      id: '1',
      title: 'Updated',
      description: 'desc',
      image: '',
      createdAt: '',
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => updatedProject,
    } as unknown as Response)

    const result = await updateProject({
      id: '1',
      data: { title: 'Updated', description: 'desc', image: '', createdAt: '' },
    })

    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/1`,
      expect.objectContaining({
        method: 'PUT',
        body: JSON.stringify({ title: 'Updated', description: 'desc', image: '', createdAt: '' }),
      }),
    )

    expect(mockRevalidateTag).toHaveBeenCalledWith('projects', 'max')
    expect(result).toEqual(updatedProject)
  })

  it('throws error if updateProject fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => null,
    } as unknown as Response)

    await expect(updateProject({ id: '1', data: { title: '' } })).rejects.toThrow(
      'updateProject failed with status 400',
    )
    expect(mockRevalidateTag).not.toHaveBeenCalled()
  })

  it('deletes a project and revalidates cache', async () => {
    const deletedProject = {
      id: '1',
      title: 'Deleted',
      description: 'desc',
      image: '',
      createdAt: '',
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => deletedProject,
    } as unknown as Response)

    const result = await deleteProject('1')

    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/1`,
      expect.objectContaining({ method: 'DELETE' }),
    )
    expect(mockRevalidateTag).toHaveBeenCalledWith('projects', 'max')
    expect(result).toEqual(deletedProject)
  })

  it('throws error if deleteProject fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => null,
    } as unknown as Response)

    await expect(deleteProject('1')).rejects.toThrow('deleteProject failed with status 404')
    expect(mockRevalidateTag).not.toHaveBeenCalled()
  })
})
