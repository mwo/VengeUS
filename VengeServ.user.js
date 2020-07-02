// ==UserScript==
// @name         VengeServe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bruh
// @author       You
// @match        *://venge.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const gameServerURL = 'wss://krone_rgb.pit.red';

window.WebSocket = class extends WebSocket {
    constructor() {
        let url = arguments[0],
            bool = url.includes('server');
        if (bool) arguments[0] = gameServerURL;
        super(...arguments);
    }
}
