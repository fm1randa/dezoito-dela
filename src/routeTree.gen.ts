import { FileRoute, lazyRouteComponent } from '@tanstack/react-router'

import { Route as rootRoute } from './routes/__root'

const ResultsComponentImport = new FileRoute('/results').createRoute()
const IndexComponentImport = new FileRoute('/').createRoute()

const ResultsComponentRoute = ResultsComponentImport.update({
  path: '/results',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/results.component'),
    'component',
  ),
})

const IndexComponentRoute = IndexComponentImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/index.component'),
    'component',
  ),
})
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexComponentImport
      parentRoute: typeof rootRoute
    }
    '/results': {
      preLoaderRoute: typeof ResultsComponentImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexComponentRoute,
  ResultsComponentRoute,
])
