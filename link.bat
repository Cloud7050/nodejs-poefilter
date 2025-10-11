@echo off

set "IN_FILTERS=%~dp0build\"
set "IN_SOUNDS=%~dp0sounds\"
set "OUT=C:\Users\cloud\Documents\My Games\Path of Exile 2\"

goto :main



:createLink
setlocal EnableDelayedExpansion
set "SOURCE=%~1"
set "DESTINATION=%~2"
echo !SOURCE! -^> !DESTINATION!
mklink "%DESTINATION%" "%SOURCE%" >nul
endlocal
goto :eof



:main
echo Deleting old symlinks...
echo(
for %%F in ("%OUT%*") do (
	setlocal EnableDelayedExpansion

	set "isSymlink=false"
	fsutil reparsepoint query "%%~fF" >nul && set "isSymlink=true"

	if "!isSymlink!"=="true" (
		echo Deleting %%~nxF...
		del "%%~fF"
	)

	endlocal
)

echo(
echo Linking .filter files...
echo(
for %%F in ("%IN_FILTERS%*.filter") do (
	setlocal EnableDelayedExpansion
	set "name=%%~nF"
	if "!name:~0,1!"=="_" (
		endlocal

		echo Skipping: %%~fF
	) else (
		endlocal

		call :createLink "%%~fF" "%OUT%%%~nxF"
	)
)

echo(
echo Linking sounds...
echo(
for %%F in ("%IN_SOUNDS%*") do (
	call :createLink "%%~fF" "%OUT%%%~nxF"
)

echo(
pause
