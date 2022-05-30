export default class Tile {
    #tileEl
    #x
    #y
    constructor(tileContainer, value = Math.random() > .5 ? 2 : 4) {
        this.#tileEl = document.createElement('div')
        this.#tileEl.classList.add('tile')
        tileContainer.append(this.#tileEl)
        this.value = value
    }

    set x(value) {
        this.#x = value
        this.#tileEl.style.setProperty("--x", value)
    }

    set y(value) {
        this.#y = value
        this.#tileEl.style.setProperty("--y", value)
    }
}