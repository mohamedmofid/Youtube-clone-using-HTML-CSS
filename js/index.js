function menuButtonHandle() {
    let asideNav = document.querySelector(".content-area aside")
    if (asideNav.style.display=='none'){
        asideNav.style.display='block'
    }else {
        asideNav.style.display='none'
    }
    
    }

document.getElementById('menu').addEventListener("click",menuButtonHandle)
document.querySelectorAll('.nav-link').forEach(element => {
    element.addEventListener('click', function menuHandle(){

        let currentLink = document.getElementsByClassName('active-link')[0]
        if (currentLink){
            currentLink.className='nav-link'
            let icon=currentLink.querySelector("i")
            if (icon){
                icon.className='material-icons-outlined'
            }
        }
        element.className='nav-link active-link'
        let icon=element.querySelector("i")
            if (icon){
                icon.className='material-icons'
            }
    
    });
});