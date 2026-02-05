import { render, screen } from '@testing-library/react'
import ProjectOverview from '@/components/Organisms/ProjectOverview'

describe('ProjectOverview', () => {
  it('renders a list of projects', () => {
    const projects = [
      {
        id: '1',
        title: 'P1',
        description: 'D1',
        image:
          'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '2',
        title: 'P2',
        description: 'D2',
        image:
          'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]

    render(<ProjectOverview projects={projects} />)

    expect(screen.getByText('P1')).toBeInTheDocument()
    expect(screen.getByText('P2')).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBe(2)
  })
})
