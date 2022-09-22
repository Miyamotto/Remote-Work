document.getElementById("featuresOne").addEventListener("click", openMenu);
function openMenu() {
  document.getElementById("featuresHidden").classList.toggle("show");
  document.getElementById("downArrow").classList.toggle("show");
  document.getElementById("upArrow").classList.toggle("show");
}
document.getElementById("companyOne").addEventListener("click", openMenuOne);
function openMenuOne() {
  document.getElementById("companyHidden").classList.toggle("show");
  document.getElementById("downArrow1").classList.toggle("show");
  document.getElementById("upArrow1").classList.toggle("show");
}

document.getElementById("open").addEventListener("click", openMenuTwo);
function openMenuTwo() {
  document.getElementById("open").classList.toggle("show");
  document.getElementById("close").classList.toggle("show");
  document.getElementById("showNav").classList.toggle("show");
  document.getElementById("navItems").classList.toggle("show");
  document.getElementById("navList").classList.toggle("show");
}
document.getElementById("close").addEventListener("click", openMenuthree);
function openMenuthree() {
  document.getElementById("open").classList.toggle("show");
  document.getElementById("close").classList.toggle("show");
  document.getElementById("showNav").classList.toggle("show");
  document.getElementById("navItems").classList.toggle("show");
  document.getElementById("navList").classList.toggle("show");
}
