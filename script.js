const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const amtOfGrids = 6

const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return { r, g, b}

}

// what is called when we create grid (i.e. how to create grid)
const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrids; i++){
        const { r, g, b } = createRandomRGB()
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.addEventListener('mouseenter' , () => {
                const bgColor = "rgb(" + r + "," + g + "," + b + ")";
                gridBox.style.backgroundColor = bgColor
            })
            row.appendChild(gridBox)
    }
    wrapper.appendChild(row)
  }
  container.appendChild(wrapper)
}
// button prompt

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions would you like for your new grid?'))

    while (userSize > 100){
        userSize = Number(prompt('Less than 100 please'))
    }
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    createGrid(userSize) 
}) 
// to create the grid
createGrid(amtOfGrids)
