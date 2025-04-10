import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { checkHasUserPermission } from '@services'
import routes from '@services/routes'
import {
  Vacancies,
  Candidates,
  Clients,
  Partners,
  Events,
  NavigationPage,
  NotFoundPage,
} from '@pages'

type RouteName = keyof typeof routes

const COMPONENTS: Record<string, React.FC> = {
  vacancies: Vacancies,
  candidates: Candidates,
  clients: Clients,
  partners: Partners,
  events: Events,
}

function App() {
  const permittedRouteNames: RouteName[] = Object.keys(routes).filter((name): name is RouteName =>
    checkHasUserPermission(name)
  )

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/navigation" replace />} />
          <Route path="/navigation" element={<NavigationPage />} />
          {permittedRouteNames.map((name) => {
            const route = routes[name]
            const Component = COMPONENTS[name]
            if (!route || !Component) return null

            return <Route key={name} path={route.getLink()} element={<Component />} />
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
