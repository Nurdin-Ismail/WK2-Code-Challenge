
    fetch('https://github.com/Nurdin-Ismail/WK2-Code-Challenge/blob/main/db.json')
    .then(res => res.json())
    .then((data) => {
     
      
        data.forEach( (element) => {
                handleChar(element)
            }

      )
        renderChar(data[0])

    })

let jsoncont =[]

function renderChar(char){
    document.querySelector('#animal-name').textContent = `Name: ${char.name}`
    
    let image = document.querySelector('#imeji')
    image.src = char.image
}
console.log(jsoncont)

function handleChar(element){
   
        
        
        const name = element.name
        const img = element.image
        let votes = element.votes

        const buttoni = document.createElement("button");
        
        document.querySelector('#buto').appendChild(buttoni);
        buttoni.textContent = name;

          buttoni.addEventListener('click', () =>{
            console.log(`hi I'm ${element.name}`)
            document.querySelector('#animal-name').textContent = `Name: ${name}`
            
            const imag = document.querySelector('#imeji')
            imag.src = img
            
            let numofvotes = document.querySelector("#number-of-votes")
 
let buttoniyavote = document.querySelector('#buttoni-vote')
         buttoniyavote.addEventListener('click', addvotes)


         function addvotes(){
            let currentvote = votes
            let update = currentvote + 1
            votes = update


    numofvotes.textContent = `Number of votes: ${update}`;




         }
           
        
          })


          
  


    
        
  

  
    

    
  } 
    



  
  








