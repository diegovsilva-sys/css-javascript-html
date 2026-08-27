//DOM

const alvo = document.querySelector('#alvo')
const btyamal = document.querySelector('#bt1')
const btcr7 = document.querySelector('#bt2')
const btmessi = document.querySelector('#bt3')

//EVENTO

btyamal.addEventListener('click', yamal)
btcr7.addEventListener('click', cr7)
btmessi.addEventListener('click', messi)

//AÇÃO

function yamal(){
    alvo.src = 'img/yamal.jpg'
}
function cr7(){
    alvo.src = 'img/CR7.jpg'
}
function messi(){
    alvo.src = 'img/messi.jpg'
}


