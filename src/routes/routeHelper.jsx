import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import {
  getHomePageRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      {
        path: getHomePageRoute(),
        element: <HomePage />,
      },
    ],
  },
]
