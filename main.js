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
