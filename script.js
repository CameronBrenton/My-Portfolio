function main() {
  let parallax = document.querySelector("#parallax-8");
  
  window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  });
}
window.addEventListener("load", main);