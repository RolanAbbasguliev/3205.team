import { db } from '../db/db';

export function findByEmail(email: string) {
  const result = [];
  for (const element of db) {
    if (element.email === email) result.push(element);
  }

  return result;
}

export function find(email: string, number: string) {
  const result = [];

  for (const element of db) {
    if (element.email === email && element.number === number)
      result.push(element);
  }

  return result;
}
