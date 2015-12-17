#!/bin/bash

npm run --silent build
cp -r fonts/ /fxos-icons-host/
cp fxos-icons.css /fxos-icons-host/
cp fxos-icons-embedded.css /fxos-icons-host/
cp index.html /fxos-icons-host/