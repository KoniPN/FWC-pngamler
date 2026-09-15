#!/bin/bash

if [ -z "$var" ]
then
    echo "No arguments supplied."
    exit 1
else
    for var in "$@"
    do
        mkdir ex$var
    done
fi
