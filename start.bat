@echo off
title Play-Learn-Code - Local Dev

echo ============================================
echo   Play-Learn-Code Local Development Server
echo ============================================
echo.

echo [1/2] Starting Backend (port 5000)...
start "Backend - Port 5000" cmd /k "cd /d %~dp0server && node server.js"

timeout /t 3 /nobreak >nul

echo [2/2] Starting Frontend (port 5173)...
start "Frontend - Port 5173" cmd /k "cd /d %~dp0 && npx vite"

echo.
echo ============================================
echo  Both servers starting in separate windows!
echo.
echo  Frontend: http://localhost:5173
echo  Backend:  http://localhost:5000
echo  Health:   http://localhost:5000/api/health
echo ============================================
echo.
pause
