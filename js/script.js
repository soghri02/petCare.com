// window load

window.addEventListener('load',function(){
    // preloader
    document.querySelector('.js-preloader').
    classList.add('fade-out');
    setTimeout(() =>{
        document.querySelector('.js-preloader').style.display="none";
    },600)
})


// nav
const navToggler=document.querySelector('.js-nav-toggler');
const nav=document.querySelector('.js-nav');
navToggler.addEventListener('click',function(){
    nav.classList.toggle('active');
    navToggler.classList.toggle('active')
})
// hide the nab by click outside of it
document.addEventListener('click',function(event){
    const isClickInSideNav=nav.contains(event.target);
    const isClickInsideNavToggler=navToggler.contains(event.target);
    if(!(isClickInSideNav || isClickInsideNavToggler) && nav.classList.contains('active')){
        nav.classList.toggle('active');
        navToggler.classList.toggle('active');

    }
})

// theme light dark

function themeLightDark(){
    const switcherBtn =document.querySelector('.js-switcher-btn');
    const icon=switcherBtn.querySelector('i');

    function changeIcon(){
        if(document.body.classList.contains('dark')){
            icon.classList.remove("fa-moon");
            icon.classList.add('fa-sun')
        }else{
            icon.classList.add("fa-moon");
            icon.classList.remove('fa-sun')
        }
    }
    switcherBtn.addEventListener('click',function(){
        changeIcon()
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme','dark')
        }else{
            localStorage.setItem('theme','light')
        }
    })
    // check for saved user preference , if any , in load of the website
    if(localStorage.getItem('theme') !== null){
        if(localStorage.getItem('theme')==='light'){
            document.body.classList.remove('dark')
        }else{
            document.body.classList.add('dark')
        }
    }
    
    changeIcon()
}
themeLightDark();
