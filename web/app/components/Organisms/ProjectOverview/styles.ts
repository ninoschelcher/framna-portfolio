import styled from 'styled-components'

export const Wrapper = styled.section({
  padding: '16px 24px',
  display: 'grid',
  width: '100%',
  gap: '16px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  '@media (max-width: 640px)': {
    gridTemplateColumns: '1fr',
    gap: '12px',
  },
})
