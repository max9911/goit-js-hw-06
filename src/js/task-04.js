let counterValue = 0
const value = document.querySelector("#value")
const minus = document.querySelector('button[data-action="decrement"]')
const plus = document.querySelector('button[data-action="increment"]')




plus.addEventListener('click',()=>{
    counterValue += 1
    value.textContent = counterValue

})
    


minus.addEventListener('click',()=>{
    counterValue -= 1
    value.textContent = counterValue
    })

