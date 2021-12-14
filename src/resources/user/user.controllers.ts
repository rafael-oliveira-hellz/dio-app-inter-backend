import { Request, Response } from 'express';
import UserService from './user.service';

export class UserController {

    async signin(req:Request, resp:Response) {
        const {email, password} = req.body;
        const userService = new UserService();

        const user = await userService.signin({email, password});

        return resp.status(200).send(user);
    }

    async signup(req:Request, resp:Response) {
        const userService = new UserService();

        const user = await userService.signup(req.body);

        return resp.status(200).send(user);
    }

    async me (req:Request, resp:Response) {

        const userService = new UserService();
        const user = await userService.me(req.user);

        return resp.status(201).send(user)
    }
}