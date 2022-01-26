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