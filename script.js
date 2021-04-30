function main() {
  let color = document.querySelector("#color");

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " 
                          + yPos + "px, 0)";
  }
 
  let xScrollPosition;
  let yScrollPosition;
 
  function scrollLoop() {
    console.log("test3")
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * 1, color);
  
    requestAnimationFrame(scrollLoop);
  }
  
  scrollLoop();
}
window.addEventListener("load", main);