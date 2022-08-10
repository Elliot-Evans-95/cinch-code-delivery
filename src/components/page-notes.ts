import { getActiveRootStorage } from '../storage/storage'

export class PageNotes extends HTMLElement {
    notesTextElement: HTMLDivElement

    private _textDisplay: string

    constructor() {
        super()

        this._textDisplay = getActiveRootStorage().routeNotes
        // this._textDisplay = 'test 123'

        this.setAttribute('id', 'notesText')
        this.setAttribute('class', 'section')

        const shadow = this.attachShadow({ mode: 'open' })

        this.notesTextElement = document.createElement('p')
        this.notesTextElement.setAttribute('id', 'notesTextElement')
        this.notesTextElement.textContent = this._textDisplay

        const style = document.createElement('style')
        style.textContent = `
            :host {
                width: 100%;
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999;
            }
            #notesTextElement {
                color: blue;
            }
        `
        shadow.appendChild(style)
        shadow.appendChild(this.notesTextElement)
    }

    static get observedAttributes(): Array<string> {
        return ['page']
    }

    attributeChangedCallback(
        name: any,
        oldPage: string,
        newPage: string
    ): void {
        console.log('FIRE attributeChangedCallback')
        this._textDisplay = getActiveRootStorage().routeNotes
        this.notesTextElement.textContent = this._textDisplay
    }
}
