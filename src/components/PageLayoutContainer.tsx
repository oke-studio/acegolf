import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const PageLayoutContainer = () => {
  return (
    <>
      <Header />
      <main className="relative grow overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      {/* <div className="subtleNoise"></div> */}
      <ReactQueryDevtools
        initialIsOpen={false}
        buttonPosition="bottom-left"
        position="bottom"
        styleNonce=""
      />
    </>
  )
}
