// Change background color of Navbar


const navbar =document.querySelector('nav')
window.onscroll = ()=>{
    if (window.scrollY > 300){
        navbar.classList.add('scroll-nav')
    } else{
        navbar.classList.remove('scroll-nav')
    }
}


// toggle nav menu
const menu = document.querySelector('.menu')
const menuList = document.querySelectorAll('.items')


function menuOpen() {
    if (menu.style.display === "flex"){
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
    }
}

menuList.addEventListener('click', () =>{
    console.log("Item is clicked");
})



// document.onclick = ()=>{
//     console.log("menu is closed");
//     if (menu.style.display = 'flex'){
//         menu.style.display = 'none'
//     }
// }


