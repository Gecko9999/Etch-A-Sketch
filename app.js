const container = document.querySelector('.container')




for (let i = 1; i <= 256; i++){
const divs = document.createElement('div') 
divs.style.cssText = 'background-color:orange; width:20px;height:20px;margin:2px;'
container.appendChild(divs)

}

divs.addEventListener('mouseover', () => {
    divs.style.cssText = 'background-color:black'
})