import { Action, Direction, Messages } from '../shared/types/types'
import { Bus } from '../messages/bus'

export class KeyListener {
    private readonly _messageEvents: Bus

    constructor(messageEvents: Bus) {
        this._messageEvents = messageEvents

        document.addEventListener('keydown', (event: KeyboardEvent) => {
            console.log(event.key)

            switch (event.key) {
                case 'ArrowRight':
                    this._messageEvents.publish(
                        Messages.SET_PAGE,
                        Direction.NEXT
                    )
                    break
                case 'ArrowLeft':
                    this._messageEvents.publish(
                        Messages.SET_PAGE,
                        Direction.PREVIOUS
                    )
                    break
                case 's':
                    this._messageEvents.publish(
                        Messages.OPEN_NOTES,
                        Action.OPEN
                    )
                    break
                case 'Escape':
                    console.log('closes the window')
                    break
            }
        })
    }
}
