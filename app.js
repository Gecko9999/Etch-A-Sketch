const container = document.querySelector('.container')
const button = document.querySelector('button')
const newContainer = document.querySelector('.container2')



for (let i = 1; i <= 256; i++){
    const div = document.createElement('div') 
    div.style.cssText = 'background-color:black;width:20px;height:20px;'
    container.appendChild(div)

}


container.addEventListener('mouseover', function(e) {
const target = e.target

 if(target.matches('div')){
     target.style.backgroundColor = 'white'
 }
})

button.addEventListener('click', () => {
    const userInput = prompt('How many squares per side do you want your grid to be?')
    if (prompt) {
        container.remove()
        const userNumber = parseInt(userInput)*parseInt(userInput)
        for (let i = 1; i <= userNumber; i++){
            const div = document.createElement('div') 
            div.style.cssText = 'background-color:black;width:20px;height:20px;'
            newContainer.appendChild(div)  
    }    

}
})

newContainer.addEventListener('mouseover', function(e) {
    const target = e.target
    
     if(target.matches('div')){
         target.style.backgroundColor = 'white'
     }
    })