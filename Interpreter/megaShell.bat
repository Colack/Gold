@echo off
rem Completed By Colack
rem Comments:
rem     Echo is off by default. 
rem     For some reason if its not off in this file it picks up errors on my computer.
rem     Sorry about that
set message=Booting up megaShell.
echo %message%
node ./Gold-Loader/modules/util/megaShell.js
