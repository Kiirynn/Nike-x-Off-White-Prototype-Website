const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");


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
const pages = [page1, page2, page3, page4];
const pageAll = document.querySelector('.page')


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

const circles = [circle1, circle2, circle3, circle4];
const sectionId = document.querySelector('.page').id;

const circlesContainer = document.getElementById('circBar');
const circle = document.querySelectorAll('.circle');

let mainContainer = document.querySelector('.main-container')
const virgil1 = document.querySelector('.virgil1')
const virgil2 = document.querySelector('.virgil2')
  


// function darkCirc(){

//     let current = document.getElementsByClassName('active-circ');
//     current[0].className = current[0].className.replace(' active-circ', ' ');
//     // color.target.classList.toggle('active-circ');
//     this.className += ' active-circ';
    
// }

// percent functions

function page1Percent(){
    page1.classList.add('pointer-active')
                
    page2.classList.remove('pointer-active')
    page3.classList.remove('pointer-active')
    page4.classList.remove('pointer-active')
    
    circle1.classList.add('active-circ')

    circle2.classList.remove('active-circ')
    circle3.classList.remove('active-circ')
    circle4.classList.remove('active-circ')
    
    virgil1.classList.remove('from-left')
    virgil2.classList.remove('from-right')
}

function page2Percent(){
    page2.classList.add('pointer-active')
                
    virgil1.classList.remove('off')
    virgil2.classList.remove('off2')

   
    virgil1.classList.add('from-left')
    virgil2.classList.add('from-right')
  
    
    
    page1.classList.remove('pointer-active')
    page3.classList.remove('pointer-active')
    page4.classList.remove('pointer-active')
   
    
    circle2.classList.add('active-circ')
    
    circle1.classList.remove('active-circ')
    circle3.classList.remove('active-circ')
    circle4.classList.remove('active-circ')
}

function page3Percent(){
    page3.classList.add('pointer-active')
                
    page1.classList.remove('pointer-active')
    page2.classList.remove('pointer-active')
    page4.classList.remove('pointer-active')
    
    circle3.classList.add('active-circ')
    
    circle1.classList.remove('active-circ')
    circle2.classList.remove('active-circ')
    circle4.classList.remove('active-circ')

    virgil1.classList.remove('from-left')
    virgil2.classList.remove('from-right')

    virgil1.classList.add('off')
    virgil2.classList.add('off2')
}

function page4Percent(){
    page4.classList.add('pointer-active')
                
    page1.classList.remove('pointer-active')
    page2.classList.remove('pointer-active')
    page3.classList.remove('pointer-active')
    
    circle4.classList.add('active-circ')

    circle1.classList.remove('active-circ')
    circle2.classList.remove('active-circ')
    circle3.classList.remove('active-circ')
}


// for(i = 0; i < circles.length; i++){
      
//     circles[i].addEventListener('click', darkCirc)

//     // circles[i].addEventListener('scroll', circAnime)
    
    
    
// }


// nav drop down menu

    document.querySelector(".proda").addEventListener("mouseover", ()=>{
        document.querySelector('.dropDown-content').classList.add('dropDown-content-active')
   })
   

setInterval(() => {
    document.querySelector('.dropDown-content').classList.remove('dropDown-content-active')

}, 3000);

// scroll if/else percentage 
   
    function scrollPage(){
        let winScroll = mainContainer.scrollTop
        let height1 = mainContainer.scrollHeight - document.documentElement.clientHeight
        let percent = (winScroll / height1) * 100
    
        navUl.style.background = `linear-gradient(to right, black , transparent ${percent}%)`;
        
        function circAnime(){
          
           // page 1
            if(percent <= 3.5){
                page1Percent();
         
            } 
            // page 2
             if(percent <= 30.3 && percent > 4 ){

                page2Percent()

            } 
          // page3
             if(percent <= 60.5 && percent > 34 ){
                
                page3Percent()
         
            }
        // page 4
            if(percent <= 90.7 && percent > 64){

                page4Percent()

            }
           
        }

            circAnime()

    }
   

// function navBarAnime(){
//     let current = document.getElementsByClassName('active-circ');
//         switch(currentPage){
            
        
//             case currentPage = 0 :
//                 currentPage = pages[0];
//                     navUl.style.background = `linear-gradient(to right, black , transparent 15%)`; 
//                     // current[0].className = current[0].className.replace(' active-circ');
//                     // this.className += ' active-circ';
//                     break;

//             case currentPage = 1:
               
//                 currentPage = pages[1];
//                     navUl.style.background = `linear-gradient(to right, black , transparent 80%)`;
//                     // current[2].className = current[2].className.replace(' active-circ');
//                     // this.className += ' active-circ';
//                     break;

           
//             case currentPage = 2:
               
//                     currentPage = pages[2];
//                             navUl.style.background = `linear-gradient(to right, black , transparent 55%)`;
//                             // current[2].className = current[2].className.replace(' active-circ');
//                             // this.className += ' active-circ';
//                             break;
        

            
//             case currentPage = 3:
               
//                 currentPage = pages[3];
//                     navUl.style.background = `linear-gradient(to right, black , transparent 30%)`;
//                     // current[1].className = current[1].className.replace(' active-circ');
//                     // this.className += ' active-circ';
//                     break;

//          }
     
//   }



const appearOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -250px 0px",
};




