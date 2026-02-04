import React, { PropsWithChildren } from 'react'
import Footer from '@/components/Organisms/Footer'
import Header from '@/components/Organisms/Header'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
