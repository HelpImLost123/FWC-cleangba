#!/bin/bash
if [ "$#" -eq 0 ]; then
    echo "No agruments provided"
else
    for args in "$@"; do
        mkdir "ex${args}"
    done
fi