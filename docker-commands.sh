#!/usr/bin/env bash
#Remove untagged images
docker rmi -f $(docker images --filter "dangling=true" -q)

#Remove stopped containers
docker rm -f $(docker ps -qf "status=exited")