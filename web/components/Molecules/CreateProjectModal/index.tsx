import React, { useState } from 'react'
import { CreateProjectModalProps } from '@/components/Molecules/CreateProjectModal/types'
import {
  Backdrop,
  Body,
  CloseButton,
  Dialog,
  Field,
  Footer,
  Form,
  Header,
  Input,
  Label,
  PrimaryButton,
  SecondaryButton,
  TextArea,
  Title,
} from '@/components/Molecules/CreateProjectModal/styles'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createProject, updateProject } from '@/lib/data/projects'
import { ErrorText } from '@/components/Organisms/AdminOverview/styles'

const createProjectSchema = Yup.object({
  title: Yup.string().required('Project name is required'),
  description: Yup.string().required('Project description is required'),
  image: Yup.string().required('Project image is required'),
})

const CreateProjectModal = ({ show, onClose, project }: CreateProjectModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  type CreateProjectSchema = Yup.InferType<typeof createProjectSchema>

  const methods = useForm({
    resolver: yupResolver(createProjectSchema),
    mode: 'onChange',
    defaultValues: {
      title: project?.title ?? '',
      description: project?.description ?? '',
      image: project?.image ?? '',
    },
  })

  const handleSubmit = async (data: CreateProjectSchema) => {
    try {
      setIsSubmitting(true)
      if (project) {
        await updateProject({ id: project.id, data })
      } else {
        await createProject({ data })
      }
    } catch (error) {
      console.error('Failed to create/update project', error)
    } finally {
      setIsSubmitting(false)
      onClose()
    }
  }

  if (!show) return null

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Dialog>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(handleSubmit)}>
            <Header>
              <Title>Create Project</Title>
              <CloseButton type="button" aria-label="Close" onClick={onClose}>
                ×
              </CloseButton>
            </Header>
            <Body>
              <Field>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="My awesome project" {...methods.register('title')} />
                {methods.formState.errors.title && (
                  <ErrorText>{methods.formState.errors.title.message as string}</ErrorText>
                )}
              </Field>
              <Field>
                <Label htmlFor="description">Description</Label>
                <TextArea
                  id="description"
                  placeholder="This is a description"
                  {...methods.register('description')}
                />
                {methods.formState.errors.description && (
                  <ErrorText>{methods.formState.errors.description.message as string}</ErrorText>
                )}
              </Field>
              <Field>
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  placeholder="https://images.unsplash.com/photo-1761839258753"
                  {...methods.register('image')}
                />
                {methods.formState.errors.image && (
                  <ErrorText>{methods.formState.errors.image.message as string}</ErrorText>
                )}
              </Field>
            </Body>
            <Footer>
              <SecondaryButton disabled={isSubmitting} type="button" onClick={onClose}>
                Cancel
              </SecondaryButton>
              <PrimaryButton disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Creating…' : 'Create'}
              </PrimaryButton>
            </Footer>
          </Form>
        </FormProvider>
      </Dialog>
    </Backdrop>
  )
}

export default CreateProjectModal
