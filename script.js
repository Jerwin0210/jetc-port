// ============TYPING ANIMATION ===============
const texts = ['Web Developer', 'Web Designer', 'Computer Technician']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index)

    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200)

}())

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active")
})
document.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
}))