// Intersection Observer

       
const appearOnScroll = new IntersectionObserver
(function(
    entries,appearOnScroll
){
    entries.forEach(entry => {
        
       
         entry.target.classList.toggle('appear', entry.isIntersecting)
        
           
        
         })
        //  circAnime();
        //  navBarAnime();
         
     

       


      
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
const shoeBigger = document.querySelector('.shoeBigger');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.forward-arrow');

const sneakerImages = [
    {id:1,
    shoeBigger: src='Content/shoe 1.png',
    shoe: src='Content/shoe 1.png',
    subtitle: "Nike Air VaporMax" ,
    info: "This sneaker features a black colourway with a clean, transparent VaporMax Air-Sole unit, matching black laces written ‘Shoe Laces’ in white, and a white Swoosh logo accented by a red zip tie. It has an exposed-foam tongue with a black Nike logo and orange Swoosh. To complete the look, the medial side of the shoe displays Abloh's signature ‘Off-White’ for Nike lettering.",
    price: "$1524",
},
    {id:2,
    shoeBigger: src='Content/snkrs-special-off-white-dunk-5-e1623680402966.png',
    shoe: src='Content/snkrs-special-off-white-dunk-5-e1623680402966.png',
    subtitle: "Nike Dunk Low",
    info: "The Nike Dunk Low Off-White Lot 1 features a white canvas upper with white leather overlays and silver Swooshes. From there, yellow soles with white  placquets, white overlaces with green eyelets, and orange detailing complete the design.",
    price: "$1463",
},
    {id: 3,
    shoeBigger: src='Content/shoe 2 flip.png',
    shoe: src='Content/shoe 2 flip.png',
    subtitle:"Nike Air Jordan IV" ,
    info: "Jordan Brand and Virgil Abloh teamed up once again to release the third silhouette in their collaborative history with the women's Jordan 4 Retro Off-White Sail (W), now available on StockX. After teasing the release of the Off-White 4 with samples in his MCA exhibit and presenting them in his Off-White FW2020 Women’s Show, Virgil Abloh finally delivered what might be the most anticipated release of 2020. The Air Jordan 4 Sail features full-grain leather uppers with hits of mesh and translucent materials on the toebox and heel of the shoe. From there, hits of light blue on the tongue’s Jumpman and the outsole’s Nike Swoosh provide contrast to the sail colored sneaker. These women's sneakers released in July of 2020 and retailed for $200 USD.",
    price: "$975",
},
    {id: 4,
    shoeBigger: src='Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png',
    shoe: src='Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png',
    subtitle:"Nike Zoom Terra Kiger 5" ,
    info: "The women's Nike Zoom Terra Kiger 5 Off-White Black is the product of a 2019 collaboration between Nike and Virgil Abloh called. The designer took inspiration from top athletes to design a women's collection that features vibrant colors and Abloh's classic look. Abloh gave the public their first glimpse of the Nike Zoom Terra Kiger 5 Off-White Black during Paris Fashion Week and the Coachella music festival. Nike released these sneakers, with their slim silhouettes and spiky cleats, with runners and track stars in mind.", 
    price: "$2235",
},
    {id: 5,
    shoeBigger: src='Content/blue nike ow sneaker.png',
    shoe: src='Content/blue nike ow sneaker.png',
    subtitle:"Nike Air Force 1 Low" ,
    info:"Virgil Abloh added yet another colorway to his coveted selection of Off-White Air Force 1 iterations that will forever preserve his Figures of Speech exhibit in sneaker history. Having the first pair exclusively gifted to Serena Williams in May of 2019, these Air Force 1 Low Off-White MCA University Blues were one of Virgil's many highly anticipated releases of 2019. Between dropping via stash bots and through a super exclusive raffle at Chicago’s Museum of Contemporary Art, the shoe’s namesake, this Air Force 1 Low Off-White MCA University Blue is one of Virgil’s rarest grails.",
    price: "$1735",
} 
    
];
const animate = document.querySelector('.animate');



const backgroundImages = ['Content/jezael-melgoza-RXYmwmz-NiA-unsplash.jpg','Content/off white background 5.jpeg', 'Content/off white background 6.jpeg','Content/off white background 8.jpg', 'Content/off-white-china-strategy 2.jpeg' ];
const bkgdPhoto = document.querySelector('.bkgd-photo');
const bkgdContainer = document.querySelector('.bkgd-container');
const animateBkgd = document.querySelector('.animateBkgd');
const mPrevArrow = document.querySelector('.Mprev-arrow');
const mNextArrow = document.querySelector('.Mforward-arrow');
const mainOverlay = document.querySelector('.overlay');


const subtitle = document.querySelector('.subtitle');
const info = document.querySelector('.info');
const selectBtn = document.querySelector('#select');
const price = document.querySelector('.price');



function showShoe(sneaker) {
    const item = sneakerImages[sneaker];
       shoe.src = item.shoe;
       subtitle.textContent = item.subtitle ;
       info.textContent = item.info;
       

    }



function reFireAnime(animate){
    shoe.classList.remove('animate');
    subtitle.classList.remove('animate');
    info.classList.remove('animate');
    selectBtn.classList.remove('animate');
   
  setTimeout(function (){
        shoe.classList.add('animate');
        subtitle.classList.add('animate');
        info.classList.add('animate');
        selectBtn.classList.add('animate');
        
    }, 0);
}


prevArrow.addEventListener('click', () => {
    i--;
    if(i < 0){
     i = sneakerImages.length - 1;
    }
    
    reFireAnime();
    setImg();
    showShoe(i);
   
    });


   

nextArrow.addEventListener('click', () => {
    i++;
    if(i > sneakerImages.length - 1){
        i = 0;
    }
    
    reFireAnime();
    setImg();
    showShoe(i);
   
        
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


// Choosing Sneakers Page 





