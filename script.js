const container = document.querySelector('.container')
const btn = document.querySelector('#btn')

const changeColor = (e) => {
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
e.target.style.background = randomColor;
}

const getBoxSize = () => {
  let boxSize = prompt("Please enter N for new box size NxN");
  container.textContent = "";
  if(boxSize>100){
    alert('Please enter a number less than 100!');
    return;
  }
  for(let i = 0; i<(boxSize*boxSize); i++){
    const div = document.createElement('div');
    div.setAttribute('class','blocks')
    div.setAttribute('style', 'aspect-ratio:1;border-style:solid;border-width:1px');
    container.setAttribute('style', `grid-template-columns: repeat(${boxSize},1fr);grid-template-rows: repeat(${boxSize},1fr)`)
    container.appendChild(div);
    }
    const divs = document.querySelectorAll('.blocks'); //obtains all block elements
  divs.forEach(div => {
  div.addEventListener('mouseover', changeColor)
})
}

btn.addEventListener('click',getBoxSize)

for(let i = 0; i<(16*16); i++){
const div = document.createElement('div');
div.setAttribute('class','blocks')
div.setAttribute('style', 'aspect-ratio:1;border-style:solid;border-width:1px');
container.setAttribute('style', `grid-template-columns: repeat(16,1fr);grid-template-rows: repeat(16,1fr)`)
container.appendChild(div);
}

const divs = document.querySelectorAll('.blocks'); //obtains all block elements
divs.forEach(div => {
  div.addEventListener('mouseover', changeColor)
})
