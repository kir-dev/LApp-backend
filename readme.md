Start simonyi dev VM

Run docker build
docker build -t bence04/lapp .

Run port forward
docker run -p 8080:3000 -d bence04/lapp