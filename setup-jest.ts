import { DOMWindow, JSDOM } from 'jsdom'

const jsdom = new JSDOM(
    '<!DOCTYPE html><html lang="en-gb"><body></body></html>',
    { url: 'https://localhost' }
)
const { window } = jsdom

function copyProps(src: DOMWindow, target: typeof globalThis) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    })
}

Object.assign(global, {
    document: window.document,
    HTMLElement: window.HTMLElement,
    customElements: window.customElements,
    navigator: {
        userAgent: 'node.js',
    },
    requestAnimationFrame: function (callback: () => void) {
        return setTimeout(callback, 0)
    },
    cancelAnimationFrame: function (
        id: string | number | NodeJS.Timeout | undefined
    ) {
        clearTimeout(id)
    },
    window,
})

// global.window = window
// global.document = window.document
// global.navigator = {
//     userAgent: 'node.js',
// }
// global.requestAnimationFrame = function (callback) {
//     return setTimeout(callback, 0)
// }
// global.cancelAnimationFrame = function (id) {
//     clearTimeout(id)
// }

copyProps(window, global)
