const myFontSize = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

myFontSize.addEventListener('input', fontChage)
function fontChage(event){
    const size = event.currentTarget.value
    console.log(size)
    console.dir(text)
    text.style.fontSize = `${size}px`;
}