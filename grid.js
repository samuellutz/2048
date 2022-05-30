const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2


export default class Grid{
    #cells

    constructor(gridEl) {
        gridEl.style.setProperty("--grid-size", GRID_SIZE)
        gridEl.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridEl.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
        this.#cells = createCellEl(gridEl).map((cellEl, index) => {
            return new Cell(cellEl , index % GRID_SIZE, Math.floor(index / GRID_SIZE))
        })
    }

    get #emptycells() {
        return this.#cells.filter(cell => cell.tile == null)
    }

    randomEmptyCell() {
        const randomIndex = Math.floor(Math.random() *this.#emptycells.length)
        return this.#emptycells[randomIndex]
    }
}

class Cell {
    #cellEl
    #x
    #y
    #tile
    constructor(cellEl, x, y){
        this.#cellEl = cellEl
        this.#x = x
        this.#y = y
    }
    get tile(){
        return this.#tile
    }

    set tile(value){
        this.#tile = value
        if(value == null) return
        this.#tile.x = this.#x
        this.#tile.y = this.#y
    }
}

function createCellEl(gridEl) {
    const cells = []
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cells.push(cell)
        gridEl.append(cell)
    }
    return cells
}