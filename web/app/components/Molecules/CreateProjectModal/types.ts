import { Project } from '@/app/lib/data/projects'

export type CreateProjectModalProps = {
  show: boolean
  onClose: () => void
  project?: Project | null
}
