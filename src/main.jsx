// src/main.jsx
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import StartPage from './features/psychotest/pages/StartPage.jsx'
import QuestionPage from './features/psychotest/pages/QuestionPage.jsx'
import ResultPage from './features/psychotest/pages/ResultPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/psychotest',
    children: [
      { path: 'start', element: <StartPage /> },
      { path: 'questions', element: <QuestionPage /> },
      { path: 'result', element: <ResultPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
