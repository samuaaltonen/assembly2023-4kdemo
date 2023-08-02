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
  npm i -g uglify-js
  echo -e "${GREEN}Uglify installed$ENDCOLOR"
  exit 0
fi

rm -rf demo.pnginator.html demo.uglify.js
echo -e "${RED}Old files removed...$ENDCOLOR"
echo -e "${GREEN}Starting size: $(stat --printf="%s" demo.js )$ENDCOLOR"

uglifyjs demo.js -c -m -o demo.uglify.js
ruby pnginator.rb demo.uglify.js demo.pnginator.html

echo -e "${GREEN}Done! New file size is $(stat --printf="%s" demo.pnginator.html )$ENDCOLOR"

PATH=$(pwd)/demo.pnginator.html

echo -e "${RED}Current path: ${PATH/'/mnt/c'/'C:'}$ENDCOLOR"


