const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', () => 
{
    if(window.pageYOffset>=100)
    {
        toTop.classList.add('active')
    }
    else
    {
        toTop.classList.remove('active')
    }
})


const menu = document.querySelector('#menu')    
window.addEventListener('scroll', () => 
{
    if(window.pageYOffset>=70)
    {
        menu.classList.add('menu-scroll')
    }
    else
    {
        menu.classList.remove('menu-scroll')
    }
})
const search = document.querySelectorAll('.menu-icon>a>i')

search()
{
    alert('Searching...')
}








// var h = document.querySelector('.header')
// var btn = document.querySelector('button')
// var search = document.querySelectorAll('.menu-icon')
// console.log(h)
// console.log(btn)
// btn.onclick = function()
// {
//     h.remove()
// }
// const menu = document.querySelector('#menu')
// function test()
// {
//     menu.style.top = '0'
//         menu.style.position= 'fixed'
// }
// window.addEventListener('scroll', () =>
// {
//     if(window.pageYOffset>=100)
//     {        
//         test();
//     }
//     else{
//         removeEventListener('scroll', test)
//     }
// })

// var ip12 = document.querySelector('.iphone12')
// ip12.onmouseover = function()
// {
//     ip12.style.cursor = 'pointer'
// }
// ip12.onclick = function()
// {
//     window.location='https://www.facebook.com/'
// }