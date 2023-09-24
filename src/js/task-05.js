

const input = document.querySelector('#name-input')
const username = document.querySelector('#name-output')

input.addEventListener('input', namePlace)
function namePlace (event){

    
    return username.innerHTML = event.currentTarget.value


}
