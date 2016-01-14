# message-board
Project Sample with Express, Socket, Angular, Docker

[![Codeship Status for boennemann/badges](https://www.codeship.io/projects/83fd1930-9ce8-0133-2987-22509ada1533/status?branch=master)](https://www.codeship.io/projects/127290)
[![Code Climate](https://codeclimate.com/github/luiz-simples/message-board/badges/gpa.svg)](https://codeclimate.com/github/luiz-simples/message-board)
[![Issue Count](https://codeclimate.com/github/luiz-simples/message-board/badges/issue_count.svg)](https://codeclimate.com/github/luiz-simples/message-board)
[![Coverage Status](https://coveralls.io/repos/luiz-simples/message-board/badge.svg?branch=master&service=github)](https://coveralls.io/github/luiz-simples/message-board?branch=master)


[Demo Version](http://188.226.170.38:2018/)


Environment with:

* [Docker](https://docs.docker.com/)
* [Make](http://www.gnu.org/software/make/manual/make.html#Running)
* [NodeJS](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [PostgreSQL](http://www.postgresql.org/docs/9.4/static/)
* [Demo Version](http://188.226.170.38:2018/)


First tasks of environment

* Build container of development - ```$ make build-container-development```
* Build container of Production - ```$ make build-container-production```


Second tasks of environment: only when development builded

* Enter container of development - ```$ make attach-development```
* Enter command line of database (PSQL) - ```$ make attach-database```


Deploy tasks of project:

* Build production version - ```$ make build-production-version```
* Deploy version [http://188.226.170.38:2018/](http://188.226.170.38:2018/) (only public-key registered)- ```$ make deploy-production```


Projects

* [SPA Project](https://github.com/luiz-simples/message-board/tree/master/spa)
