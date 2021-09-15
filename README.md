# gRPC Server Demo

This is a simple gRPC server built with Node.js. It demonstrates unary, client streaming, and server streaming service methods. It makes use of the [Open Notify API](http://open-notify.org/) to retrieve real-time information about the International Space Station.

## Usage

```
~/$ cd grpc-iss-demo
~/grpc-iss-demo$ npm install
~/grpc-iss-demo$ node server.js
```

This project assumes the use of a gRPC client like [Insomnia](https://insomnia.rest/). Load the `space_station.proto` file, which yields the following 3 service methods:

- `getAstronautCount`: unary; returns the number of astronauts currently aboard the International Space Station.
- `getAstronautNames`: client streaming; after receiving a stream of client messages with astronaut index in each one, returns a single string with the names of all the astronauts corresponding to the indices given.
- `getLocation`: server streaming; the client sends `seconds`, indicating how frequent it wants the server to stream response message; at that frequency, the server sends back a timestamp along with the current latitude/longitude geo-coordinates of the International Space Station.

And Load the `health.proto` file for

- `check`: unary; returns grpc server status

Building Docker Image

- `docker build --no-cache -t naingoted/grpc-healthcheck-demo:1.0 .`

Testing Health Check with Kubernetes

- apply `grpcdemoservice.yaml`to see `readinessProbe` and `livenessProbe` in action.

Random Links

- https://github.com/GoogleCloudPlatform/microservices-demo/tree/master/src/currencyservice
- https://github.com/alvinslee/grpc-iss-demo
- https://medium.com/geekculture/implementing-healthchecks-in-grpc-containers-for-kubernetes-d5049989ab12
- https://stackoverflow.com/questions/63826124/how-to-setup-kubernetes-health-checking-for-grpc-with-nodejs-and-bazel-grpc-he
- https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
- https://cloud.google.com/blog/topics/developers-practitioners/health-checking-your-grpc-servers-gke
- https://github.com/gkarthiks/grpc-health-check/blob/master/.github/workflows/main.yaml
