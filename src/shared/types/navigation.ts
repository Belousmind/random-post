export type Route = {
  name: string
  pathname: string
  getLink: () => string
  text: string
}

export type NavigationGroup = {
  name: string
  text: string
  children: Route[]
}

export type NavigationSection = {
  name: string
  text: string
  children: NavigationGroup[]
}
