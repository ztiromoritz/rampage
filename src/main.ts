export const hello = "world";

function update() {
  console.log(window.pico8_gpio[0]);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
