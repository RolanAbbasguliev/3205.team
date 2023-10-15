import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { db } from './db/db';
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

// function debounce(f, ms) {
//   let isCooldown = false;

//   return function () {
//     if (isCooldown) {
//       return;
//     }

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => {
//       return (isCooldown = false);
//     }, ms);
//   };
// }

// function handler(data, res: Response) {
//   console.log('EXEC');
//   let { email, number } = data;

//   const result = number ? find(email, number) : findByEmail(email);
//   if (!result.length) {
//     res.status(400).send('Data not found');
//     return;
//   }
//   res.status(200).send(result);
// }
// let f = debounce(handler, 5000);

app.post('/', (req: Request<{}, {}, ReqData>, res: Response) => {
  // res.once('end', debounce(handler, 5000));
  // debounce(function () {
  //   console.log('PROCESS');
  //   const result = number ? find(email, number) : findByEmail(email);
  //   if (!result.length) {
  //     res.status(400).send('Data not found');
  //     return;
  //   }
  //   res.send(result);
  // }, 1);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
