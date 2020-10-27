#!/bin/bash
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
trap 'echo; exit' INT

#building the project
function buildFrontend {
	npm run --prefix "$SCRIPTPATH/frontend/" build
}

#merging with Android
function mergeFrontend {
	rm -rf "$SCRIPTPATH/android/app/src/main/assets/*"
	cp -r "$SCRIPTPATH/frontend/dist/." "$SCRIPTPATH/android/app/src/main/assets/"
}

#MAIN
buildFrontend
mergeFrontend

echo "Done!"