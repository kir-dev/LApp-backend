Start simonyi dev VM


Run docker build
docker build -t bence04/lapp .

Run port forward
docker run -p 8080:3000 -d bence04/lapp

get docker containers id
docker ps

get docker container log:
docker logs CONTAINERID

open docker container
docker exec -it <mycontainer> bash

get node process id
ps aux | grep node

kill proccess
kill -9 PROCESS_ID


