const input = document.querySelector('#validation-input')
input.addEventListener('blur', validation)

console.log(Number(input.dataset.length))
console.dir(input)
function validation(event){
    // console.log(event.currentTarget.value.length)
if (event.currentTarget.value.length === Number(input.dataset.length)){

    input.classList.add('valid')
    input.classList.remove('invalid')


}else {
    input.classList.remove('valid')
    input.classList.add('invalid')
}
input.reset
}

