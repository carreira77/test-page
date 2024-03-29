function slide1() {
    document.getElementById('id').src = "imagens/casas/casa1.png";
    setTimeout("slide2()", 2000)
}

function slide2() {
    document.getElementById('id').src = "imagens/casas/casa2.png";
    setTimeout("slide3()", 2000)
}

function slide3() {
    document.getElementById('id').src = "imagens/casas/casa5.png";
    setTimeout("slide1()", 2000)
}