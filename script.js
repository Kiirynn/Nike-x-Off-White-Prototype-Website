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



const upperCaseLetters  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = [1,2,3,4,5,6,7,8,9,0]
const symbols = ['~', '`', '!', '@' ,'#', '$', '%', '^' ,'&', '*', '(', ')' ,'-', '_', '=', '{' ,'}', '[', ']', '|' ,';', ':', '?', '>' ,'<', '.', ',', '/' ]
const foulWords = ['fuck', 'shit', 'cunt', 'ass', 'bitch', 'fucker', 'cock', 'penis', 'vagina', 'nigger', 'nigga', 'pussy', 'cum', 'porn', 'blow', 'queer', 'fag', 'faggot','Fuck', 'Shit', 'Cunt', 'Ass', 'Bitch', 'Fucker', 'Cock', 'Penis', 'Vagina', 'Nigger', 'Nigga', 'Pussy', 'Cum', 'Porn', 'Blow', 'Queer', 'Fag', 'Faggot']
const emailDomains = ['@gmail.com', '@outlook.com', '@hotmail.com', '@yahoo.com', 'aol.com']



// if(document.readyState = 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else{
//     ready()
// }

    const userNameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const emailInput = document.querySelector('#email');
    const confirmInput = document.querySelector('#confirm');

    document.querySelector('#username').addEventListener('click', uPrompt)
    document.querySelector('#password').addEventListener('click', passPrompt)
    document.querySelector('#confirm').addEventListener('click', conPrompt)
    document.querySelector('.createAccountBtn').addEventListener('click', domainPrompt)

    
    
    
    // prompt functions


    // username prompt
    
    function uPrompt(){
       let userPromptHTML = `
        <div class="promptBox">
            <p class="uChar">Username Must Be Atleast 6 Characters</p>
            <p class="uSym">No Symbols</p>
            <p class="uFoul">No Foul Language</p>
        </div>`
      
        document.querySelector('.userPrompt').innerHTML = userPromptHTML;
 
    }

    // password prompt

    function passPrompt(){
       let  passPromptHTML = 
    `<div class="promptBox">
       <p class="pChar">Password Must Be Atleast 8 Characters</p>
       <p class="pSym">Atleast 1 Symbols</p>
       <p class="pNum">Atleast One Number</p>
       <p class="pUpp">Atleast One Uppercase Letter</p>
       <p class="pLow">Atleast One Lowercase Letter</p>

    </div>`
        
        document.querySelector('.passPrompt').innerHTML = passPromptHTML;
    }

    // confirm prompt

    function conPrompt(){
        let  confirmPromptHTML = 
        `<div class="promptBox">
           <p class="match">Passwords Match</p>
        </div>`

        document.querySelector('.confirmPrompt').innerHTML = confirmPromptHTML;
    }

    


    // Interval loops for all prompts

    //   username


      setInterval(() => {

        const value1 = userNameInput.value

        const uChar = document.querySelector('.uChar')
        const uSym = document.querySelector('.uSym')
        const uFoul = document.querySelector('.uFoul')

        if(userNameInput.value.length == 6 ) {
            
            uChar.style.color = "yellow"
        }

        if(userNameInput.value.length > 8 ){
            uChar.style.color = "green"
        }

        else if (userNameInput.value.length < 6){ 
            
            uChar.style.color = "red"
        }

       
        
        let ohMy = symbols.some(element => value1.includes(element))
        let foul = foulWords.some(element => value1.includes(element))

          if(ohMy){
            uSym.style.color = "red"
          }

          else{
            uSym.style.color = "green"
          }

          if(foul){
            uFoul.style.color = "red"
          }

          else {
            uFoul.style.color = "green"
          }
          


    //   password


     
  
        const pChar = document.querySelector('.pChar')
        const pSym = document.querySelector('.pSym')
        const pNum = document.querySelector('.pNum')
        const pUpp = document.querySelector('.pUpp')
        const pLow = document.querySelector('.pLow')

        const value2 = passwordInput.value

        if(passwordInput.value.length == 8 ) {
            
            pChar.style.color = "yellow"
        }

        if(passwordInput.value.length >= 10 ){
            pChar.style.color = "green"
        }

        else if (password.value.length < 6){ 
            
            pChar.style.color = "red"
        }

        

        let pSymCheck = symbols.some(element => value2.includes(element))
        let pNumCheck = numbers.some(element => value2.includes(element))
        let pUppCheck = upperCaseLetters.some(element => value2.includes(element))
        let pLowCheck = lowerCaseLetters.some(element => value2.includes(element))

       if(pSymCheck){
        pSym.style.color = "green"
       } else{
        pSym.style.color = "red"
       }
       
       if(pNumCheck){
        pNum.style.color = "green"
       } else{
        pNum.style.color = "red"
       }

       if(pUppCheck){
        pUpp.style.color = "green"
       } else{
        pUpp.style.color = "red"
       }

       if(pLowCheck){
        pLow.style.color = "green"
       } else{
        pLow.style.color = "red"
       }


    //    email 
        
    
        const value4 = emailInput.value
        let emailDomainCheck = emailDomains.some(element => value4.includes(element))

 
    //   confirm password 


            const value3 = confirmInput.value
            const pMatch = document.querySelector('.match')
            
            if(value3 == value2){
                pMatch.style.color = "green"
            } else{
                pMatch.style.color = "red"
            }

        }, 500);


        let  denyEmailHTML = 
        `<div class="promptBox">
           <p class="email">This is NOT a valid Email</p>
        </div>` 
     
    
    
    function domainPrompt(){

        const value4 = emailInput.value
        
        let emailDomainCheck = emailDomains.some(element => value4.includes(element))
        if(emailDomainCheck){
            
        } else {
            document.querySelector('.emailPromptDeny').innerHTML = denyEmailHTML;
        }
}

         
        
        // create account btn

               let  createPromptHTML = 
               `  <div class="createPrompt">
               
               <p class="create">Your Account Has Been Created !</p>
               <p class="create2">Thank You For Signing Up For An Official OFFWhite x Nike Account</p>
               <p class="create2">Please Feel Free To Contact Us For Any Questions Or Concerns</p>
               <input class="newsCheckbox" type="checkbox">
               <p class="create3">SUBSCRIBE To Newsletter</p>
               
            </div>`

               let denyHTML =  `<div class="createBox">
               <p class="create">Make sure you have met all of the account security requirements</p>
            </div>`



        document.querySelector('.createAccountBtn').addEventListener('click', createAccount)

        function createAccount(){
            
            const value1 = userNameInput.value
            const value2 = passwordInput.value
            const value3 = confirmInput.value
            const value4 = emailInput.value
            let ohMy = symbols.some(element => value1.includes(element))
            let foul = foulWords.some(element => value1.includes(element))
            let pSymCheck = symbols.some(element => value2.includes(element))
            let pNumCheck = numbers.some(element => value2.includes(element))
            let pUppCheck = upperCaseLetters.some(element => value2.includes(element))
            let pLowCheck = lowerCaseLetters.some(element => value2.includes(element))
            let emailDomainCheck = emailDomains.some(element => value4.includes(element))
           

           

            if(emailDomainCheck && value3 == value2 && ohMy == false && foul == false && pSymCheck == true && pNumCheck == true && pUppCheck == true && pLowCheck == true){
                document.querySelector('.createPromptDiv').innerHTML = createPromptHTML;
                const extra = document.querySelector('.extra')
                extra.remove();
               
            } else {
                document.querySelector('.denyPrompt').innerHTML = denyHTML;
            }
         
            
            
           
        }
     




