/*********************************
			Menu Toggle
*********************************/

const menuToggle = document.getElementById("menu-bar");
const hamburgerNav = document.querySelector(".navbar");

menuToggle.addEventListener("click", function toggleVisibility() {
	if (hamburgerNav.style.visibility == "hidden") {
		hamburgerNav.style.visibility = "visible";
	} else {
		hamburgerNav.style.visibility = "hidden";
	}
})

