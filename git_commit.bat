@echo off
set PATH=C:\Users\Acer\MinGit\cmd;%PATH%

echo Initializing Git repository...
git init
git config user.name "Jennifer"
git config user.email "jennifer@example.com"

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit: Figma-to-React Design System and Storybook Showcase"

echo Setting main branch and origin remote...
git branch -M main
git remote remove origin 2>NUL
git remote add origin https://github.com/jmankar8168/Jennifer_UEDP2.git

echo Current Git Status:
git status
