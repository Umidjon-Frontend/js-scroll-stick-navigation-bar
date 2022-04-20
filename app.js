window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
const menu = document.querySelector(".logo-brand span");
const nav = document.querySelector(".header-inner .nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    changeClass(document.querySelector(".logo-brand .icon"))
});
changeClass = (elem) => {
    var i = elem.childNodes[0];
    var c = i.classList;
    console.log(i);
    if (c.contains("fa-bars")) {
        i.classList.remove("fa-bars");
        i.classList.add("fa-xmark");
        console.log("asdas");
    } else {
        i.classList.remove("fa-xmark");
        i.classList.add("fa-bars");
    }
};
