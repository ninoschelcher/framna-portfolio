import styled from 'styled-components'

export const Card = styled.article({
  gap: '14px',
  padding: '14px',
  display: 'flex',
  flexDirection: 'column',
})

export const Media = styled.div({
  borderRadius: '12px',
  aspectRatio: '1/1',
})

export const Img = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
})

export const Content = styled.div({
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
})

export const Title = styled.h3({
  margin: 0,
  fontSize: '20px',
})

export const Description = styled.p({
  margin: 0,
  fontSize: '14px',
})
