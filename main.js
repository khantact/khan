let navbar = document.querySelector(".navbar");
let vh = Math.round(window.innerHeight / 100);
window.onscroll = () =>{
    navToOpaque();
}

function navToOpaque(){
    if (window.pageYOffset > vh*100){
        document.querySelector('.navbar').style.display= "none";
        $('.navbar').fadeIn("fast");
        document.querySelector('.navbar').style.background="rgb(4, 7, 17)";
    } else {
        navAppear()
        document.querySelector('.navbar').style.background = 'rgba(37, 50, 55, 0)';
    }
}
function navDis(){
    document.querySelector('.navbar').style.visibility = 'hidden';
}

function navAppear(){
    $('.navbar').fadeIn("fast");
    document.querySelector('.navbar').style.visibility = 'visible';
}
