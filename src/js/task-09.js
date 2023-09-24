const changeBut = document.querySelector('.change-color')
const text = document.querySelector('.color')
const bg = document.querySelector('body')


changeBut.addEventListener('click', func)
function func(evt){
  const bgColor = getRandomHexColor()
  text.textContent = bgColor
  bg.style.backgroundColor = bgColor

}

console.dir(text)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
