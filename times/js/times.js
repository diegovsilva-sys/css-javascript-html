//DOM

const bttimes = document.querySelector('#times')
const btbahia = document.querySelector('#btbahia')
const btvitoria = document.querySelector('#btvitoria')
const btrealmadrid = document.querySelector('#btrealmadrid')
const btroma = document.querySelector('#btroma')
const btarsenal = document.querySelector('#btarsenal')

//EVENTO
btbahia.addEventListener('click', bahia)
btvitoria.addEventListener('click', vitoria)
btrealmadrid.addEventListener('click', realmadrid)
btroma.addEventListener('click', roma)
btarsenal.addEventListener('click', arsenal)

//AÇÃO
function bahia(){
    times.src = 'imagens/Esporte_Clube_Bahia_logo.svg.webp'
}
function vitoria(){
    times.src = 'imagens/vitoria_logo-removebg-preview.png'
}
function realmadrid(){
    times.src = 'imagens/Real_Madrid.png'
}
function roma(){
    times.src = 'imagens/roma.png'
}
function arsenal(){
    times.src = 'imagens/Arsenal_FC.svg.webp'
}