#!/bin/bash

npm run --silent build
cp -r fonts/ /gaia-icons-host/
cp gaia-icons.css /gaia-icons-host/
cp gaia-icons-embedded.css /gaia-icons-host/
cp index.html /gaia-icons-host/