#setup image
FROM ubuntu:latest
RUN apt update

#install dependencies
RUN apt install -y maven
RUN apt install -y --no-install-recommends openjdk-19-jre
RUN apt install -y software-properties-common
RUN apt-add-repository ppa:swi-prolog/stable
RUN apt install -y swi-prolog swi-prolog-java
RUN apt install -y git
RUN apt install -y wget
RUN apt install -y nodejs
RUN apt install -y npm
RUN npm install -g n
RUN n 16.19.1

#setup PATH vars
RUN SWI_HOME_DIR=/usr/lib/swi-prolog/
RUN LD_LIBRARY_PATH=/usr/lib/swi-prolog/lib/x86_64-linux/
RUN CLASSPATH=/usr/lib/swi-prolog/lib/jpl.jar
RUN LD_PRELOAD=/usr/lib/swi-prolog/lib/x86_64-linux/libswipl.so

#clone SRR and build it
RUN git clone https://github.com/MaximeJakubowski/SRR /SRR
RUN cd /SRR && mvn clean package

#copy rule folder
#ADD rules /rules
ADD solid-agent/rules /rules

#clone aggregator-server (query rewriting branch)
RUN mkdir /server
WORKDIR /server
ADD solid-aggregator-server ./solid-aggregator-server
ADD incremunica ./incremunica
WORKDIR /server/solid-aggregator-server
RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "run", "start", "serve"]
