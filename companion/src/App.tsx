import { Navigate, Route, Routes } from 'react-router-dom'
import { TooltipProvider } from './engine/tooltip/TooltipProvider'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ChapterPage } from './pages/ChapterPage'
import { ConceptsPage } from './pages/ConceptsPage'
import { ThreadsPage } from './pages/ThreadsPage'
import { ReviewPage } from './pages/ReviewPage'

export default function App() {
  return (
    <TooltipProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/c/:id" element={<ChapterPage />} />
          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/threads" element={<ThreadsPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </TooltipProvider>
  )
}
