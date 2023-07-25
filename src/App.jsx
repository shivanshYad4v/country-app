import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:countryName" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
