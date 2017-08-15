#!/bin/bash

#this file is to work around codebuild shell limitations.

echo $(pwd)
echo $(ls)
[[ -d ./src ]] || echo "Missing src dir"
[[ -d ./deploy ]] || echo "Missing deploy dir"
[[ -d ./package ]] || echo "Missing package dir"

zip -r ./package/src.zip ./src/*
echo $(du -sh ./package/src.zip)


