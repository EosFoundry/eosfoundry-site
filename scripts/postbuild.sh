#!/usr/bin/env bash

if [ -z $PACKAGE_ARTIFACT ]; then
   export GIT_HASH_SHORT

   GIT_HASH_SHORT=$(git rev-parse --short HEAD)

   export PACKAGE_ARTIFACT="eosfoundry-v$npm_package_version-$GIT_HASH_SHORT.dev.tgz"
fi

. "$NVM_DIR/nvm.sh"

nvm use "$(cat .nvmrc)"

printf 'package name: %s\n' "$PACKAGE_ARTIFACT"
printf 'package version: %s\n' "$npm_package_version"

tar --create --file "$PACKAGE_ARTIFACT" --gzip build/*

mkdir packages

mv "$PACKAGE_ARTIFACT" packages/
