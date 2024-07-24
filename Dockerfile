FROM registry.access.redhat.com/ubi9/nginx-124:1-20
ADD . /usr/share/nginx/html

EXPOSE 8080


