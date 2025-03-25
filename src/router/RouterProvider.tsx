import React, { Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import routes from './routes'

import { FallBackLoading } from '@ui/FallBackLoading'

const RouterProvider: React.FC = () => (
  <Suspense fallback={<FallBackLoading />}>
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
)

export default RouterProvider
