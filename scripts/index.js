const lable = document.getElementById("lable");

const lables = [
    "Check out my <a href='#fiverr'>fiverr!</a>",
    "My name is Yasiru and I like to code as a hobby."
];

var lableIndex = 0;

window.onload = function() {
    cycleLables();
};

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
