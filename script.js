const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const sections = document.querySelectorAll(".page");
// const active = document.getElementById("active")

const appear = document.querySelector(".appear")
const navUl = document.querySelector("nav ul")

// page1.style.visibility = "visible"
const faders = document.querySelectorAll('.fade-in');
const faders2 = document.querySelector('.fade-in .appear #page1');
let currentItem = 0;
let currentPage = 0;
const pages = [page1, page2, page3]


// navBar animation

// function navBarAnime(){
//     if(currentPage >= 0){
//         currentPage = pages.length;
        
//         navUl.style.background = `linear-gradient(to right, black , transparent 25%)`;
//         }
    
//     if(currentPage = pages.length - 1){
         
//         navUl.style.background = `linear-gradient(to right, black , transparent 50%)`;
//     }
//     // if(currentPage <= 2){
//     //     navUl.style.background = `linear-gradient(to right, black , transparent 75%)`;
//     // }
//   }

// navBarAnime()

function navBarAnime(){
    switch(currentPage){
        
        case currentPage = 0:
            currentPage = pages.length ;
                navUl.style.background = `linear-gradient(to right, black , transparent 15%)`; 
                    break;
        
        case currentPage = 1:
            currentPage = pages.length - 1;
                navUl.style.background = `linear-gradient(to right, black , transparent 30%)`;
                    break;

        // case currentPage = 2:
        //         currentPage = pages.length - 2;
        //             navUl.style.background = `linear-gradient(to right, black , transparent 55%)`;
        //                 break;    
    }
  
  }





const appearOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -100px 0px",
};

const appearOptions2 = {
    threshold: 1, 
    rootMargin: "0px 0px -100px 0px",
};



// Intersection Observer

       
const appearOnScroll = new IntersectionObserver
(function(
    entries,appearOnScroll
){
    entries.forEach(entry => {
        
        entry.target.classList.toggle('appear', entry.isIntersecting)
        navBarAnime()
           
    })
   
    
}, appearOptions);


// fader forEach

faders.forEach(fader => {
   
    appearOnScroll.observe(fader);
    
   
});






// <img class="shoe" id="shoe4"  src="Content/snkrs-special-off-white-dunk-5-e1623680402966.png" alt="">
// <img class="shoe" id="shoe2"  src="Content/shoe 2 flip.png" alt="">
// <img class="shoe" id="shoe5"  src="Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png" alt="">
// <img class="shoe" id="shoe6"  src="Content/blue nike ow sneaker.png" alt=""> 





// shoes



const shoes = document.querySelector('.shoes');
const shoe = document.querySelector('.shoe');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.forward-arrow');
const sneakerImages = ['Content/shoe 1.png','Content/snkrs-special-off-white-dunk-5-e1623680402966.png','Content/shoe 2 flip.png','Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png', 'Content/blue nike ow sneaker.png' ];
const animate = document.querySelector('.animate');
let i = 0;




// shoe.addEventListener('click', () => {
//       shoe.classList.toggle('active')
// })



function reFireAnime(animate){
    shoe.classList.remove('animate');
   
  setTimeout(function (){
        shoe.classList.add('animate');
        
    }, 0);
}


prevArrow.addEventListener('click', () => {
    i--;
    if(i < 0){
     i = sneakerImages.length -1;
    }
    
    reFireAnime();
    return setImg();
        
    });




nextArrow.addEventListener('click', () => {
    i++;
    if(i > sneakerImages.length - 1){
        i = 0;
    }
    
    reFireAnime();
    return setImg();
        
});


function setImg(){
    return shoe.setAttribute('src', sneakerImages[i]);
    
}














// function pagesDisappear() {
//     if(!isIntersecting){
//         sections.style.visibility = "none";
//     }
//    }
// pagesDisappear();


// function disappearScrollTop(){
      
//     if(isIntersecting){
//         sections.style.visibility = "hidden";
        
//     }
//     else {
        
//     }
// }



