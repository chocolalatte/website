podman rmi -f localhost/webserver

podman build -t webserver .
podman run -d --name webserver -p 8080:8888 webserver