only run command

docker build . -t date/node-web-app

&&

docker run -p 3000:3000 -d date/node-web-app
