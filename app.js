const container = document.querySelector('.container')
const button = document.querySelector('button')
const newContainer = document.querySelector('.container2')
const button2 = document.querySelector('#rgb')
const button3 = document.querySelector('.reset')

for (let i = 1; i <= 256; i++){
    const div = document.createElement('div') 
    div.classList.add('diva')
    div.style.cssText = 'background-color:white;width:40px;height:40px'
    container.appendChild(div)
}

container.addEventListener('mouseover', function(e) {
const target = e.target
 if(target.matches('.diva')){
     target.style.backgroundColor = 'black'
 }
})


newContainer.addEventListener('mouseover', function(e) {
    const target = e.target
     if(target.matches('.diva')){
         target.style.backgroundColor = 'black'
        }
    })
    
button.addEventListener('click', () => {
    function getInput(){
    const userInput = prompt('How many squares per side do you want your Etch-a-sketch to be? (max 100)')
    if (prompt && parseInt(userInput) <= 100) {
        container.innerHTML = ""
        newContainer.innerHTML = ""
        const userNumber = parseInt(userInput)*parseInt(userInput)
        for (let i = 1; i <= userNumber; i++){
            const div = document.createElement('div')  
            div.classList.add('diva')
            div.style.cssText = 'background-color:white;'
            div.style.width = 640/parseInt(userInput)+"px"
            div.style.height = 640/parseInt(userInput)+"px"
            newContainer.appendChild(div)  
    }    
}  
else {
    getInput()
  }
}
getInput()
})

document.getElementById('#rgb').onclick = function() {
    newContainer.addEventListener('mouseover', function(e) {
        const target = e.target
         if(target.matches('.diva')){
         function getRandomRGB(){
           const x = Math.floor(Math.random()*256)
           const y = Math.floor(Math.random()*256)
           const z = Math.floor(Math.random()*256)
           const RGBColor = "rgb("+x+","+y+","+z+")";    
           return RGBColor
       }
          return  target.style.backgroundColor = getRandomRGB()
         }
        })
}

   

/*
newContainer.addEventListener('mouseover', function(e) {
    const target = e.target
     if(target.matches('.diva')){
     function getRandomRGB(){
       const x = Math.floor(Math.random()*256)
       const y = Math.floor(Math.random()*256)
       const z = Math.floor(Math.random()*256)
       const RGBColor = "rgb("+x+","+y+","+z+")";    
       return RGBColor
   }
        target.style.backgroundColor = getRandomRGB()
     }
    })

    */
