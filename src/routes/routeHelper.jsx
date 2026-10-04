import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutPage from '../pages/inner/AboutPage.jsx'
import ContactPage from '../pages/inner/ContactPage.jsx'
import TestimonialsPage from '../pages/inner/TestimonialsPage.jsx'
import CareerPage from '../pages/inner/CareerPage.jsx'
import PackageListPage from '../pages/inner/PackageListPage.jsx'
import PackageDetailPage from '../pages/inner/PackageDetailPage.jsx'
import CollectionPage from '../pages/inner/CollectionPage.jsx'
import { themes } from '../data/packages.js'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/testimonials', element: <TestimonialsPage /> },
      { path: '/career', element: <CareerPage /> },
      { path: '/packages', element: <PackageListPage /> },
      ...themes.map((theme) => ({
        path: theme.href,
        element: <CollectionPage kind="theme" slug={theme.slug} />,
      })),
      { path: '/packages/:slug', element: <PackageDetailPage /> },
      { path: '/destinations/:slug', element: <CollectionPage kind="destination" /> },
      { path: '/activities/:slug', element: <CollectionPage kind="activity" /> },
    ],
  },
]
