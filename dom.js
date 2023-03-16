const all = document.querySelector('#all')
all.style.fontFamily = 'sans-serif'
all.style.margin = '0 auto'
all.style.textAlign = 'center'
all.style.display = 'flex'
all.style.flexDirection = 'column'

const btn1 = document.querySelector('#btn1')
btn1.style.fontFamily = 'sans-serif'
btn1.style.width = '100px'
btn1.style.height = '40px'
btn1.style.borderRadius = '10px'
btn1.style.border = '0px'
btn1.style.margin = '0 auto'
btn1.style.background = 'orange'
btn1.style.color = '#fff'
btn1.style.boxShadow = '0 1rem 2rem hsl(0 0% 0% / 20%)'

const outiin = document.querySelector('#outiin')
outiin.style.fontFamily = 'sans-serif'
outiin.style.width = '100px'
outiin.style.height = '40px'
outiin.style.borderRadius = '10px'
outiin.style.border = '0px'
outiin.style.margin = '0 auto'
outiin.style.background = 'orange'
outiin.style.color = '#fff'
outiin.style.boxShadow = '0 1rem 2rem hsl(0 0% 0% / 20%)'

const remove = document.querySelector('#remove')
remove.style.fontFamily = 'sans-serif'
remove.style.width = '100px'
remove.style.height = '40px'
remove.style.borderRadius = '10px'
remove.style.border = '0px'
remove.style.margin = '0 auto'
remove.style.background = 'orange'
remove.style.color = '#fff'
remove.style.boxShadow = '0 1rem 2rem hsl(0 0% 0% / 20%)'


function botton1() {  
    document.getElementById("hasil").innerHTML = "<h3>Berhasil !!!</h3>";

    const btnclik = document.getElementById("btn1");
    btnclik.addEventListener("dblclick", function(){
        alert('tombol sudah di klik 2 kali')
    });
}

function inout() {
    document.getElementById("h2").style.color = "green"
}

function outin() {
    document.getElementById("h2").style.color = "red"
}

function del() {
    const body = document.getElementById("body");
    body.removeChild(body.firstElementChild);
  }

