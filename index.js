const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("menu-close");
const navPopup = document.getElementById("nav-list");


menuOpen.addEventListener("click", () => {
    navPopup.classList.add("active"); // Slide menu in
    menuOpen.style.display = "none";  // Hide Hamburger
    menuClose.classList.remove("hidden"); // Show Close icon
    menuClose.classList.add("ic-active-cross"); 
});


menuClose.addEventListener("click", () => {
    navPopup.classList.remove("active"); // Slide menu out
    menuOpen.style.display = "block";    // Show Hamburger again
    menuClose.classList.add("hidden");   // Hide Close icon
    menuClose.classList.remove("ic-active-cross");
});