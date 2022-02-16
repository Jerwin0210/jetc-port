// ============TYPING ANIMATION ===============
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer", "Computer Tech"],
    typeSpeed: 100,
    BackSpeed: 100,
    loop: true
})

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active")
})
 $(document).ready(function () {
    $('body').on('click', 'a', function () {
    $('a.active').removeClass('active');
    $(this).addClass('active');
    });

})
