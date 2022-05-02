#!/bin/bash
docker_log() {
  local type="$1"
  shift
  printf '%s [%s] [Entrypoint]: %s\n' "$(date --rfc-3339=seconds)" "$type" "$*"
}

docker_note() {
  docker_log Note "$@"
}

_main() {
  docker_note "Installing project dependencies..."
  npm install
  docker_note "Starting "${NODE_ENV}" server..."
  npm run start

  exec "$@"
}

_main "$@"