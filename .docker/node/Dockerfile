FROM node:18.12-alpine3.16

# Install packages
RUN apk update \
    && echo http://dl-cdn.alpinelinux.org/alpine/v3.16/community/ >> /etc/apk/repositories \
    && apk add --no-cache \
# ssh support for composer and yarn
       openssh-client \
# for imagemin gifsicle, optipng, jpgtran, node-gyp
       autoconf \
       automake \
       make \
       g++ \
       nasm \
       zlib \
       libpng-dev \
       libjpeg-turbo-utils

# Install gulp, sass
RUN npm install -g gulp-cli sass \
    && npm cache clean --force \

# resolve yarn with git problems
COPY .ssh/config /home/arthurdent/.ssh/config

# Set default working directory
ARG PROJECT_WORKDIR
WORKDIR ${PROJECT_WORKDIR}
