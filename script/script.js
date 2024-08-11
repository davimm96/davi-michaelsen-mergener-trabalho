//Variáveis
let contatoMenu = document.getElementById("contatoMenu")
let portfolioMenu = document.getElementById("portfolioMenu")
let formacaoMenu = document.getElementById("formacaoMenu")
let sobreMimMenu = document.getElementById("sobreMimMenu")

let contato = document.getElementById("contato")
let portfolio = document.getElementById("portfolio")
let formacao = document.getElementById("formacao")
let sobreMim = document.getElementById("sobreMim")

let menu = document.querySelector("#menu")
let menuUl = document.querySelector("#menu ul")
let abreMenu = document.getElementById("btnMenuMobile")
let fechaMenu = document.getElementById("btnMenuMobileFechar")

  
function titullax() {
    alturaDoTitulo = window.scrollY
    //Fixa menu superior ao rolar a página para baixo 
      if (alturaDoTitulo >= 200) {
         document.querySelector('#menu').style.position = 'fixed'
      }else {
         document.querySelector('#menu').style.position = 'relative'
      }

      //Faz a parte de cima desaparecer, para não aparecer ao rolar para baixo
      if (alturaDoTitulo >= 550) {
      document.querySelector('.textoimg').style.display = 'none'
      }else {
         document.querySelector('.textoimg').style.display = 'block'
      }
}
   window.addEventListener('scroll', titullax)

//Efeito de auto-rolagem do menu
function rolaMenu(){
   window.scrollTo({
      top: 700,
      behavior: 'smooth'
   })
}

//Menu
contatoMenu.onclick = function () {
   contato.style.display = 'block'
   portfolio.style.display = 'none'
   formacao.style.display = 'none'
   sobreMim.style.display = 'none'
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
   menuUl.style.display = "none"
   menu.style.height = "6vh"
   rolaMenu()
}

portfolioMenu.onclick = function () {
   contato.style.display = 'none'
   portfolio.style.display = 'block'
   formacao.style.display = 'none'
   sobreMim.style.display = 'none'
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
   menuUl.style.display = "none"
   menu.style.height = "6vh"
   rolaMenu()
}

formacaoMenu.onclick = function () {
   contato.style.display = 'none'
   portfolio.style.display = 'none'
   formacao.style.display = 'block'
   sobreMim.style.display = 'none'
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
   menuUl.style.display = "none"
   menu.style.height = "6vh"
   rolaMenu()
}

sobreMimMenu.onclick = function () {
   contato.style.display = 'none'
   portfolio.style.display = 'none'
   formacao.style.display = 'none'
   sobreMim.style.display = 'block'
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
   menuUl.style.display = "none"
   menu.style.height = "6vh"
   rolaMenu()
}

//Menu mobile
document.getElementById("btnMenuMobile").onclick = function (){
   menuUl.style.display = "block"
   menu.style.height = "60vh"
   fechaMenu.style.display="block"
   abreMenu.style.display="none"
}

document.getElementById("btnMenuMobileFechar").onclick = function (){
   menuUl.style.display = "none"
   menu.style.height = "6vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
}