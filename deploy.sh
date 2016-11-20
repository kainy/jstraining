#!/bin/bash
git clone "https://${GH_TOKEN}:x-oauth-basic@github.com/kainy/jstraining.git"
cd ./jstraining/
git checkout --orphan gh-pages
git rm -rf .
cd ../
node app.js
cp ./.dist/. ./jstraining/ -r
cd ./jstraining/
git add .
git commit -a -m "slides commit"
git push origin gh-pages --force