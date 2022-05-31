export default class Tile {
    #tileEl
    #x
    #y
    #value

    constructor(tileContainer, value = Math.random() > .5 ? 2 : 4) {
        this.#tileEl = document.createElement('div')
        this.#tileEl.classList.add('tile')
        tileContainer.append(this.#tileEl)
        this.value = value
    }

    set value(v){
        this.#value = v
        this.#tileEl.textContent = v
        const power = Math.log2(v)
        const backgroundLightness = 100 - power * 9
        this.#tileEl.style.setProperty('--background-lightness', `${backgroundLightness}%`)
        this.#tileEl.style.setProperty('--text-lightness', `${backgroundLightness <= 50 ? 90 : 10}%`)

    }

    set x(value) {
        this.#x = value
        this.#tileEl.style.setProperty("--x", value)
    }

    set y(value) {
        this.#y = value
        this.#tileEl.style.setProperty("--y", value)
    }

    remove() {
        this.#tileEl.remove()
      }
}