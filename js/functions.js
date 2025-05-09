if (window.innerWidth < 768) {
    document.querySelector(".navbar-fixed.black-main").style.display = "block"
    document.querySelector(".navbar-fixed").style.display = "none"
} else {
    document.querySelector(".navbar-fixed.black-main").style.display = "none"
    document.querySelector(".navbar-fixed").style.display = "block"
}