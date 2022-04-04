// ==UserScript==
// @name         3Blue1Brown Overlay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Keep the canvas beautiful!
// @author       A Fellow Human
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/a-fellow-human/r-place-2022/raw/main/3blue1brown.user.js
// @downloadURL  https://github.com/a-fellow-human/r-place-2022/raw/main/3blue1brown.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://i.imgur.com/dceUFCh.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2001px;height: 2001px;";
            console.log(i);
            return i;
        })())

    }, false);

}