import styled from 'styled-components'
import Image from 'next/image'

export const Card = styled.article({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.03), 0px 2px 6px rgba(0, 0, 0, 0.05)',
  height: '100%',
})

export const Media = styled.div({
  borderRadius: '12px',
  maxHeight: '300px',
})

export const Img = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  aspectRatio: '16/9',
})

export const Content = styled.div({
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '24px',
})

export const Title = styled.h3({
  margin: 0,
  fontSize: '24px',
  fontWeight: 400,
})

export const Description = styled.p({
  margin: 0,
  fontSize: '16px',
  color: '#717182',
})
