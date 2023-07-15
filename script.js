let menuItems = document.getElementById("menuitems")
menuItems.style.maxHeight = "0px";

function menutoggle() {
    
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}


// js for products details


let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}
// js for form



function registerForm() {
    let loginForm = document.getElementById("loginform");
    let indicator = document.getElementById("Indicator");
    let regForm = document.getElementById("regform");
    regForm.style.transform = "translateX(0)";
    loginForm.style.transform = "translateX(0)";
    indicator.style.transform = "translateX(115px)";
    loginForm.style.transition = "transform 0.3s ease-in-out";
    regForm.style.transition = "transform 0.3s ease-in-out";
}

function loginForms() {
    let loginForm = document.getElementById("loginform");
    let indicator = document.getElementById("Indicator");
    let regForm = document.getElementById("regform");
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0)";
  loginForm.style.transition = "transform 0.3s ease-in-out";
  regForm.style.transition = "transform 0.3s ease-in-out";
}

  
 