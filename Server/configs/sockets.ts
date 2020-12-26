import express from 'express';
import http from 'http';
import fs from "fs";
import path from 'path';
const filePath = path.join(__dirname, '../../SampleLog.txt');

export default (app: express.Express, port: number) => {
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

    // let file = fs.readFileSync(filePath);

    fs.watchFile(filePath, { persistent: true, interval: 100 }, () => {
      // tslint:disable-next-line:no-console
      fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
          // tslint:disable-next-line:no-console
          console.log(error)
        }
        else {
          io.emit('backend:logs_updated', { data })
        }
      });
    });

    socket.on('client:logs_shown', (data: any) => {
      // tslint:disable-next-line: no-console
      console.log('logs shown on front end');
      // tslint:disable-next-line: no-console
      console.log(data)
    })

    // code to emit action when the logs are updated

  });
}
