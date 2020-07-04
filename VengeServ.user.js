// ==UserScript==
// @name         VengeServe
// @namespace    http://mwo.github.io/
// @version      0.1
// @description  bruh
// @author       You
// @match        *://venge.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    Object.freeze(Object);
    Object.defineProperty(globalThis, 'WebSocket', {
        value: class extends WebSocket {
            constructor() {
                let url = arguments[0],
                    bool = url.includes('server');
                if (bool) arguments[0] = 'wss://krone_rgb.pit.red';
                super(...arguments);
             }
        },
        configurable: false
    })
})()
