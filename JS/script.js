// Daremos la interacción del menú hamburguesa

const showNav = (idHamburguer, idContainer, idhero) => {
    const hamburguer = document.getElementById(idHamburguer),
        container = document.getElementById(idContainer),
        hero = document.getElementById(idhero)
    
    if (idHamburguer, idContainer, idhero) {
        hamburguer.addEventListener('click', () => {
            hamburguer.classList.toggle('container-main-hamburguer--new')
            container.classList.toggle('main-header__content--new')
            hero.classList.toggle('main-hero--new')
        })
    }
}

showNav('main-hamburguer', 'main-header__content', 'main-hero');

// Script para la validación de formulario

const form = document.getElementById('main-form');
const email = document.getElementById('input-email');
const formControl = document.getElementById('form-control')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkEmail();
})


function checkEmail(){
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setError(email, 'Not a valid email');
    }else{
        setSucces(email);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = document.getElementById('small');
    formControl.className = 'form-control error';
    small.innerText=message;
}

function setSucces(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
    input.value='';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
