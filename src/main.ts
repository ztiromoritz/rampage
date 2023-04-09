export const hello = "world";

const fps = 120;
function tick() {
  // perform some animation task here
  setTimeout(() => {
    commandHandler.tick();
    tick();
  }, 1000 / fps);
}
tick();

const COMMANDS: ((...args: number[]) => Promise<void>)[] = [];
COMMANDS[0] = async function hsfx(x: number, y: number, sound: number) {
  console.log("hsfx", { x, y, sound });
};

function createCommandHandler() {
  let currentTrigger = 0;
  return {
    tick() {
      const trigger = window.pico8_gpio[0];
      //console.log({ trigger });
      if (trigger && currentTrigger !== trigger) {
        currentTrigger = trigger;
        const commandCode = window.pico8_gpio[1];
        const args = window.pico8_gpio.slice(2, 10);
        const command = COMMANDS[commandCode];
        command(...args);
      }
    },
  };
}

const commandHandler = createCommandHandler();
