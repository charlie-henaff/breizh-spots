CURRENT_UID = $(shell id -u)
CURRENT_GID = $(shell id -g)
CURRENT_PATH = $(shell pwd)

DEFAULT_CMD = docker run -it --rm -u ${CURRENT_UID}:${CURRENT_GID} -w /usr/src -v ${CURRENT_PATH}:/usr/src -p 3000:3000 node:lts-alpine

.DEFAULT_GOAL := help
help:
	@echo
	@echo --------- PROJECT ----------
	@echo start: start project
	@echo 
	@echo --------- CMD ----------
	@echo yarn cmd="cmd": execute yarn cmd
	@echo
.PHONY: help

## Project
start:
	@${DEFAULT_CMD} yarn install
	@${DEFAULT_CMD} yarn start

## Yarn
yarn:
	@${DEFAULT_CMD} yarn ${cmd}

.PHONY: start