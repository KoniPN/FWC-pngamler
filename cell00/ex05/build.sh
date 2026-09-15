#!/bin/bash
for var in "$@"
do
    if [ -z "$var" ]
    then
        echo "No arguments supplied."
        exit 1
    
    else
        mkdir ex$var
    fi
done
