

var navbar = document.getElementById('navbar')
var baras = document.getElementById('responsive-icon')
var nav_items =document.querySelectorAll('div.nav-items')


function abrir(){
    navbar.style.display ='flex'
    baras.style.display = 'none'
}
function fechar(){

    if(navbar.style.flexDirection === 'column'){
        navbar.style.display ='none'
        baras.style.display = 'block'
    }
}