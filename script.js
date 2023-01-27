
let container = document.getElementById('container') 


for(i = 0; i <16; i++) {
    let div = document.createElement('div');
        div.classList.add("cell");
        container.appendChild(div);
}

let cells = document.querySelector('#container');
cells.addEventListener('mouseover', paintCell);

function paintCell(){
    let paintBrush = document.querySelector('.cell')
        paintBrush.style.backgroundColor = 'black';
        
        }



