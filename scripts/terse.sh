#! /usr/bin/env bash
terser "$1" \
    --compress \
    --mangle \
    --format quote_style=1 \
    > "./src/static/$1.min"
