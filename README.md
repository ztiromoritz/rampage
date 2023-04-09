# rampage - an audio spache shooter  

My attempt for the games for blind gamers jam

## what is this?
I try to build a space shooter or shmup using 
 * pico-8 as game engine
 * the pico-8 html import to add additional apis like:
 * spacial audio with howler
 * text to speech web Api
 * aria-live regions

There might be easier solutions for the game, but I like and know pico-8s simple API. 

## development
 * Make sure there is a copy of pico-8 in the bin folder
 * Start pico8 in one terminal `npm run p8`
 * Start the vite dev server in another terminal `npm run dev`
 * Visit [http://localhost:5173/](http://localhost:5173/)
 * If you change files in `.src/` the page should be updated
 * If you hit save in pico8 the `public/p8/export/main.js` should be updated


## TODO
 * [x] download pico-8
 * [x] start pico-8 from command line
 * [x] basic pico-8 dev cycle
 * [x] Basic webapp
 * [x] GPIO call protocol
 * [ ] Add howler
 * [ ] hsfx(x,y,sound) - spacial
 * [ ] speech(x,y,str)
 * [ ] Game Menu
 * [ ] tts
 * [ ] Loading Screen
 * [ ] subtitle/aria live region
 * [ ] Settings
   * [ ] Select tts, aria-live, 
   * [ ] recorded sounds
   * [ ] Select volumes
 * [ ] Sound glossar