import { lazy } from 'react'

import { IRoute } from '@/interfaces'

const HomePage = lazy(() => import('@/pages/Home'))
const ModalsPage = lazy(() => import('@/pages/Modals'))
const GroupBPage = lazy(() => import('@/pages/GroupB'))
const GroupBDetailsPage = lazy(() => import('@/pages/GroupB/Details'))
const BridgePage = lazy(() => import('@/pages/Bridge'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

const routes: IRoute[] = [
  { path: '/', element: <HomePage /> },
  { path: '/modals', element: <ModalsPage /> },
  { path: '/group-b', element: <GroupBPage /> },
  { path: '/group-b/details', element: <GroupBDetailsPage /> },
  { path: '/bridge', element: <BridgePage /> },
  { path: '*', element: <NotFoundPage /> },
]

export default routes
