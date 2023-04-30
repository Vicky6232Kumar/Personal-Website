
//Dynamic tittle Change

$(document).click(function (event) {
    let text = $(event.target).text();

    document.title = `${text} | Portfolio`
});

// Pre loader
const spinner = document.getElementById("preloader");
const afterLoader = document.getElementById("afterLoader")
window.addEventListener('load', function(){
    spinner.style.display = "none";
    afterLoader.style.display = "block";

})

// Navbar to hamberger

const navbarCategory = document.querySelector(".navbarCategory")
const Hamberger = document.getElementById("Hamberger")
const hamberger1 = document.querySelector("#hamberger-1")
const hamberger2 = document.querySelector("#hamberger-2")
const hamberger3 = document.querySelector("#hamberger-3")

Hamberger.addEventListener("click", myFunction);
function myFunction() {
    navbarCategory.classList.toggle("categoryShown")
    hamberger1.classList.toggle('Hamberger1')
    hamberger2.classList.toggle('Hamberger2')
    hamberger3.classList.toggle('Hamberger3')

}

//Sticky navbar

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.logo').addClass("logoScroll")
            $('.hamberger').addClass("hambergerScroll")
            $('.navbar').addClass("navbarScroll")
        }
        else {
            $('.logo').removeClass("logoScroll")
            $('.hamberger').removeClass("hambergerScroll")
            $('.navbar').removeClass("navbarScroll")
        }
    })
})

// Text Typing Effect

let i = 0;
let text = "Vicky.";
function typing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 400);

    }
}
typing();

//Skill width changing

const transition = Array.from(document.querySelectorAll('.widthTransition'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            transition[0].style.width = '91.6667%';
            transition[1].style.width = '66.66667%';
            transition[2].style.width = '75%';
            transition[3].style.width = '83.3333%';
            return;
        }
        transition[0].style.width = '0%';
        transition[1].style.width = '0%';
        transition[2].style.width = '0%';
        transition[3].style.width = '0%';
    });

});
observer.observe(transition[0]);
observer.observe(transition[1]);
observer.observe(transition[2]);
observer.observe(transition[3]);

// Disable of F5 key for reloading

document.onkeydown = disableF5
function disableF5(e) {
    if ((e.which || e.keyCode) == 116 || ((e.which || e.keyCode) == 82 && e.ctrlKey)) {

        e.preventDefault();
    }
};
$(document).on("keydown", disableF5);

