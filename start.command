#!/bin/bash
# Starts the Working Deep blueprint on http://localhost:8108
cd "$(dirname "$0")"
export PATH="/usr/local/bin:/opt/homebrew/bin:/Applications/Docker.app/Contents/Resources/bin:$PATH"
if ! docker info >/dev/null 2>&1; then
  echo "Starting Docker Desktop..."; open -a Docker
  for i in $(seq 1 60); do docker info >/dev/null 2>&1 && break; sleep 2; done
fi
docker compose up -d --build && echo && echo "Running at http://localhost:8108" && open http://localhost:8108
