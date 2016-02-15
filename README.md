# nb-message-board
Project Sample with Express, Socket, Angular, Docker

[![Codeship Status for boennemann/badges](https://www.codeship.io/projects/83fd1930-9ce8-0133-2987-22509ada1533/status?branch=master)](https://www.codeship.io/projects/127290)
[![Code Climate](https://codeclimate.com/github/luiz-simples/message-board/badges/gpa.svg)](https://codeclimate.com/github/luiz-simples/message-board)
[![Issue Count](https://codeclimate.com/github/luiz-simples/message-board/badges/issue_count.svg)](https://codeclimate.com/github/luiz-simples/message-board)
[![Coverage Status](https://coveralls.io/repos/luiz-simples/message-board/badge.svg?branch=master&service=github)](https://coveralls.io/github/luiz-simples/message-board?branch=master)


[Demo Version](http://chat.nurimba.com.br)


[SPA Project](https://github.com/luiz-simples/message-board/tree/master/spa)


Environment with:

* [Docker](https://docs.docker.com/)
* [Debian](https://www.debian.org/releases/stable/)
* [Make](http://www.gnu.org/software/make/manual/make.html#Running)
* [NodeJS](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [Jest](https://facebook.github.io/jest/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)
* [Yeoman](http://yeoman.io/)


Docker install the linux environment:

```sh
$ curl -sSL https://get.docker.com/ | sh
```


Make tasks of environment

* Build docker image - ```$ make build-image```
* Create docker container - ```$ make build-container```
* Run docker container (only container already created) - ```$ make attach-container```
