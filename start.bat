@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto error
)
call npm run dev
if errorlevel 1 goto error
goto end
:error
echo.
echo The command failed. Check the terminal output and make sure Node.js and npm are installed.
pause
:end
endlocal
