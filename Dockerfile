FROM node:5.0.0

ADD . /fxos-icons

WORKDIR /fxos-icons

RUN npm install
RUN apt-get update && apt-get -y install fontforge;

WORKDIR /fxos-icons
