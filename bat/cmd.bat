@echo off
cls
title Batchcc Prompt %cd%
color 0a
cls
:cmd
set /p "cmd=%CD%>"
%cmd%
echo.
goto cmd
