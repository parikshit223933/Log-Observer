import express from 'express';
import http from 'http';

export default (app: express.Express, port:number) => {
  const server = http.createServer(app);
  const io = require('socket.io')(server);
  connectSocket(io)
  server.listen(port);
}

const connectSocket = (io: any) => {
  io.on('connection', (socket: any) => {
    // 1. backend:logs_updated
    // 2. client:logs_shown

    // tslint:disable-next-line: no-console
    console.log('client connected');

    socket.on('client:logs_shown', (data: any) => {
      // tslint:disable-next-line: no-console
      console.log('logs shown on front end');
      // tslint:disable-next-line: no-console
      console.log(data)
    })

    // code to emit action when the logs are updated

  });
}