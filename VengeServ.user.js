// ==UserScript==
// @name         VengeServe
// @namespace    https://github.com/mwo/VengeServer/
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
                    bool = /invite/.test(url);
                arguments[0] = 'wss://venge.herokuapp.com?isMatchmaker=' + (bool + []);
                super(...arguments);
            }
        },
        configurable: !1
    })
})()
