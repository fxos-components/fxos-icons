FROM node:5.0.0
RUN apt-get update && apt-get -y upgrade
WORKDIR /fxos-icons
RUN apt-get -y install fontforge;
