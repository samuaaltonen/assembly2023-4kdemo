# Assembly Summer 2023 4k intro

## Title: FlowChaos by Kronixia

JavaScript intro for Assembly Summer 2023 4k intro compatition

Minified with [UglifyJS](https://www.npmjs.com/package/uglify-js)/[terser](https://www.npmjs.com/package/terser) and [pnginator](https://gist.github.com/gasman/2560551)

For audio used [ZzFX](https://github.com/in4k/ZzFX) and [ZzFXM](https://github.com/keithclark/ZzFXM/)

## Running Instructions

Tested for Chrome 115.0.5790.110 and Firefox 115.0.3

Chrome need to be run with following command line flags:

`--allow-file-access-from-files --autoplay-policy=no-user-gesture-required`

With Firefox it should work out of the box, you might need to enable autoplay in settings

## Compilation Instructions

**Dependensiens:** Ruby, Node.js, uglify-js

You can run `run.sh` to compile and minify the code

- Windows: `bash run.sh`

- Unix: `./run.sh`

You can install other dependencies with command: `./run.sh install`

Open the file `demo.flowchaos.html` in your browser and you are ready to go!
