import React from 'react'
import { Title, Wrapper } from '@/app/components/Organisms/Footer/styles'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <Wrapper>
      <Title>© {date}</Title>
    </Wrapper>
  )
}

export default Footer
