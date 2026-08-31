//DOM
const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btapagar = document.querySelector('#btapagar')


//EVENTO

btligar.addEventListener('click',ligar)
btapagar.addEventListener('click',apagar)

//AÇÃO
function ligar(){
    lampada.src = 'imagem/acesa.png'
}
function apagar(){
    lampada.src = 'imagem/apagada.png'
}



