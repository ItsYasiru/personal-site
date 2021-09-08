window.onscroll = function() {scrollFunction()};

const toTopButton = document.getElementById("toTopButton");

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
