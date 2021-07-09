#!/usr/bin/env bash
#login to heroku
# docker login --username=_ --password=$HEROKU_API_KEY registry.heroku.com
echo $HEROKU_API_KEY | docker login --username=_ --password-stdin registry.heroku.com

#tag docker image for heroku
docker tag notifyme-client registry.heroku.com/notifyme-client/web

#push docker image to heroku registry
docker push registry.heroku.com/notifyme-client/web

#release new container
heroku container:release web -a notifyme-client