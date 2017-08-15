#!/bin/bash

echo $(pwd)
echo $(ls)
[[ -d ./src ]] || echo "Missing src dir"
[[ -d ./deploy ]] || echo "Missing deploy dir"
[[ -d ./package ]] || echo "Missing package dir"

zip -r ./package/src.zip ./src/*


