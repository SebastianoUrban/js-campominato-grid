
//I take the elements of the DOM
const gridElem = document.getElementById('grid');
const playBtn = document.getElementById('play');

function createSquareElem (index) {
    const elem = document.createElement('div');
    elem.classList.add('square');
    elem.innerText = index+1;
    
    elem.addEventListener('click', function () {
        console.log(index+1);
        elem.classList.toggle('clicked');
        });
    
    return elem;
};



//function for fill the 10x10 grid with div.squere
function fillGrid(gridElem) {
    for (let i=0; i<100; i++) {
        squareElem = createSquareElem(i);
        gridElem.appendChild(squareElem);
    }
};

fillGrid(gridElem);