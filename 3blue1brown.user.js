// ==UserScript==
// @name         3Blue1Brown Overlay
// @namespace    http://tampermonkey.net/
// @version      1.1
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
        const image = document.createElement("img");
        image.src = "https://i.imgur.com/GVowVH4.png";

        image.onload = () => {
             image.style = `position: absolute; left: 0; top: 0; width: ${image.width/3}px; height: ${image.height/3}px; image-rendering: pixelated; z-index: 1`;
        }

        // Overlay image
        const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
        const canvas = camera.querySelector("mona-lisa-canvas");
        canvas.shadowRoot.querySelector('.container').appendChild(image);
   });
}
