
//I take the elements of the DOM
const gridElem = document.getElementById('grid');
const playBtn = document.getElementById('play');


// fanction for creation div.square with inside p
function createSquareElem (index) {

    const pElem = document.createElement('p');
    pElem.innerText = index+1;

    const divElem = document.createElement('div');
    divElem.classList.add('square');
    divElem.appendChild(pElem);
    
    divElem.addEventListener('click', function () {
        console.log(index+1);
        divElem.classList.toggle('clicked');
        });
    
    return divElem;
};



//function for fill the 10x10 grid with div.squere
function fillGrid(gridElem) {
    for (let i=0; i<100; i++) {
        squareElem = createSquareElem(i);
        gridElem.appendChild(squareElem);
    }
};

fillGrid(gridElem);