function darkCirc(){

    let current = document.getElementsByClassName('active-circ');
    current[0].className = current[0].className.replace(' active-circ', ' ');
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
                currentPage = pages.length[i]   ;
                    navUl.style.background = `linear-gradient(to right, black , transparent 15%)`; 
                    // current[0].className = current[0].className.replace(' active-circ');
                    // this.className += ' active-circ';
                    break;

            case currentPage = 3:
                currentPage = pages.length[i] - 2;
                    navUl.style.background = `linear-gradient(to right, black , transparent 80%)`;
                    // current[2].className = current[2].className.replace(' active-circ');
                    // this.className += ' active-circ';
                    break;

           
            case currentPage = 2:
                    currentPage = pages.length[i] - 1 ;
                            navUl.style.background = `linear-gradient(to right, black , transparent 55%)`;
                            // current[2].className = current[2].className.replace(' active-circ');
                            // this.className += ' active-circ';
                            break;
        

            
            case currentPage = 1:
                currentPage = pages.length[i] - 1  ;
                    navUl.style.background = `linear-gradient(to right, black , transparent 30%)`;
                    // current[1].className = current[1].className.replace(' active-circ');
                    // this.className += ' active-circ';
                    break;

         }
     
  }





  



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


// shoe nav

// function reFireAnime3(){
//     shoeBigger.classList.remove('animate')

//     setTimeout(function (){
        
//         shoeBigger.classList.add('animate');
     
        
//     }, 0);
// }

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





