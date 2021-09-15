const grpc = require('@grpc/grpc-js');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const PROTO_FILE_PATH = path.join(__dirname, '/health.proto');

const packageDefinition = protoLoader.loadSync(PROTO_FILE_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

module.exports = grpc.loadPackageDefinition(packageDefinition).grpc.health.v1;
