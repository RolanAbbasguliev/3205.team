import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { db, dbExec } from './db/db';
import { find, findByEmail } from './utils/utils';
import { ReqData } from './types/types';
import { validation } from './validation/validation';

const app: Express = express();
const port = 5500;

let corsOptions = {
  origin: '*',
};

function initMiddlewares() {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(validation);
}

initMiddlewares();

app.post('/', async (req: Request<{}, {}, ReqData>, res: Response) => {
  dbExec(res.locals.user, res);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
