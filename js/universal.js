const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 84) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
    
};

$(document).ready(function(){
    console.log ("loaded")
        $("#header").load("universal/header.html");
        $("#social").load("universal/footer.html");
});


