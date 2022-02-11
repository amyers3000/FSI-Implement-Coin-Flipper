// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0

//acessing the dic for all elements we need
let game = document.querySelector('#game')
//creating an img element and appending to page
let penny = document.createElement('img')
penny.src = './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny-image')
game.append(penny)

//creating div with border for controls
let controls = document.createElement('div')
controls.setAttribute('class', controls)
game.append(controls)

//creating flip button
let flip = document.createElement('button')
flip.setAttribute('id', 'flip')
flip.textContent = 'Flip the Penny!'
controls.append(flip)

//creating a clear button
let clear = document.createElement('button')
clear.setAttribute('id','clear')
clear.textContent = 'Clear Scoreboard'
controls.append(clear)

//create message
let message = document.createElement('h3')
message.setAttribute('id', 'message')
message.textContent = 'Let\'s get rolling!'
game.append(message)

document.addEventListener('DOMContentLoaded', function () {
   
    let total = 0

    flip.addEventListener('click', function(){
        let flipHeads = Math.random() < 0.5

        if(flipHeads){
            penny.src = './assets/images/penny-heads.jpg'
            headFlips++
            message.textContent = 'You flipped heads!'
            total++
        } else {
            penny.src = './assets/images/penny-tails.jpg'
            tailFlips++
            message.textContent = 'You flipped tails!'
            total++
        }
        let hScore = document.querySelector('#heads')
        hScore.textContent = headFlips
        let tScore = document.querySelector('#tails')
        tScore.textContent= tailFlips

        let pHeads = `${Math.round(headFlips/total * 100)}%`
        let pTails = `${Math.round(tailFlips/total * 100)}%`
        
        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = pHeads
        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = pTails
    })

    clear.addEventListener('click', function(){
        message.textContent = 'Let\'s get rolling!'
        let hScore = document.querySelector('#heads')
        hScore.textContent = 0
        let tScore = document.querySelector('#tails')
        tScore.textContent= 0
        penny.src = './assets/images/penny-heads.jpg'

        total = 0
        headFlips = 0
        tailFlips = 0

        let pHeads = `${headFlips}%`
        let pTails = `${tailFlips}%`
        
        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = pHeads
        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = pTails
    })

    
    
    

})