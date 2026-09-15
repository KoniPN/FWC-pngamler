// Source - https://stackoverflow.com/a/11659641
// Posted by RobG
// Retrieved 2026-09-16, License - CC BY-SA 3.0

let size = 200;
const colors = ["red", "green", "blue"];
let colorIndex = 0;
const balloon = document.getElementById("air");
balloon.addEventListener("click", getAir);
balloon.addEventListener("mouseleave", lostAir);

function lostAir() {
  if (size > 200) {
    size -= 5;
    
  }
  if (colorIndex == 0) {
    colorIndex = 2;
  } else {
    colorIndex -= 1;
  }
  
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = colors[colorIndex];
};

function getAir() {
  size += 10;
  colorIndex+= 1;
  if (colorIndex == colors.length) {
    colorIndex = 0;
  }
  if (size >= 420) {
    size = 200;
  }
        balloon.style.width = size + "px";
        balloon.style.height = size + "px";
        balloon.style.backgroundColor = colors[colorIndex];
};
