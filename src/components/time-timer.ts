/*
    @ Strategy Design Pattern
 */
export class TimeTimer extends HTMLElement {
    timerDisplayElement: HTMLDivElement

    private readonly _timerInterval: NodeJS.Timer

    private _timer: number
    private _timerDisplay: string

    constructor() {
        super()

        this._timer = 0
        this._timerDisplay = '00:00'
        this._timerInterval = this.startTimer()

        this.setAttribute('id', 'timeTimer')
        this.setAttribute('class', 'section')

        const shadow = this.attachShadow({ mode: 'open' })

        this.timerDisplayElement = document.createElement('p')
        this.timerDisplayElement.setAttribute('id', 'timerDisplayElement')
        this.timerDisplayElement.textContent = this._timerDisplay

        const style = document.createElement('style')
        style.textContent = `
            :host {
                width: 100px;
                max-width: 50vw;
                background-color: aqua;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999;
            }
            #timerDisplayElement {
                color: red;
            }
        `
        shadow.appendChild(style)
        shadow.appendChild(this.timerDisplayElement)
    }

    disconnectedCallback() {
        this.stopTimer()
    }

    changeTimer(newTime: number): void {
        this._timer = newTime
    }

    changeTimerDisplay(): void {
        const hours: number = Math.floor(this._timer / 3600)
        let minutes: any = Math.floor((this._timer - hours * 3600) / 60)
        let seconds: any = this._timer - hours * 3600 - minutes * 60

        if (minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }

        this._timerDisplay = minutes + ':' + seconds
        this.timerDisplayElement.textContent = this._timerDisplay
    }

    startTimer() {
        return setInterval(() => {
            this.changeTimer(this._timer + 1)
            this.changeTimerDisplay()
        }, 1000)
    }

    stopTimer(): void {
        clearInterval(this._timerInterval)
    }
}
