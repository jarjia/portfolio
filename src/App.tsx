import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Home } from './pages'

function App() {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </Layout>
  )
}

export default App
