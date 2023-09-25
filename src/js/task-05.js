

const input = document.querySelector('#name-input')
const username = document.querySelector('#name-output')

input.addEventListener('input', namePlace)
function namePlace (event){

    if (event.currentTarget.value!="") {
        return username.innerHTML = event.currentTarget.value  
    }else{
        return username.innerHTML = 'Anonymous'
    }
    


}
