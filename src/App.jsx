import { useEffect, useMemo, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import News from './pages/News.jsx'
import NewsArticle from './pages/NewsArticle.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import RecoverPassword from './pages/RecoverPassword.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'

const basePath =
  import.meta.env.BASE_URL !== '/' && import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL

const createRouter = () =>
  createBrowserRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'cursos', element: <Courses /> },
          { path: 'novidades', element: <News /> },
          { path: 'novidades/:slug', element: <NewsArticle /> },
          { path: 'sobre', element: <About /> },
          { path: 'contato', element: <Contact /> },
          { path: 'login', element: <Login /> },
          { path: 'cadastro', element: <Register /> },
          { path: 'recuperar-senha', element: <RecoverPassword /> },
        ],
      },
      { path: '*', element: <Navigate to='/' replace /> },
    ],
    {
      basename: basePath,
    },
  )

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem('infocursos-theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('infocursos-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const themeValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  )

  const router = useMemo(() => createRouter(), [])

  return (
    <ThemeContext.Provider value={themeValue}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
