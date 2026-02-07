'use client'

import React from 'react'
import { Nav, NavItem, NavWrapper, Title, Wrapper } from '@/components/Organisms/Header/styles'

const routes = [
  { label: 'Projects', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Admin', href: '/admin' },
]
const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Title>Nino&apos;s Portfolio</Title>
        <NavWrapper>
          {routes.map(({ label, href }) => (
            <NavItem key={label} href={href}>
              {label}
            </NavItem>
          ))}
        </NavWrapper>
      </Nav>
    </Wrapper>
  )
}

export default Header
