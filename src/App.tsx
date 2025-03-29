import './App.css'
import type { NavigationSection, NavigationGroup } from './types/navigation'

const USER_READ_PERMISSIONS = ['vacancies', 'users', 'candidates', 'clients', 'partners']

const checkHasUserPermission = (routeName: string): boolean => {
  return USER_READ_PERMISSIONS.includes(routeName)
}

const routes = {
  vacancies: {
    name: 'vacancies',
    pathname: 'vacancies',
    getLink: () => '/vacancies',
    text: 'Вакансии',
  },
  candidates: {
    name: 'candidates',
    pathname: 'candidates',
    getLink: () => '/candidates',
    text: 'Кандидаты',
  },
  events: {
    name: 'events',
    pathname: 'events',
    getLink: () => '/events',
    text: 'События',
  },
  clients: {
    name: 'clients',
    pathname: 'clients',
    getLink: () => '/clients',
    text: 'Клиенты',
  },
  partners: {
    name: 'partners',
    pathname: 'partners',
    getLink: () => '/partners',
    text: 'Клиенты',
  },
}

const navigationList = [
  {
    name: 'content',
    text: 'Контент',
    children: [
      {
        name: 'job',
        text: 'Работа',
        children: [routes.vacancies, routes.candidates],
      },
      {
        name: 'news',
        text: 'Новости',
        children: [routes.events],
      },
    ],
  },
  {
    name: 'users',
    text: 'Пользователи',
    children: [
      {
        name: 'inner-users',
        text: 'Внутренние пользователи',
        children: [routes.clients, routes.partners],
      },
    ],
  },
]

const generateNavigationListWithPermissions = (
  navigationList: NavigationSection[],
  checkPermission: (routeName: string) => boolean
): NavigationSection[] => {
  return navigationList
    .map((level1Item) => {
      const level2WithPermission = level1Item.children
        .map((level2Item) => {
          const level3WithPermission = level2Item.children.filter((route) =>
            checkPermission(route.name)
          )

          if (level3WithPermission.length > 0) {
            return {
              ...level2Item,
              children: level3WithPermission,
            }
          }

          return null
        })
        .filter(Boolean) as NavigationGroup[]

      if (level2WithPermission.length > 0) {
        return {
          ...level1Item,
          children: level2WithPermission,
        }
      }

      return null
    })
    .filter(Boolean) as NavigationSection[]
}

function App() {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  )

  return (
    <div className="container">
      <div className="container">
        <div className="navigation">
          {navigationListWithPermission.map((section) => (
            <div key={section.name} className="navigation-level-1">
              {section.text}
              {section.children.map((group) => (
                <div key={group.name} className="navigation-level-2">
                  {group.text}
                  <div className="navigation-level-3">
                    {group.children.map((route) => (
                      <div key={route.name}>{route.text}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="navigation">
        <div className="navigation-level-1">
          Контент
          <div className="navigation-level-2">
            Работа
            <div className="navigation-level-3">
              {checkHasUserPermission('vacancies') && <div>Вакансии</div>}
              {checkHasUserPermission('candidates') && <div>Кандидаты</div>}
            </div>
          </div>
          <div className="navigation-level-2">
            Новости
            <div className="navigation-level-3">
              {checkHasUserPermission('events') && <div>События</div>}
            </div>
          </div>
        </div>
        <div className="navigation-level-1">
          Пользователи
          <div className="navigation-level-2">
            Клиенты
            <div className="navigation-level-3">
              {checkHasUserPermission('clients') && <div>Клиенты</div>}
              {checkHasUserPermission('partners') && <div>Партнеры</div>}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App
