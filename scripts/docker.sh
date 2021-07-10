#!/usr/bin/env bash
#build docker image
docker build -t notifyme-client .

#login to docker
docker login -u $DOCKER_USER -p $DOCKER_PASSWORD

#tag image
docker tag notifyme-client $DOCKER_USER/notifyme-client:$TRAVIS_BUILD_NUMBER
docker tag notifyme-client $DOCKER_USER/notifyme-client:latest

#push docker image to dockerhub
docker push $DOCKER_USER/notifyme-client:latest