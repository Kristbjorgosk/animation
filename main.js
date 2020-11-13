// some js for the curser hover on the buttons

let mouseCursor = document.querySelector(".cursor");
let buttons = document.querySelectorAll(".buttons button");

window.addEventListener("mousemove", cursor);

// tho get exact location of the cursor so the new circled curser is at the same location
function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

// run through all the "button" so when you hovver over you will see big circle and it will disapear when you hover "off"
buttons.forEach((button) => {
  button.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursoerHover");
  });
  button.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursoerHover");
  });
});

var container, cursoerHover;

container = document.querySelector(".buttons button");

setTimeout(function () {
  cursoerHover = document.createElement("div");
  cursoerHover.id = "cursoerHover";
  container.appendChild(cursoerHover);

  // Change container cursor from 'auto' to 'default',
  // to schedule cursor update while hovering overlay
  container.style.cursor = "default";
}, 5000);
