const cont = document.querySelector('#boxes')
const createBtn = document.querySelector('#controls button[data-create]')
const destroyBtn = document.querySelector('#controls button[data-destroy]')
const qty = document.querySelector('#controls input')
let size = 20

createBtn.addEventListener('click', funcCreate)
destroyBtn.addEventListener('click', funcDestroy)

function funcCreate(){
  const arr = []
  for (let i = 0; i < qty.value; i++) {
    size +=10
    const result = `<div style="height:${size}px; width:${size}px;background-color:${getRandomHexColor()}"></div>`
    arr.push(result)
  }
  size = 20
  qty.value = '0'
  return cont.innerHTML=arr.join('')

}

function funcDestroy(){
  cont.innerHTML=''
  qty.value = '0'

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

