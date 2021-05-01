function main() {
  let backgroundImage = document.querySelector("#backgroundImage");
  let backgroundImage2 = document.querySelector('#backgroundImage2');

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

    setTranslate(0, yScrollPosition * -0.2, backgroundImage);
    setTranslate(0, yScrollPosition * -0.2, backgroundImage2);
  
    requestAnimationFrame(scrollLoop);
  }
  
  scrollLoop();
}
window.addEventListener("load", main);