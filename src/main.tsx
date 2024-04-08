import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PageLayoutContainer } from './components/PageLayoutContainer'
import './index.css'
import { Landing } from './pages/Landing/Landing'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Menu } from './pages/Menu/Menu'
import { BookNow } from './pages/BookNow/BookNow'
import { HIW } from './pages/HIW/HIW'
import { AboutACE } from './pages/AboutACE/AboutACE'
import { Events } from './pages/Events/Events'
import { EventsItem } from './pages/Events/pages/EventsItem'
const client = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayoutContainer />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/book-now',
        element: <BookNow />,
      },
      {
        path: '/how-it-works',
        element: <HIW />,
      },
      {
        path: '/about',
        element: <AboutACE />,
      },
      { path: '/events', element: <Events /> },
      { path: '/events/:eventId/:eventDate', element: <EventsItem /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
