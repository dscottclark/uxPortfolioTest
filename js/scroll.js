
// $(document).ready(function() {
    
//     $(window).scroll(function() {
//         let screenPosition = window.scrollY;
//         if (screenPosition >= 920) {
//             $('.headerBG').addClass('scrolled')
//             console.log(screenPosition)
//         } if (screenPosition < 920) {
//             $('.headerBG').removeClass('scrolled')
//         }
//     });
// });

$(window).scroll(function(){
    $('#navBG').toggleClass('scrolled', $(this).scrollTop() >= 50);
    console.log('scrolled');
});