import styled from 'styled-components'

export const Wrapper = styled.section({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '32px 24px',
})

export const ProjectWrapper = styled.div({
  display: 'grid',
  width: '100%',
  gap: '16px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  '@media (max-width: 640px)': {
    gridTemplateColumns: '1fr',
    gap: '12px',
  },
})

export const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const Header = styled.h1({
  fontSize: '24px',
  fontWeight: 400,
})

export const Text = styled.p({
  fontSize: '18px',
  color: '#717182',
  lineHeight: '140%',
})
