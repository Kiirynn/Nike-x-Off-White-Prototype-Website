const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// const active = document.getElementById("active")

const appear = document.querySelector(".appear")
const navUl = document.querySelector("nav ul")
const navLi = document.querySelector("nav li a")
const li1 = document.querySelector(".li1 a")
const li2 = document.querySelector(".li2 a")
const li3 = document.querySelector(".li3 a")
const li4 = document.querySelector(".li4 a")

const sliders = document.querySelectorAll('.slide-in');

// page1.style.visibility = "visible"
const faders = document.querySelectorAll('.fade-in');
const faders2 = document.querySelector('.fade-in .appear #page1');
let currentItem = 0;
let currentPage = 0;
let i = 0;
const pages = [page1, page2, page3];


//circles


const circle1 = document.querySelector('.g1');
const circle2 = document.querySelector('.g2');
const circle3 = document.querySelector('.g3');
const circle4 = document.querySelector('.g4');
const circle5 = document.querySelector('.g5');

const sections = document.querySelectorAll(".page");
// const section1 = document.querySelector('section1');
// const section2 = document.querySelector('section2');
// const section3 = document.querySelector('section3');

const circles = [circle1, circle2, circle3, circle4, circle5];
const sectionId = document.querySelector('.page').id;

const circlesContainer = document.getElementById('circBar');
const circle = circlesContainer.getElementsByClassName('circle');




function darkCirc(){

    let current = document.getElementsByClassName('active-circ');
    current[0].className = current[0].className.replace(' active-circ');
    // color.target.classList.toggle('active-circ');
    this.className += ' active-circ';
    
}


for(i = 0; i < circles.length; i++){
      
    circles[i].addEventListener('click', darkCirc);
    
}





function navBarAnime(){
    let current = document.getElementsByClassName('active-circ');
        switch(currentPage){
            
        
            case currentPage = 0 :
                currentPage = pages.length - 2 ;
                    navUl.style.background = `linear-gradient(to right, black , transparent 15%)`; 
                    // current[0].className = current[0].className.replace(' active-circ');
                    // this.className += ' active-circ';
                    break;

            
            case currentPage = 1:
                currentPage = pages.length;
                    navUl.style.background = `linear-gradient(to right, black , transparent 30%)`;
                    // current[1].className = current[1].className.replace(' active-circ');
                    // this.className += ' active-circ';
                    break;

            
            case currentPage = 2:
                currentPage = pages.length;
                    navUl.style.background = `linear-gradient(to right, black , transparent 55%)`;
                    // current[2].className = current[2].className.replace(' active-circ');
                    // this.className += ' active-circ';
                    break;
      
            
      
      }
     
  }





  



const appearOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -100px 0px",
};





// Intersection Observer

       
const appearOnScroll = new IntersectionObserver
(function(
    entries,appearOnScroll
){
    entries.forEach(entry => {
        
       
         entry.target.classList.toggle('appear', entry.isIntersecting)
           
         
         })
       
        navBarAnime();
        

       


      
}, appearOptions);


// fader forEach


   
    faders.forEach(fader => {
    
        appearOnScroll.observe(fader);
        
        
    });






sliders.forEach(slider => {
    
        appearOnScroll.observe(slider);
        
    
    })





   









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



const backgroundImages = ['Content/jezael-melgoza-RXYmwmz-NiA-unsplash.jpg','Content/off white background 5.jpeg', 'Content/off white background 6.jpeg','Content/off white background 8.jpg', 'Content/off-white-china-strategy 2.jpeg' ];
const bkgdPhoto = document.querySelector('.bkgd-photo');
const bkgdContainer = document.querySelector('.bkgd-container');
const animateBkgd = document.querySelector('.animateBkgd');
const mPrevArrow = document.querySelector('.Mprev-arrow');
const mNextArrow = document.querySelector('.Mforward-arrow');
const mainOverlay = document.querySelector('.overlay');




// shoe.addEventListener('click', () => {
//       shoe.classList.toggle('active')
// })

// shoe nav

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
    setImg();
        
    });


   

nextArrow.addEventListener('click', () => {
    i++;
    if(i > sneakerImages.length - 1){
        i = 0;
    }
    
    reFireAnime();
    setImg();
        
});


function setImg(){
    return shoe.setAttribute('src', sneakerImages[i]);
    
}




// bkgd screen photos

function reFireAnime2(animate){
    bkgdPhoto.classList.remove('animateBkgd');
   
        
  setTimeout(function (){
        bkgdPhoto.classList.add('animateBkgd');
       
        
    }, 0);
}


mPrevArrow.addEventListener('click', () => {
    
    i--;
    if(i < 0){
     i = backgroundImages.length -1;
    }
   
    reFireAnime2();
    setImg2();
    
    });




mNextArrow.addEventListener('click', () => {
    i++;
    if(i > backgroundImages.length - 1){
        i = 0;
    }
    
    reFireAnime2();
    setImg2();
   
});


function setImg2(){
    
    return bkgdPhoto.setAttribute('src', backgroundImages[i]);
    
}






