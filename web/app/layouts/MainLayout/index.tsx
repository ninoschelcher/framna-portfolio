import React, { PropsWithChildren } from 'react'
import Footer from '@/app/components/Organisms/Footer'
import Header from '@/app/components/Organisms/Header'

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
