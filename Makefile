IMAGE_NAME_DATABASE=m-board-database
IMAGE_NAME_PRODUCTION=m-board-production
IMAGE_NAME_DEVELOPMENT=m-board-development

CONTAINER_NAME_DATABASE=m-board-db
CONTAINER_NAME_PRODUCTION=m-board-prod
CONTAINER_NAME_DEVELOPMENT=m-board-dev
CONTAINER_HOME_FOLDER=/mBoard

DATABASE_USER=mBoard
DATABASE_PASS=mBoardPass
DATABASE_HOST=mBoardDB
DATABASE_NAME=$(DATABASE_USER)
DATABASE_IMAGE_DATA=/var/pg/$(IMAGE_NAME_DATABASE)
DATABASE_CONTAINER_DATA=$(PWD)/../db/$(CONTAINER_NAME_DATABASE)

SERVER_SSH=root@188.226.170.38
SERVER_FOLDER_SRC=/usr/src/message-board


### - Database Tasks - ###
build-image-database:
	docker build --rm -t $(IMAGE_NAME_DATABASE) -f ./docker/database .

drop-container-database:
	( ( docker stop ${CONTAINER_NAME_DATABASE} && docker rm ${CONTAINER_NAME_DATABASE} ) || echo "Container not found: ${CONTAINER_NAME_DATABASE}" )

attach-database:
	( ( docker stop ${CONTAINER_NAME_DATABASE} ) || (echo "Container not found: ${CONTAINER_NAME_DATABASE}" && exit 0) ) && \
	docker start ${CONTAINER_NAME_DATABASE} && \
	docker exec -it ${CONTAINER_NAME_DATABASE} psql -h localhost -U ${DATABASE_USER} ${DATABASE_NAME}

build-container-database: drop-container-database build-image-database
	mkdir -p $(DATABASE_CONTAINER_DATA) && \
	docker run \
		-e PGDATA=$(DATABASE_IMAGE_DATA) \
		-e POSTGRES_USER=$(DATABASE_USER) \
		-e POSTGRES_PASSWORD=$(DATABASE_PASS) \
		-v $(DATABASE_CONTAINER_DATA):$(DATABASE_IMAGE_DATA) \
		--dns=8.8.8.8 \
	  --name $(CONTAINER_NAME_DATABASE) \
		-h database \
		-d \
		${IMAGE_NAME_DATABASE}


### - Development Tasks - ###
build-image-development:
	docker build --rm -t $(IMAGE_NAME_DEVELOPMENT) -f ./docker/development .

drop-container-development:
	( ( docker stop ${CONTAINER_NAME_DEVELOPMENT} && docker rm ${CONTAINER_NAME_DEVELOPMENT} ) || echo "Container not found: ${CONTAINER_NAME_DEVELOPMENT}" )

attach-development:
	( ( docker stop ${CONTAINER_NAME_DATABASE} )    || (echo "Container not found: ${CONTAINER_NAME_DATABASE}"    && exit 0) ) && \
	( ( docker stop ${CONTAINER_NAME_DEVELOPMENT} ) || (echo "Container not found: ${CONTAINER_NAME_DEVELOPMENT}" && exit 0) ) && \
	docker start  ${CONTAINER_NAME_DATABASE}    && \
	docker start  ${CONTAINER_NAME_DEVELOPMENT} && \
	docker attach ${CONTAINER_NAME_DEVELOPMENT}

build-container-development: drop-container-development build-container-database build-image-development
	docker run \
		-v ${HOME}/.gitconfig:/${CONTAINER_HOME_FOLDER}/.gitconfig \
		-v ${HOME}/.ssh:/${CONTAINER_HOME_FOLDER}/.ssh \
		-v ${PWD}:/${CONTAINER_HOME_FOLDER}/volume \
		-p 3000:3000 \
		-p 2018:2018 \
		-w /${CONTAINER_HOME_FOLDER}/volume \
		-h dev \
		--link $(CONTAINER_NAME_DATABASE):$(DATABASE_HOST) \
		--dns=8.8.8.8 \
		-it \
		--name ${CONTAINER_NAME_DEVELOPMENT} \
		${IMAGE_NAME_DEVELOPMENT}


### - Production Tasks - ###
build-image-production:
	docker build --rm -t $(IMAGE_NAME_PRODUCTION) -f ./docker/production .

drop-container-production:
	( ( docker stop ${CONTAINER_NAME_PRODUCTION} && docker rm ${CONTAINER_NAME_PRODUCTION} ) || echo "Container not found: ${CONTAINER_NAME_PRODUCTION}" )

build-container-production: drop-container-production build-container-database build-image-production
	docker run \
		-v ${PWD}/api:${CONTAINER_HOME_FOLDER}/sys:ro \
		-p 2018:2018 \
		-w ${CONTAINER_HOME_FOLDER}/sys \
		-h prod \
		--link $(CONTAINER_NAME_DATABASE):$(DATABASE_HOST) \
		--dns=8.8.8.8 \
		-d \
		--name ${CONTAINER_NAME_PRODUCTION} \
		--privileged=true \
		${IMAGE_NAME_PRODUCTION} \
    node server.js


### - Continuos Integration Tasks - ###
install-global-dependencies:
	npm install -g gulp bower jest mocha coveralls lcov-result-merger jest-cli

install-own-dependencies:
	cd spa/ && npm install && bower install --config.interactive=false && cd ../api/ && npm install && cd ../

run-tests:
	cd spa/ && gulp test && gulp protractor && cd ../api && npm test && cd ../

build-production-version:
	cd spa/ && gulp build && cd ../ && rsync -avzh --delete ./spa/dist/ ./api/public/

deploy-production: build-production-version
	rm -Rf log/ && \
	rm -Rf node_modules/ && \
	rsync -avzh --exclude-from "${PWD}/.deployignore" --delete ./ ${SERVER_SSH}:${SERVER_FOLDER_SRC} && \
	ssh ${SERVER_SSH} "cd ${SERVER_FOLDER_SRC} && make build-container-production"
