

if(document.readyState = 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

let i = 0;
const shoes = document.querySelector('.shoes');
const shoe = document.getElementsByClassName('shoe');
const shoeBigger = document.querySelector('.shoeBigger');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.forward-arrow');
const purchaseBtn = document.querySelector('.purchasebtn')
// const purchaseBtnATB = document.querySelector('.purchasebtn')

// const bagBtn = document.querySelector('.bagBtn')
const removeAllBtn = document.querySelector('.removebtn')
const atbBtn = document.querySelectorAll('.ATB');
const animate = document.querySelector('.animate');
const subtitle = document.getElementsByClassName('subtitle');
const info = document.getElementsByClassName('info');
const selectBtn = document.querySelector('#select');
const price = document.getElementsByClassName('price'); //shop price
const burger = document.querySelector('.c2');



const cartImg = document.querySelector('.img-cart');
const cartItemTitle = document.querySelector('.cart-item-title');
const navCart = document.querySelector('.navCart');

const w1 = document.querySelector('.w1');
const w2 = document.querySelector('.w2');
const w3 = document.querySelector('.w3');
const w4 = document.querySelector('.w4');
const w5 = document.querySelector('.w5');

const ws = [w1, w2, w3, w4, w5];


let currentItem = 0;
let currentPage = 0;




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



function ready(){
    const removeBtns = document.getElementsByClassName('removeBtn');
    for(let i = 0; i < removeBtns.length; i++ ){
        let button1 = removeBtns[i];
        button1.addEventListener('click', removeCartItem)
        
       
    }

    removeAllBtn.addEventListener('click', removeAllCart)


updateCartTotal();

    let quantityInputs = document.getElementsByClassName('quantity-input');
        for(let i = 0; i < quantityInputs.length; i++){
            let input = quantityInputs[i];
            input.addEventListener('change', quantityChanged)
        }


        let cartItemContainer = document.getElementsByClassName('cart-items2')[0];    
        let navCartRows = cartItemContainer.getElementsByClassName('cart-row');  
        let navCartRow = navCartRows[i];

    
    purchaseBtn.addEventListener('click', purchaseClicked)
    // purchaseBtnATB.addEventListener('click', purchaseClicked)

    function purchaseClicked(){
        let cartItemContainer = document.getElementsByClassName('cart-items2')[0];
        let navCartRows = cartItemContainer.getElementsByClassName('cart-row');
        let total = 0;
          
        
       for(let i = 0; i < navCartRows.length; i++){
            let navCartRow = navCartRows[i];
            const itemPrice = document.getElementsByClassName('item-price')[0];
            const rowQuantity = document.getElementsByClassName('quantity-input')[i];
           
            let totalPrice = parseFloat(itemPrice.innerText.replace('$', ''));
            let quantity = rowQuantity.value;
            total = total + (totalPrice * quantity);
       }
    
       document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
       
       // tax calc

     

       let salesTax = 0.15;
       let prePrice =  total * (salesTax / 1)  ;
       let add = prePrice + total;
       const gTotalTitle = document.querySelector('.GtotalTitle')
       const grandTotal = document.querySelector('.grand-total')
       const grandInput = document.querySelector('.grand-input');
    //    grandInput.innerHTML = '$' + add;

       const grandTotalHTML = 
       
       `<strong class="Gtotal-title">GRAND TOTAL</strong>
       <span class="grand-input">${'$' + add}</span>`
       
       const pMessage = document.querySelector('.purchase-message')
       const thankYouMsg = `<h1>Thank you for your purchase !</h1>`
       grandTotal.innerHTML = grandTotalHTML;
       
       setTimeout(() => {
        
        pMessage.innerHTML = thankYouMsg;
       }, 200);
       
    }  





   
   


}



// localStorage.setItem(cartItems, cartHTML)









function navCartSlideAtb(){
   
    const navCart = document.querySelector('.navCart');
    navCart.classList.add('navCart-active');
    
      
    // e.target.style.animate = `navFade .3s ease forwards `


}



// bagBtn.addEventListener('click', bagAdded)
// bagBtn.addEventListener('click', bagPageClicked)




function bagPageClicked(){
    let cartTitle = subtitle[i].innerText
    let cartPrice = price[i].innerText
    let imgSrc = shoe[i].src;

    bagAdded(imgSrc, cartTitle, cartPrice)
}


    
    

    function seeBag(){
        window.location.href="ATB.html"
        
    }
    






function bagAdded(imgSrc, cartTitle, cartPrice){
   
    const bagRow = document.createElement('div')
    bagRow.classList.add('bag-row')


const bagRowHTML =  
    
    `<div class="shoe-info1">
        <div class="order-number">Order Number <span class="order">#0923-05354-05643-0583</span></div>
            <div class="delivery-date">Delivery Date <span class="date">December 28th, 2023</span></div>
                 <img id="cart-shoe" src="${imgSrc}" alt="">
                    <div class="psbtn">
                        <h5>Product Support</h5>
        </div>

            </div>

            <div class="shoe-info2">
                    <h2 id="subtitlebag">${cartTitle}</h2>
                        <p id="infobag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit veritatis similique aperiam pariatur dolorum neque, cumque quaerat ut animi eligendi voluptatum, voluptatem dolores architecto rerum.</p>
                        <p id="bagPrice">${cartPrice}</p>
            </div>`

    bagRow.innerHTML = cart;
    orderDiv.append(bagRow);

} 




atbBtn.forEach((event) => {
    event.addEventListener('click', addToCartClicked)
    event.addEventListener('click', navCartSlideAtb)

})

function addToCartClicked(event){


    let button2 = event.target;
    let shopItem = button2.parentElement.parentElement
    let cartTitle = subtitle[i].innerText
    let cartPrice = price[i].innerText
    let imgSrc = shoe[i].src;
    
    
    
    addToBag(cartTitle, cartPrice, imgSrc)
    updateCartTotal();
}


function addToBag(cartTitle, cartPrice, imgSrc ){
    let cartRow1 = document.createElement('div')
    cartRow1.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items2')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for(let i = 0; i < cartItemNames.length; i++){    
            if(cartItemNames[i].innerText == cartTitle){
                alert('this Item is already in your bag !')
                return
            }
       
    }
   
    const navRowHTML = 
               
           `<div class="cart-item cart-column">
                <img width="100px" src="${imgSrc}" alt="" class="cart-img">
                <span class="cart-item-title">${cartTitle}</span>
                <span class="item-price cart-column">${cartPrice}</span>
            </div>
            


            <div class="cart-quantity cart-column">
                <input type="number" value="1" class="quantity-input">
                <button class="removeBtn">REMOVE</button>

            </div>`;
            cartRow1.innerHTML = navRowHTML;
            cartItems.append(cartRow1);
                
            
            const removeBtns = document.getElementsByClassName('removeBtn');
                for(let i = 0; i < removeBtns.length; i++ ){
                    let button1 = removeBtns[i];
                    button1.addEventListener('click', removeCartItem)}

            let quantityInputs = document.getElementsByClassName('quantity-input');
                    for(let i = 0; i < quantityInputs.length; i++){
                        let input = quantityInputs[i];
                        input.addEventListener('change', quantityChanged)
                    }


        //    cartRow1.getElementsByClassName('quantity-input')[i].addEventListener('change', quantityChanged)  
           
                  
                                
}


