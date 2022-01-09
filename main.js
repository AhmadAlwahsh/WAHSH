let bur = document.getElementById("burger");
let navbar = document.getElementById("navbar");

bur.addEventListener("click" , function(){
    if(document.body.clientWidth <= 768) {
        if (navbar.classList.contains("vip") === false) {
            navbar.classList.add("vip");
        }else{
            navbar.classList.remove("vip");
        }
    }
})

let myText = `Hello There! , Welcome , I'm Ahmad Alwahsh :).`
let textBox = document.getElementById("text-box");
let i = 0;

setTimeout(function(){
    let typeWriter = setInterval(function(){
        document.getElementById("text").innerHTML += myText[i];
        i++;
        if (i > myText.length - 1) {
            clearInterval(typeWriter);
        }
    },0)
} , 0);

let header = document.getElementById("header");

window.onscroll = function(){
    if (window.scrollY >= 100) {
        header.style.backgroundColor = "rgba(0,0,0,0.3)";
        header.style.transition = "0.3s"
    }else{
        header.style.backgroundColor = "rgba(0,0,0,0)";
        header.style.transition = "0.3s"
    }
}

let body = document.querySelector(`body`)
let home = document.getElementById("landing");
let homeBtn = document.getElementById("home-btn");
let srv = document.getElementById("srv");
let srvBtn = document.getElementById("srv-btn");
let about = document.getElementById("about");
let aboutBtn = document.getElementById("about-btn");
let cont = document.getElementById("cont");
let contBtn = document.getElementById("contact-btn");

////////HOME/////////
setTimeout(homeSet , 200)
function homeSet() {
    home.style.left = "0";
    home.style.transition = "0.5s";
    body.style.overflow = "hidden";
    ///////////////
    srv.style.left = "-100%";
    about.style.left = "-100%";
    // port.style.left = "-100%";
    cont.style.left = "-200%";
}
homeBtn.addEventListener('click' , homeSet);
////////HOME/////////

///////SERVICES//////
srvBtn.addEventListener("click",function(){
    srv.style.left = "0";
    srv.style.transition = "0.5s";
    body.style.overflow = "auto";
    ////////////////////
    home.style.left = "-100%";
    about.style.left = "-100%";
    // port.style.left = "-100%";
    cont.style.left = "-200%";
})
///////SERVICES//////

///////ABOUT//////
aboutBtn.addEventListener("click",function(){
    about.style.left = "0";
    about.style.transition = "0.5s";
    body.style.overflow = "auto";
    ////////////////////
    home.style.left = "-100%";
    srv.style.left = "-100%";
    // port.style.left = "-100%";
    cont.style.left = "-200%";
});
///////ABOUT//////

//////CONTACT/////
contBtn.addEventListener("click",function(){
    cont.style.left = "0";
    cont.style.transition = "0.5s";
    body.style.overflow = "hidden";
    ////////////////////
    home.style.left = "-100%";
    srv.style.left = "-100%";
    // port.style.left = "-100%";
    about.style.left = "-100%";
});
//////CONTACT/////










