import './App.css'
import { Vacancies, Candidates, Clients, Partners, Events } from '@pages'
import { Route, Routes } from 'react-router-dom'
import NavigationSidebar from '@UI/Navigation-sidebar'

function App() {
  return (
    <>
      <NavigationSidebar />
      <main>
        <Routes>
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </>
  )
}

export default App