function removeAllCart(){
   
    let cartItems2 = document.querySelector('.cart-items2');
    cartItems2.remove()
    localStorage.clear("key1")
    localStorage.clear("key2")
}



function removeCartItem(e){
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    localStorage.clear("key1")
    localStorage.clear("key2")
    updateCartTotal();
}

function quantityChanged(e) {
    let input = e.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
       
    }
   
    updateCartTotal();

  

}



function showShoe(sneaker) {
    const item = sneakerImages[sneaker];
       shoe.src = item.shoe;
       subtitle.textContent = item.subtitle;
       info.textContent = item.info;
       price.textContent = item.price;

    }


function navCartSlide(){
   
        const navCart = document.querySelector('.navCart');
        navCart.classList.toggle('navCart-active');
        
          
        // e.target.style.animate = `navFade .3s ease forwards `
  

}





function updateCartTotal(){
   
        let cartItemContainer = document.getElementsByClassName('cart-items2')[0];
        let navCartRows = cartItemContainer.getElementsByClassName('cart-row');
        let total = 0;
          
        
       for(let i = 0; i < navCartRows.length; i++){
            let navCartRow = navCartRows[i];
            const itemPrice = document.getElementsByClassName('item-price')[0];
            const rowQuantity = document.getElementsByClassName('quantity-input')[i];
           
            totalPrice = parseFloat(itemPrice.innerText.replace('$', ''));
            let quantity = rowQuantity.value;
            total = total + (totalPrice * quantity);
       }
    
       document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
  

}




