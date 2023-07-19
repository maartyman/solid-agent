# The POD-QUERY system

This repository combines the solid-aggregator-server and the SRR rewriter to make the POD-QUERY system. 
The solid-aggregator-server serves an endpoint to which clients can make query request. 
The server will use the SRR query rewriter to rewrite the query to I) preserve the privacy of the pod's owner
II) schema align the schema of the query to the schema used the POD. 
The demo for this repo is run on https://podquery-demo.vito.be/.

![The POD-QUERY system](./Web%20Agent.png "Schematic overview of the POD-QUERY system")

## Dockerfile

This dockerfile builds the backend Web Agent server used in the demo. 
As shown in the image, it exposes an endpoint where applications can send query requests to.
These queries are then rewritten with rule mappings and executed on the POD's data.
The query results are then send back to the application.

## UI

This is the UI that is run on https://podquery-demo.vito.be/. 
This frontend is build with webpack so to serve the site locally you can start a dev-server with: 
(run the following commands in the UI directory)
```
npm start
```
Or build a static website in a sub folder called `UI/dist/`:
```
npm run build 
```
This UI can be served with NGINX in a docker container.
To build this docker container run the following command from inside the `UI/` directory:
```
docker build .
```

## rules

This folder contains the mapping rules for the rewriter.

## POD-Query files

This folder contains the queries and data for the demo.
