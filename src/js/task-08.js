const form = document.querySelector('.login-form')
form.addEventListener("submit", func)
const userData = {};

function func (event){
event.preventDefault();
const email=form.elements.email.value
const password=form.elements.password.value


if (email===''||password==='') {
    return alert('всі поля повинні бути заповнені')
    
}else{
    userData.email = email
    userData.password= password
    console.log(userData)
}
event.currentTarget.reset()

}


