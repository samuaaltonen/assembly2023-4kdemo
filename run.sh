#!/bin/bash

RED="\e[31m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"


if [ "$1" = "install" ]; then
  echo -e $ENDCOLOR
  sudo apt update
  sudo apt -y install ruby-full
  echo -e "${GREEN}Ruby installed$ENDCOLOR"
  sudo apt -y install nodejs
  echo -e "${GREEN}Node installed$ENDCOLOR"
  npm i terser -g
  echo -e "${GREEN}Terser installed$ENDCOLOR"
  npm i -g uglify-js
  echo -e "${GREEN}Uglify installed$ENDCOLOR"
  exit 0
fi

rm -rf demo.pnginator.html demo.uglify.js
echo -e "${RED}Old files removed...$ENDCOLOR"
echo -e "${GREEN}Starting size: $(stat --printf="%s" demo.js )$ENDCOLOR"

terser demo.js -c -m -o demo.terser.js
echo -e "Terser done! New file size is ${GREEN}$(stat --printf="%s" demo.terser.js )$ENDCOLOR"

uglifyjs demo.js -c -m -o demo.uglify.js
echo -e "Uglify done! New file size is ${GREEN}$(stat --printf="%s" demo.uglify.js )$ENDCOLOR"

# Check which file is smaller terser or uglify and set variable
if [ $(stat --printf="%s" demo.terser.js) -lt $(stat --printf="%s" demo.uglify.js) ]; then
  echo -e "${GREEN}Terser is smaller$ENDCOLOR"
  FILE="demo.terser.js"
else
  echo -e "${GREEN}Uglify is smaller$ENDCOLOR"
  FILE="demo.uglify.js"
fi

ruby pnginator.rb $FILE demo.flowchaos.html

echo -e "\n${GREEN}Pnginator finished! New file size is $(stat --printf="%s" demo.flowchaos.html )$ENDCOLOR"

PATH=$(pwd)/demo.flowchaos.html

echo -e "Current path: ${RED}${PATH/'/mnt/c'/'C:'}$ENDCOLOR"