// shoe nav

// function reFireAnime3(){
//     shoeBigger.classList.remove('animate')

//     setTimeout(function (){
        
//         shoeBigger.classList.add('animate');
     
        
//     }, 0);
// }





const shopItemAlt = document.querySelectorAll('.g');



function shopItemActive(){
   let currentShopItemActive = document.getElementsByClassName('shop-item-active');
   let currentShopItem = document.getElementsByClassName('shop-item');


  
   ws.forEach(()=>{
    
    currentShopItemActive[0].className = currentShopItemActive[0].className.replace('shop-item-active', 'shop-item');
    this.className += ' shop-item-active';
    shopItemAlt[i].classList.toggle('shop-item-active');
    
    ws[i].classList.remove('animate');

    setTimeout(() => {
        ws[i].classList.add('animate');
    }, 0);

    })
   
   ws[i].classList.remove('shop-item')

}

// const preShoeRight = document.querySelector('.preShoeRight')
// const preShoeLeft = document.querySelector('.preShoeLeft')
// const innerRight = document.querySelector('.innerRight')
// const innerLeft = document.querySelector('.innerLeft')
// const preShoePhoto = document.getElementsByClassName('preShoePhoto');

// const photoSrc = [{preShoePhoto: src='Content/shoe 1.png'}, {preShoePhoto: src='Content/snkrs-special-off-white-dunk-5-e1623680402966.png'}, {preShoePhoto: src='Content/shoe 2 flip.png'}, {preShoePhoto: src='Content/Vigil-Nike-Inline02-GQ-07022019_3x2 trans.png'}, {preShoePhoto: src='Content/blue nike ow sneaker.png'}]

// function bkgdShoes(){
    
//         let imgSrc1 = photoSrc.length[i] - 1;
//         const preShoeHTMLLeft = `<img width="400px" class="preShoePhoto" src="${imgSrc1}" alt="">`
//         innerLeft.innerHTML = preShoeHTMLLeft;
//         preShoeLeft.append(innerLeft);
  

   
//         let imgSrc2 = photoSrc.length[i] - 3;
//         const preShoeHTMLRight = `<img width="400px" class="preShoePhoto" src="${imgSrc2}" alt="">`
//         innerRight.innerHTML = preShoeHTMLRight;
//         preShoeRight.append(innerRight);
        
// }




// function reFireAnime(animate){
//     shoe.classList.remove('animate');
//     subtitle.classList.remove('animate');
//     info.classList.remove('animate');
    
   
//   setTimeout(function (){
//         shoe.classList.add('animate');
//         subtitle.classList.add('animate');
//         info.classList.add('animate');
        
        
//     }, 0);
// }



prevArrow.addEventListener('click', () => {
    i--;
    if(i < 0){
     i = ws.length - 1;
    }
    
    // reFireAnime();
    // setImg();
    // showShoe(i);
    
    shopItemActive();
    // bkgdShoes()
   
    });


   

nextArrow.addEventListener('click', () => {
    i++;
    if(i > shopItemAlt.length - 1){
        i = 0;
    }
    
    // reFireAnime();
    // setImg();
    // showShoe(i);
     shopItemActive();
    // bkgdShoes()
  
    
});


function setImg(){
    return shoe.setAttribute('src', sneakerImages[i]);
}

