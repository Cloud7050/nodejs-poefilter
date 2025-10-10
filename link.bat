@echo off

set "IN_FILTERS=%~dp0build\"
set "IN_SOUNDS=%~dp0sounds\"
set "OUT=C:\Users\cloud\Documents\My Games\Path of Exile 2\"

goto :main



:createLink
setlocal EnableDelayedExpansion
set "SOURCE=%~1"
set "DESTINATION=%~2"
echo Symlink requested: !SOURCE! -^> !DESTINATION!
if exist "!DESTINATION!" (
	set "isSymlink=false"
	fsutil reparsePoint query "!DESTINATION!" >nul
	if %ERRORLEVEL%==0 (
		set "isSymlink=true"
	)

    if "!isSymlink!"=="true" (
		echo Deleting existing symlink...
		del "!DESTINATION!"
    ) else (
		echo Destination is a real file that may not be safe to overwrite. Skipped symlink creation.
        endlocal
        goto :eof
    )
)
echo Creating symlink...
mklink "%DESTINATION%" "%SOURCE%" >nul
endlocal
goto :eof



:main
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

pause
