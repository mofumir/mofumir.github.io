#!/usr/bin/env sh

# abort on errors
# build
yarn build

git checkout dev
git push -f --delete origin master
git subtree push --prefix docs/ origin master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages