FROM node:5.0.0

ADD . /gaia-icons

WORKDIR /gaia-icons

RUN npm install
RUN apt-get update && apt-get -y install fontforge;

WORKDIR /gaia-icons
