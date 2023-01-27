const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const amtOfGrids = 6

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.addEventListener('mouseenter' , () => {
                gridBox.style.backgroundColor = '#272343'
            })
            row.appendChild(gridBox)
    }
    wrapper.appendChild(row)
  }
  container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions would you like for your new grid?'))

    while (userSize > 100){
        userSize = Number(prompt('Less than 100 please'))
    }
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    createGrid(userSize) 
}) 


createGrid(amtOfGrids)








// let container = document.getElementById('container') 


// for(i = 0; i <16; i++) {
//     let div = document.createElement('div');
//         div.classList.add("cell");
//         container.appendChild(div);
// }



// let cells = document.querySelector('#container');
// let paintBrush = document.querySelector('.cell')

// cells.addEventListener('click', paintCell);
// function paintCell(){
//         paintBrush.style.backgroundColor = 'black';

//         }
