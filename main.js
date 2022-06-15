const body = document.getElementsByTagName('body')[0]
const main = document.getElementsByTagName('main')[0]
const input = document.getElementById('input')
const myName = document.getElementById('name')
const button = document.getElementById('button')
const pageBg = document.getElementById('pageBg')
const cardBg = document.getElementById('cardBg')

pageBg.addEventListener('click', function(){
    body.style.backgroundColor = randomColor()
})

cardBg.addEventListener('click', function(){
    main.style.backgroundColor = randomColor()
})

button.addEventListener('click', function(){
    myName.textContent = input.value
    input.value=""
})

function randomColor(){
    const r = (Math.floor(Math.random()*255))
    const g = (Math.floor(Math.random()*255))
    const b = (Math.floor(Math.random()*255))

    return `rgba(${r}, ${g}, ${b}, 1)`
}