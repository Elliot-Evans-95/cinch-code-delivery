import { Router } from '../router'
import { Route } from '../router.type'

/*
    @ Proxy Design Pattern
 */
export abstract class RouterHelper {
    // TODO - fix types
    static retrieveActiveRoute(router: Router): Route {
        return <Route>router.state.find((route) => route.isActive)
    }

    static updateHistoryPushState(router: Router): void {
        window.history.pushState(
            null,
            `/${RouterHelper.retrieveActiveRoute(router)}`,
            `${window.location.origin}/${
                RouterHelper.retrieveActiveRoute(router).routeName
            }`
        )
    }
}
