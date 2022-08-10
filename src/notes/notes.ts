import { Action, Messages } from '../shared/types/types'
import { Bus } from '../messages/bus'
import { DocumentWrapper } from '../documentWrapper/document-wrapper'
import { ShellElement } from '../shellElement/shell-element'
import { RouterHelper } from '../router/helpers/router-helper'
import { notes } from './notes.route'
import { LocationWrapper } from '../location-wrapper/location-wrapper'
import { Router } from '../router/router'
import { Slide } from '../slide/slide'
import { NodeElement } from '../nodeElement/node-element'
import { TimeTimer } from '../components/time-timer'
import { PageNotes } from '../components/page-notes'

export class Notes {
    private readonly _messageEvents: Bus
    private readonly _document: DocumentWrapper
    private readonly _location: LocationWrapper
    private readonly _appShell: ShellElement
    private readonly _styleShell: NodeElement
    private readonly _pageShell: ShellElement
    private readonly _router: Router
    private readonly _timerElement: HTMLElement | undefined
    private readonly _pageNotesElement: HTMLElement | undefined

    private _windowObjectReference: any

    constructor(
        appShell: ShellElement,
        pageShell: ShellElement,
        styleShell: NodeElement,
        document: DocumentWrapper,
        location: LocationWrapper,
        router: Router,
        messageEvents: Bus
    ) {
        this._appShell = appShell
        this._pageShell = pageShell
        this._styleShell = styleShell
        this._messageEvents = messageEvents
        this._document = document
        this._router = router
        this._location = location

        this._messageEvents.subscribe(Messages.OPEN_NOTES, (action: Action) => {
            if (action === Action.OPEN) {
                this.createWindow()
            }
        })

        if (this._location.pathName === '/__notes__') {
            this._router.replaceState([notes])
            this.generateNewSlide()
            this._timerElement = this.createComponent(
                TimeTimer,
                'time-timer',
                'section'
            )
            this._pageNotesElement = this.createComponent(
                PageNotes,
                'page-notes',
                'section'
            )
            this.addComponentToPage(this._timerElement, 'afterend')
            this.addComponentToPage(this._pageNotesElement, 'afterend')

            window.addEventListener('storage', () => {
                console.log('FIRE')
                if (!this._pageNotesElement) return
                this._pageNotesElement.setAttribute(
                    'page',
                    Math.random().toString()
                )
            })
        }
    }

    private createWindow(): void {
        if (
            this._windowObjectReference == null ||
            this._windowObjectReference.closed
        ) {
            // this._windowObjectReference = window.open(
            //     `${location.origin}/_notes_`,
            //     'PromoteFirefoxWindowName',
            //     'popup'
            // )
            this._windowObjectReference = window.open(
                `${location.origin}/__notes__`,
                '',
                'popup=true, width=300, height=300'
            )
        } else {
            this._windowObjectReference.focus()
        }
    }

    private generateNewSlide(): void {
        new Slide(
            RouterHelper.retrieveActiveRoute(this._router),
            this._appShell,
            this._pageShell,
            this._styleShell,
            this._document,
            this._messageEvents,
            true
        )
    }

    private createComponent(
        component: any,
        elementName: string,
        htmlElementName: string
    ): HTMLElement {
        customElements.define(elementName, component, {
            extends: htmlElementName,
        })
        return this._document.createElement(htmlElementName, {
            is: elementName,
        })
    }

    private addComponentToPage(
        component: HTMLElement,
        position: InsertPosition
    ) {
        this._appShell.addComponent(component, position)
    }
}
