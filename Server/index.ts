import express from "express";
const app = express();
const port = 8000;
import cookieParser from 'cookie-parser';
import routes from "./routes/index";
import expressLayouts from 'express-ejs-layouts';
import configSockets from './configs/sockets';
import cors from 'cors';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressLayouts);
app.use(cors())


app.use('/', routes);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('case sensitive routing', false);
app.set('views', './views');
app.set('view engine', 'ejs');

configSockets(app, port);