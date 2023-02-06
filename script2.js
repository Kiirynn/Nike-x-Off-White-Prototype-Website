const shoes = document.querySelector('.shoes');
const shoe = document.querySelector('.shoe');
const shoeBigger = document.querySelector('.shoeBigger');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.forward-arrow');

let currentItem = 0;
let currentPage = 0;
let i = 0;

const sneakerImages = [
    {id:1,
    shoe: src='Content/shoe 1.png',
    subtitle: "Nike Air VaporMax" ,
    info: "This sneaker features a black colourway with a clean, transparent VaporMax Air-Sole unit, matching black laces written ‘Shoe Laces’ in white, and a white Swoosh logo accented by a red zip tie. It has an exposed-foam tongue with a black Nike logo and orange Swoosh. To complete the look, the medial side of the shoe displays Abloh's signature ‘Off-White’ for Nike lettering.",
    price: "$1524",
},
    {id:2,
    shoe: src='Content/snkrs-special-off-white-dunk-5-e1623680402966.png',
    subtitle: "Nike Dunk Low",
    info: "The Nike Dunk Low Off-White Lot 1 features a white canvas upper with white leather overlays and silver Swooshes. From there, yellow soles with white  placquets, white overlaces with green eyelets, and orange detailing complete the design.",
    price: "$1463",
},
    {id: 3,
    shoe: src='Content/shoe 2 flip.png',
    subtitle:"Nike Air Jordan IV" ,
    info: "Jordan Brand and Virgil Abloh teamed up once again to release the third silhouette in their collaborative history with the women's Jordan 4 Retro Off-White Sail (W), now available on StockX. After teasing the release of the Off-White 4 with samples in his MCA exhibit and presenting them in his Off-White FW2020 Women’s Show, Virgil Abloh finally delivered what might be the most anticipated release of 2020. The Air Jordan 4 Sail features full-grain leather uppers with hits of mesh and translucent materials on the toebox and heel of the shoe. From there, hits of light blue on the tongue’s Jumpman and the outsole’s Nike Swoosh provide contrast to the sail colored sneaker. These women's sneakers released in July of 2020 and retailed for $200 USD.",
    price: "$975",
},
    {id: 4,
    shoe: src='Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png',
    subtitle:"Nike Zoom Terra Kiger 5" ,
    info: "The women's Nike Zoom Terra Kiger 5 Off-White Black is the product of a 2019 collaboration between Nike and Virgil Abloh called. The designer took inspiration from top athletes to design a women's collection that features vibrant colors and Abloh's classic look. Abloh gave the public their first glimpse of the Nike Zoom Terra Kiger 5 Off-White Black during Paris Fashion Week and the Coachella music festival. Nike released these sneakers, with their slim silhouettes and spiky cleats, with runners and track stars in mind.", 
    price: "$2235",
},
    {id: 5,
    shoe: src='Content/blue nike ow sneaker.png',
    subtitle:"Nike Air Force 1 Low" ,
    info:"Virgil Abloh added yet another colorway to his coveted selection of Off-White Air Force 1 iterations that will forever preserve his Figures of Speech exhibit in sneaker history. Having the first pair exclusively gifted to Serena Williams in May of 2019, these Air Force 1 Low Off-White MCA University Blues were one of Virgil's many highly anticipated releases of 2019. Between dropping via stash bots and through a super exclusive raffle at Chicago’s Museum of Contemporary Art, the shoe’s namesake, this Air Force 1 Low Off-White MCA University Blue is one of Virgil’s rarest grails.",
    price: "$1735",
} 
    
];



const atbBtn = document.querySelector('#ATB')
const animate = document.querySelector('.animate');
const subtitle = document.getElementById('subtitle');
const info = document.getElementById('info');
const selectBtn = document.querySelector('#select');
const price = document.querySelector('.price');
const burger = document.querySelector('.c2');
const cartImg = document.querySelector('.img-cart')
const cartItemTitle = document.querySelector('.cart-item-title')
const itemPrice = document.querySelector('.item-price')

const navRowHTML = `<div class="cart-row">
               
<div class="cart-item cart-column">
     <img width="100px" src="Content/shoe 1.png" alt="" class="cart-img">
     <span class="cart-item-title">NIKE VAPOR MAX OW</span>
     <span class="item-price cart-column">$2154</span>
</div>
  


<div class="cart-quantity cart-column">
    <input type="number" class="quantity-input">
    <button class="removeBtn">REMOVE</button>

  </div>`



function showShoe(sneaker) {
    const item = sneakerImages[sneaker];
       shoe.src = item.shoe;
       subtitle.textContent = item.subtitle ;
       info.textContent = item.info;
       price.textContent = item.price;

    }


function navCartSlide(){
   
        const navCart = document.querySelector('.navCart');
        navCart.classList.toggle('navCart-active');
        
          
        // e.target.style.animate = `navFade .3s ease forwards `
  

}
        
     


atbBtn.addEventListener('click', () => {
    switch(sneakerImages){
       
        case id = 1: 
            cartImg.src = 'Content/shoe 1.png';
            break;
        
        case id = 2: 
            break;
        
        case id = 3: 
            break;
        
        case id = 4: 
            break;
        
        case id = 5: 
            break;

    }
        
       
})


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
    
   
  setTimeout(function (){
        shoe.classList.add('animate');
        subtitle.classList.add('animate');
        info.classList.add('animate');
        
        
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