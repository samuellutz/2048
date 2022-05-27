const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2


export default class Grid{
    constructor(gridEl) {
        gridEl.style.setProperty("--grid-size", GRID_SIZE)
        gridEl.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridEl.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
    }
}