#building the project
function buildFrontend {
	npm run --prefix "$PSScriptRoot/frontend/" build
}

#merging with Android
function mergeFrontend {
	Remove-Item -Recurse -Force "$PSScriptRoot/android/app/src/main/assets/*"
	Copy-Item -Recurse -Force "$PSScriptRoot/frontend/dist/*" "$PSScriptRoot/android/app/src/main/assets/"
}

#MAIN
buildFrontend
mergeFrontend

Write-Host "Done!"