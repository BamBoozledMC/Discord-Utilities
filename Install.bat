@ECHO OFF
echo Installing...
start cmd.exe /c npm config set msvs_version 2019
TIMEOUT 3
start cmd.exe /k "npm i" & "npm i -g nodemon"