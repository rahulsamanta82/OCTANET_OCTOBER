
//toggle Hidden navbar
var hiddenNavbar =document.querySelector('#hiddenNavbar');
var navbarToggler = document.querySelector('#navbarToggler');

navbarToggler.addEventListener('click', function(){
    hiddenNavbar.classList.toggle('hide-collapse');
    hiddenNavbar.classList.toggle('show-collapse');
})

// cart functionality
let cartParent = document.querySelector('#cartParent');
let hoverCart = document.querySelector('#hoverCart');
let cartDetails = document.querySelector('#cartDetails');
function toggleCartDetails(){
    console.log('cart details')
    cartDetails.classList.toggle('hide-cart-details');
    cartDetails.classList.toggle('show-cart-details');
    hoverCart.style.display='none';
    setTimeout(function(){
        hoverCart.style.display='block';
        cartDetails.classList.toggle('d-none');
    },300)
}
cartParent.addEventListener('click',function(){
    toggleCartDetails();
})

//delete cart item
var cartCross = document.getElementsByClassName('cart-item-cross');

function deleteCartItem(e)
{
    e.parentElement.style.display="none"
    // taking item price removing dollar sign and converting to number
    var itemPrice = e.nextElementSibling.nextElementSibling.lastElementChild.innerHTML;
    var arrayItem = itemPrice.split("");
    arrayItem.shift();
    arrayItem = arrayItem.join("");
    var numberItem = parseInt(arrayItem);
    console.log(`numberItem : ${numberItem}`);
// taking subtotal price removing dollar sign and converting to number
    var bill = document.getElementById('bill').innerHTML;
    var arrayBill=bill.split("");
    arrayBill.shift();
    arrayBill = arrayBill.join("");
    var numberBill = parseInt(arrayBill);
    console.log(`numberBill : ${numberBill}`);
    numberBill = numberBill - numberItem;
    console.log(numberBill);
    //CONVERTING BACK TO STRING AND ADDING DOLLAR SIGN

    bill = String(numberBill);
    arrayBill = bill.split("");
    arrayBill.unshift('$');
    bill = arrayBill.join("");
    console.log(bill)

    document.getElementById('bill').innerText = bill;

    // reducing item counter
    var itemCounter =document.querySelector('#itemCounter').innerText;
    itemCounterArray = itemCounter.split("");
    itemCounterArray[0]--;
    itemCounter = itemCounterArray.join("");
    document.querySelector('#itemCounter').innerText = itemCounter;
    console.log(itemCounterArray);
    //reducing cart circular shape counter value
    var shapeCounter = document.querySelector('#cartShapeCounter').innerHTML;
    numberShapeCounter = parseInt(shapeCounter);
    numberShapeCounter--;
    document.querySelector('#cartShapeCounter').innerHTML = numberShapeCounter;

}

//SHARE FUNCIONALITY
var share = document.querySelector("#share");
var shareDetails = document.querySelector('#shareDetails');
var shareList = document.querySelector('#shareList');
share.addEventListener('click',function(){
    shareDetails.classList.toggle('show-share-anime');
    shareDetails.classList.toggle('hide-share-anime');
    shareList.classList.toggle('show-share-link');
    shareList.classList.toggle('hide-share-link');
    

})

setTimeout(function(){
    shareDetails.style.opacity="1"
},1050)

//header scroll function 

var hTop = document.querySelector('#headerTop');
var hBottom = document.querySelector('#headerBottom');
window.addEventListener('scroll',function(){
    
    var distanceFromTop = window.scrollY;
    if(distanceFromTop>120)
    {
        hBottom.classList.add('hide-hBottom');
        
    }
    else 
    {
        hBottom.classList.remove('hide-hBottom');
    }
})
//show video on click
var videoBtn = document.querySelector('#videoBtn');
var embeddedVideo = document.querySelector('#embeddedVideoParent');
var video = document.querySelector('#video');
videoBtn.addEventListener('click',function(){
    embeddedVideo.classList.toggle('d-none');
    createIframe();
})
embeddedVideo.addEventListener('click',function(){
    embeddedVideo.classList.toggle('d-none');
    ifrm.src = '';
})


var ifrm = document.createElement("iframe");
function createIframe(){
            
    ifrm.setAttribute("src", "https://www.youtube.com/embed/w4MNhDiW5rU?si=v2msg6ciJh19xoRW");
    ifrm.style.width = "1060px";
    ifrm.style.height = "615px";
    ifrm.style.border = 'transparent';
    video.appendChild(ifrm);
    console.log('creating iframe');
}


// STORY - SECTION   - CUBE TRANSLATE ONSCROLL
var cube = document.querySelector('#cube');
var wave = document.querySelector('#wave');
var cube2 = document.querySelector('#cube2');

function isInViewPort(elem)
{
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


window.addEventListener('scroll',function(){
    //cube1 function
    if (isInViewPort(cube)) {
        console.log('In the viewport! cube');
        var scrolled = window.scrollY;
        setTimeout(function(){
            cube.style.transform = `translateY(${scrolled/6}px)`;
        },600)

    } 
    if (isInViewPort(cube2)) {
        console.log('In the viewport! cube2');
        var scrolled = window.scrollY;
        setTimeout(function(){
            cube2.style.transform = `translateY(${scrolled/12}px)`;
        },200)

    }
    // cube1 function end 
    //wave function
    if (isInViewPort(wave)) {
        console.log('In the viewport! wave');
        var scrolled = window.scrollY;
        setTimeout(function(){
            wave.style.transform = `translateY(${-scrolled/6}px)`;
        },600)

    } 
    //wave function end

});


//menu animation function
let menuOverlay = document.querySelector('#menuOverlay');
let specialMenu = document.querySelector('#specialMenu');

function menuAnimation(image)
{

    menuOverlay.classList.toggle('menuOverlayAnimation');
    setTimeout(()=>{
        specialMenu.style.backgroundImage = image;
    },300)
    setTimeout(()=>{
        menuOverlay.classList.toggle('menuOverlayAnimation');
    } , 800)
}

let mainDish = document.querySelector('#v-pills-main-tab');
mainDish.addEventListener('click',()=>{
    menuAnimation("url(./assets/img/bg/special-menu.jpg)")
})


let starter = document.querySelector('#v-pills-starter-tab');
starter.addEventListener('click', ()=>{
    menuAnimation("url(./assets/img/menu/starter.jpg)");
} );


let dessert = document.querySelector('#v-pills-desserts-tab');
dessert.addEventListener('click',()=>{
    menuAnimation("url(./assets/img/menu/dessert.jpg)")
})


let seaFood = document.querySelector('#v-pills-sea-tab');
seaFood.addEventListener('click',()=>{
    menuAnimation("url(./assets/img/menu/seafood.jpg)");
})

let drinks = document.querySelector('#v-pills-drink-tab');
drinks.addEventListener('click',()=>{
    menuAnimation("url(./assets/img/menu/drinks.jpg)")
})


// UPCOMING EVENTS SLIDER


$('.events-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    margin: 0,
    navText: [
        "<img src = './assets/img/icons/back-filled-arrow-left.svg' width='13px' />" ,
        "<img src = './assets/img/icons/back-filled-arrow-right.svg' width='13px' />"
    ],
    responsive:{
        0:{
            items:1,
            nav: false
        },
        700:{
            items:2,
            dots: false
        },
        1200:{
            items:2,
            dots: false 
        }
    }
})