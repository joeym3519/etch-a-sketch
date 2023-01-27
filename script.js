const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const amtOfGrids = 6

const createGrid = (amtOfGrids) => {
  for (let i = 0; i < amtOfGrids; i++){
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < amtOfGrids; j++) {
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        // paint box as you move over it
        gridBox.addEventListener('mouseenter' , () => {
            gridBox.style.backgroundColor = 'black'
        })
        row.appendChild(gridBox)
    }
    container.appendChild(row)
  }
}

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
