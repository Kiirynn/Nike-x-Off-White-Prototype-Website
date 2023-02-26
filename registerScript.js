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
    let userPrompt = document.querySelector('.userPrompt');

    document.querySelector('#username').addEventListener('click', uPrompt)
    document.querySelector('#email').addEventListener('click', emailRmUPrompt)
    document.querySelector('#password').addEventListener('click', passPrompt)
    document.querySelector('#confirm').addEventListener('click', conPrompt)
    document.querySelector('.createAccountBtn').addEventListener('click', domainPrompt)

   

    
    
    
    // prompt functions


    // username prompt

    
    let buttonClicks = 0
    // const result = (buttonClicks % 2 == 0) ? "even" : "odd" ;
    
    function uPrompt(){

        let userPrompt = document.querySelector('.userPrompt');
        let innerUPrompt = document.querySelector('.uPrompt-inner')
        let promptBox = document.querySelector('.promptBox')

       buttonClicks++
       let userPromptHTML = `
        <div class="promptBox">
            <p class="uChar">Username Must Be Atleast 6 Characters</p>
            <p class="uSym">No Symbols</p>
            <p class="uFoul">No Foul Language</p>
        </div>`

        innerUPrompt.innerHTML = userPromptHTML

        //     if(buttonClicks % 2 == 0) {
        //         result =  true
        //     }
        //     else {
        //         result =  false
        //     }

        // if(result === false){
        //     innerUPrompt.innerHTML = userPromptHTML
        // } 
        // else if(result === true){
        //     document.querySelector('.promptBox').remove();
        // }

        // result ? document.querySelector('.promptBox').remove() :  innerUPrompt.innerHTML = userPromptHTML
    }


   

    



    //email prompt
    
    function emailRmUPrompt(){
       
    }


    // aria-hidden="true"
    // password prompt

    function passPrompt(){

        buttonClicks++
        const innerPPrompt = document.querySelector('.pPrompt-inner')
        let  passPromptHTML = 
    `<div class="promptBox">
       <p class="pChar">Password Must Be Atleast 8 Characters</p>
       <p class="pSym">Atleast 1 Symbols</p>
       <p class="pNum">Atleast One Number</p>
       <p class="pUpp">Atleast One Uppercase Letter</p>
       <p class="pLow">Atleast One Lowercase Letter</p>

    </div>`

        // if(buttonClicks % 2 == 0) {
        //     result =  true
        // }
        // else {
        //     result =  false
        // }

        // result ? document.querySelector('.promptBox').remove() : innerPPrompt.innerHTML = passPromptHTML;
       
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

        if(userNameInput.value.length = 6 ) {
            
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
               <p class="create" style="color:red">Make sure you have met all of the account security requirements</p>
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
     