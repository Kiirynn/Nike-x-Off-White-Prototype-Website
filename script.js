const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const sections = document.querySelectorAll(".page");
// const active = document.getElementById("active")
let currentItem = 0;
const appear = document.querySelector(".appear")




const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -100px 0px",
};

const appearOptions2 = {
    threshold: 1, 
    rootMargin: "0px 0px -100px 0px",
};





       
const appearOnScroll = new IntersectionObserver
(function(
    entries,appearOnScroll
){
    entries.forEach(entry => {
        entry.target.classList.toggle('appear', entry.isIntersecting)
    
           
    })
    
    
}, appearOptions);




faders.forEach(fader => {
    appearOnScroll.observe(fader);
    
   
});


// <img class="shoe" id="shoe4"  src="Content/snkrs-special-off-white-dunk-5-e1623680402966.png" alt="">
// <img class="shoe" id="shoe2"  src="Content/shoe 2 flip.png" alt="">
// <img class="shoe" id="shoe5"  src="Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png" alt="">
// <img class="shoe" id="shoe6"  src="Content/blue nike ow sneaker.png" alt=""> 









const shoes = document.querySelector('.shoes');
const shoe = document.querySelector('.shoe');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.forward-arrow');
const sneakerImages = ['Content/shoe 1.png','Content/snkrs-special-off-white-dunk-5-e1623680402966.png','Content/shoe 2 flip.png','Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png', 'Content/blue nike ow sneaker.png' ];
let i = 0;




// shoe.addEventListener('click', () => {
//       shoe.classList.toggle('active')
// })




prevArrow.addEventListener('click', (e) => {
    e.style.animation = `shoe transition: 750ms ease-in`;
    if(i <= 0)i = sneakerImages.length;
    
    i--;
    

    return setImg();
        
      
    
})

nextArrow.addEventListener('click', () => {
    
    if(i > sneakerImages.length -1);
    i++;
    return setImg();
        
        
         
    
})


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



