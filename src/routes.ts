import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser('Diana','diana@oi.com','******');
    return response.json({ message: 'Hello World ' });
}