var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
  openBtn.classList.add('display');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
  openBtn.classList.remove('display');
}
