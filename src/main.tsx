import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainRouter } from './navigation';
import './index.css'
import QueryProvider from './providers/query.provider.tsx'

createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <StrictMode>
      <MainRouter />
    </StrictMode>
  </QueryProvider>,
)
