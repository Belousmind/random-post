import type { NavigationSection, NavigationGroup } from '@t/navigation'

export const USER_READ_PERMISSIONS = ['vacancies', 'users', 'candidates', 'clients', 'partners']

export const checkHasUserPermission = (routeName: string): boolean => {
  return USER_READ_PERMISSIONS.includes(routeName)
}

export const generateNavigationListWithPermissions = (
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
