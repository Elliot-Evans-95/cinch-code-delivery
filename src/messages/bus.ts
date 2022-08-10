import { ShellElement } from '../shellElement/shell-element'
import { Mediator, Subscription } from './bus.type'

type EventType = string | number
// TODO - Generic callback type
type CallbackType = (event: any) => void
type ArgType = string | ShellElement

/*
    @ Mediator Design Pattern
 */
export class Bus implements Mediator {
    subscriptions: Record<string, any> = {}
    private _index: number = 0

    constructor() {}

    subscribe(eventType: EventType, callback: CallbackType): Subscription {
        const id = this.getIdGenerator()

        if (!this.subscriptions[eventType]) this.subscriptions[eventType] = {}

        this.subscriptions[eventType][id] = callback

        return {
            unsubscribe: () => {
                delete this.subscriptions[eventType][id]
                if (Object.keys(this.subscriptions[eventType]).length === 0)
                    delete this.subscriptions[eventType]
            },
        }
    }

    publish(eventType: EventType, arg: ArgType): void {
        if (!this.subscriptions[eventType]) return

        Object.keys(this.subscriptions[eventType]).forEach((key) =>
            this.subscriptions[eventType][key](arg)
        )
    }

    getIdGenerator(): number {
        if (this._index > 0) {
            this._index = +this._index

            return this._index
        }

        return this._index
    }
}
