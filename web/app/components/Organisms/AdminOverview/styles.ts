import styled from 'styled-components'

export const Wrapper = styled.div({
  width: '100%',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Title = styled.h2({
  fontSize: '20px',
  fontWeight: 600,
})

export const Actions = styled.div({
  display: 'flex',
  gap: '6px',
})

export const Button = styled.button({
  border: 'none',
  borderRadius: '6px',
  padding: '12px 16px',
  fontSize: '14px',
  cursor: 'pointer',
  background: '#111827',
  color: '#f9fafb',
})

export const TableWrapper = styled.div({
  borderRadius: '4px',
  border: '1px solid #e5e7eb',
  overflow: 'hidden',
  background: '#ffffff',
})

export const Table = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px',
})

export const Th = styled.th({
  textAlign: 'left',
  padding: '16px',
  background: '#f9fafb',
  borderBottom: '1px solid #e5e7eb',
  fontWeight: 500,
  color: '#4b5563',
})

export const Td = styled.td({
  padding: '16px',
  borderBottom: '1px solid #f3f4f6',
  color: '#111827',
})

export const Row = styled.tr({
  '&:hover': {
    background: '#f9fafb',
  },
})

export const ButtonWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const EmptyState = styled.div({
  padding: '2rem',
  textAlign: 'center',
  color: '#6b7280',
  fontSize: '0.9rem',
})
