import { Link } from 'react-router-dom'
import {
  navigationList,
  checkHasUserPermission,
  generateNavigationListWithPermissions,
} from '@services'

export const NavigationSidebar = () => {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  )

  return (
    <aside className="container">
      <nav className="navigation">
        {navigationListWithPermission.map((section) => (
          <div key={section.name} className="navigation-level-1">
            {section.text}
            {section.children.map((group) => (
              <div key={group.name} className="navigation-level-2">
                {group.text}
                <div className="navigation-level-3">
                  {group.children.map((route) => (
                    <Link to={route.getLink()} key={route.name}>
                      {route.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default NavigationSidebar
