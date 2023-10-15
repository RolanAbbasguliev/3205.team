import { Response } from "express";
import { debounce, find, findByEmail } from "../utils/utils";
import { ReqData } from "../types/types";

export const db = [
  {
    email: 'jim@gmail.com',
    number: '221122',
  },
  {
    email: 'jam@gmail.com',
    number: '830347',
  },
  {
    email: 'john@gmail.com',
    number: '221122',
  },
  {
    email: 'jams@gmail.com',
    number: '349425',
  },
  {
    email: 'jams@gmail.com',
    number: '141424',
  },
  {
    email: 'jill@gmail.com',
    number: '822287',
  },
  {
    email: 'jill@gmail.com',
    number: '822286',
  },  
];



function dbQuery(data: ReqData, res: Response) {
  console.log("Function execution");

  setTimeout(() => {
    let result = [];
    let { email, number } = data;
    
    result = number ? find(email, number) : findByEmail(email);

    result.length ? res.status(200).send(result) : res.status(400).send('No data found');
 
  }, 5000)
}

export const dbExec = debounce(dbQuery, 5000);