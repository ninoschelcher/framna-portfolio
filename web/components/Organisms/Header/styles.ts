import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.header({
  borderBottom: '1px solid #e5e7eb',
  position: 'sticky',
  backgroundColor: '#ffffff',
})

export const Title = styled.p({
  margin: '0',
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: 400,
})

export const Nav = styled.nav({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: '16px 26px',
})

export const NavWrapper = styled.div({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
})

export const NavItem = styled(Link)({
  color: '#111827',
  textDecoration: 'none',
})
