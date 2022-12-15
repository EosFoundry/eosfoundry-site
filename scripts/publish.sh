#!/usr/bin/env bash

printf 'Rebuilding...'

npm run build

printf 'Publish dry-run...'

rsync -anv --delete build/ root@eosfoundry.dev:/var/www/eosfoundry.dev

while true
do
    read -r -p "Continue with publish? [Y/n] " input

    case $input in
        [yY][eE][sS]|[yY])
            rsync -av --delete build/ root@eosfoundry.dev:/var/www/eosfoundry.dev
            break
            ;;
        [nN][oO]|[nN])
            break
            ;;
        *)
            echo "Invalid input..."
            ;;
    esac
done
