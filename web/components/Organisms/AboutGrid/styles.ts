import styled from 'styled-components'

export const AboutGridWrapper = styled.section({
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  maxWidth: '1000px',
  margin: '0 auto',
  '@media (max-width: 640px)': {
    gridTemplateColumns: '1fr',
    gap: '12px',
  },
})

export const AboutGridCard = styled.section({
  padding: '32px 24px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.03), 0px 2px 6px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  gap: '16px',
})

export const CardIcon = styled.div({
  flexShrink: 0,
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f3f4f6',
  color: '#111827',
  svg: {
    width: '20px',
    height: '20px',
  },
})

export const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const CardTitle = styled.h3({
  margin: 0,
  fontSize: '20px',
  fontWeight: 400,
})

export const CardText = styled.p({
  margin: 0,
  fontSize: '14px',
  color: '#717182',
  lineHeight: '140%',
})
