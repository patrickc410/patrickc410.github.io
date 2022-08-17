#!/usr/bin/env sh

set -e 

npm run build 

cd dist 

rm -rf .git

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:patrickc410/patrickc410.github.io.git master:gh-pages

cd -