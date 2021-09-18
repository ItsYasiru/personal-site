const lable = document.getElementById("lable");
const toTopButton = document.getElementById("to-top-btn");

const lables = [
    "Check out my <a href='#fiverr'>fiverr!</a>",
    "My name is Yasiru and I like to code as a hobby."
];

var lableIndex = 0;

window.onload = function() {
    cycleLables();
};

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function cycleLables() {
    lableIndex++
    if (lableIndex >= lables.length) {
        lableIndex = 0
    }
    lable.innerHTML = lables[lableIndex]
    setTimeout(cycleLables, 5 * 1000);
}

function openMenu() {
    var menu = document.getElementById("menu");
    menu.className = "nav-menu";
    menu.style.display = "inherit";
    menu.style.width = "250px";
    document.getElementById("menu-close-btn").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}