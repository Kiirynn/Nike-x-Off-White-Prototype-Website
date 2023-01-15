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



       
const appearOnScroll = new IntersectionObserver
(function(
    entries,appearOnScroll
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
           return;
        }
        
        else{
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target);
            
           }
           
    })
    
    
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
   
});


















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



