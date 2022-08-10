import { Route } from '../router/router.type'

const presentationFrameworkStorageKey = 'presentationFrameworkStorage'

export const getActiveRootStorage = (): Route => {
    const presentationFrameworkStorage = localStorage.getItem(
        presentationFrameworkStorageKey
    )

    return presentationFrameworkStorage
        ? JSON.parse(presentationFrameworkStorage)
        : {}
}

export const setActiveRootStorage = (route: Readonly<Route>): void => {
    localStorage.setItem(presentationFrameworkStorageKey, JSON.stringify(route))
}
