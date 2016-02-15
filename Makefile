USER=nb
CONT=nb-chat-run
IMAGE=nb-image
DIR_LOG=$(PWD)/../logs/nurimbaChat
LOG_FIL=$(DIR_LOG)/$(shell /bin/date "+%Y-%m-%d-%H-%M-%S").log
CONT_PROD=nb-chat

build-image:
	docker build --force-rm --no-cache --rm -t ${IMAGE} .

stop-container:
	( docker stop ${CONT} ) || ( echo "Container not found: ${CONT}" )

remove-container: stop-container
	( docker rm ${CONT} ) || ( echo "Container not found: ${CONT}" )

build-container: remove-container
	docker run \
		-v ${HOME}/.gitconfig:/${USER}/.gitconfig \
		-v ${HOME}/.ssh:/${USER}/.ssh \
		-v ${PWD}:/${USER}/src \
		-w /${USER}/src \
		-h dev \
		--dns=8.8.8.8 \
		-it \
		--name ${CONT} \
		${IMAGE}

attach-container: stop-container
	docker start ${CONT} && \
	docker attach ${CONT}

remove-container-production:
	mkdir -p $(DIR_LOG) && \
	( ( docker stop ${CONT_PROD} && docker logs ${CONT_PROD} >> ${LOG_FIL} && docker rm ${CONT_PROD} ) || echo "Container not found: ${CONT_PROD}" )

prod: remove-container-production
	docker run \
		-d \
		-h production \
		--dns=8.8.8.8 \
		-v ${PWD}:/nbServer/src:ro \
		-w /nbServer/src \
		--name ${CONT_PROD} \
		--cap-drop=KILL \
		--cap-drop=CHOWN \
		--cap-drop=SETGID \
		--cap-drop=SETUID \
		--cap-drop=SETUID \
		--cap-drop=AUDIT_WRITE \
		--security-opt label:level:TopSecret \
		--privileged=true \
		--memory-swap=-1 \
		${IMAGE} \
    node server.js
