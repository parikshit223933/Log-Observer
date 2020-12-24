import express from "express";
const app = express();
const port = 8000;
import routes from "./routes/index";

app.use('/', routes);

app.listen( port, () => {
    // tslint:disable-next-line: no-console
    console.log( `server is running at http://localhost:${ port }` );
  }
);