import { Presentation } from './presentation'
import { fakeRoutes } from '../router/router.test'
import { Names } from '../slide/dom.type'
import { Direction } from '../shared/types/types'

describe('When a new presentation is made', () => {
    let presentation: Presentation

    beforeAll(() => {
        const appShell = document.createElement('div')
        appShell.setAttribute('id', Names.SHELL)

        const page = document.createElement('div')
        page.setAttribute('id', Names.PAGE)

        document.body.appendChild(appShell)
        appShell.appendChild(page)

        presentation = new Presentation(fakeRoutes)
    })

    test('Then the active slide is on the page', () => {
        expect((presentation as any)._pageShell.element.innerHTML).toEqual(
            fakeRoutes[0].routeHTML
        )
    })

    test('When setPage is called going forward', () => {
        presentation.setPage(Direction.NEXT)

        expect((presentation as any)._pageShell.element.innerHTML).toEqual(
            fakeRoutes[1].routeHTML
        )
    })

    test('When setPage is called going backward', () => {
        presentation.setPage(Direction.PREVIOUS)

        expect((presentation as any)._pageShell.element.innerHTML).toEqual(
            fakeRoutes[0].routeHTML
        )
    })
})
