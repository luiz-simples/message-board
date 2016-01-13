# message-board
Project Sample with Express, Socket, Angular, Docker

Environment with:

* [Docker](https://docs.docker.com/)
* [Make](http://www.gnu.org/software/make/manual/make.html#Running)
* [NodeJS](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [PostgreSQL](http://www.postgresql.org/docs/9.4/static/)


First tasks of environment

* Build container of development - ```$ make build-container-development```
* Build container of Production - ```$ make build-container-production```


Second tasks of environment: only when development builded

* Enter container of development - ```$ make attach-development```
* Enter command line of database (PSQL) - ```$ make attach-database```
