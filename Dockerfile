FROM node:5.0.0
RUN apt-get update && apt-get -y upgrade
RUN mkdir /fxos-icons
ADD . /fxos-icons
WORKDIR /fxos-icons
RUN apt-get -y install fontforge;


