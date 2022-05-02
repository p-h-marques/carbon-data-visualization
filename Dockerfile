FROM node:16

ADD . /usr/app

WORKDIR /usr/app

RUN npm install

ADD ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
