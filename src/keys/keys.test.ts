import { KeyListener } from './keys'
import { Bus } from '../messages/bus'
import { ShellElement } from '../shellElement/shell-element'

describe('keys', () => {
    let spyPresentationController: jest.SpyInstance<
        void,
        [eventType: string | number, arg: string | ShellElement]
    >

    beforeEach(() => {
        const messageEvents = new Bus()

        new KeyListener(messageEvents)
        spyPresentationController = jest.spyOn(messageEvents, 'publish')
    })

    test('When the user presses the arrow right button then it calls the goToPage on the RouterController', () => {
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
        })
        document.dispatchEvent(event)

        expect(spyPresentationController).toHaveBeenCalled()
    })

    test('When the user presses the arrow left button then it calls the goToPage on the RouterController', () => {
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowLeft',
        })
        document.dispatchEvent(event)

        expect(spyPresentationController).toHaveBeenCalled()
    })

    test('When the user presses the arrow down button then it calls the goToPage on the RouterController', () => {
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
        })
        document.dispatchEvent(event)

        expect(spyPresentationController).not.toHaveBeenCalled()
    })
})
