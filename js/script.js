
const gridElem = document.getElementById('grid');

for (let i=0; i<100; i++) {
    const elem = document.createElement('div');
    elem.classList.add('square');
    elem.innerText = i+1;
    gridElem.appendChild(elem);
}