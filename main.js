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

// cursor was not showing up in browser in the live version so this function fixes that
var cursor, cursoerHover;
cursor = document.querySelector(".buttons button");

setTimeout(function () {
  cursoerHover = document.createElement("div");
  cursoerHover.id = "cursoerHover";
  cursor.appendChild(cursoerHover);

  // to schedule cursor update while hovering overlay
  cursor.style.cursor = "default";
}, 5000);
