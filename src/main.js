const menuWrapper = document.getElementById("menu-wrapper-main");

function showMenu() {
  if (menuWrapper.style.opacity === "0") {
    menuWrapper.style.opacity = "1";
    menuWrapper.style.width = "26rem";
    menuWrapper.style.transform = "scaleY(1)";
  } else {
    menuWrapper.style.opacity = "0";
    menuWrapper.style.width = "0";
    menuWrapper.style.transform = "scaleY(0)";
  }
}
