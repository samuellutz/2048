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
}

class Cell {
    #cellEl
    #x
    #y
    constructor(cellEl, x, y){
        this.#cellEl = cellEl
        this.#x = x
        this.#y = y
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