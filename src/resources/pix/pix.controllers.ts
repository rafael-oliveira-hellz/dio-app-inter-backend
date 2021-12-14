import { Request, Response } from "express";
import PixService from "./pix.service";

export default class UserController {

    async request (req: Request, resp: Response) {

        const pixService = new PixService();

        const { value } = req.body;
        const user = req.user

        const requestKey = await pixService.request(value, user);
        return resp.status(200).send({copyPasteKey: requestKey})
    }

    async pay (req: Request, resp: Response) {

        const pixService = new PixService();

        const { key } = req.params;
        const payment = await pixService.pay(key, req.user);

        return resp.status(201).send(payment) 
    }

    async transactions (req: Request, resp: Response) {

        const pixService = new PixService();

        const transactions = await pixService.transactions(req.user);

        return resp.status(201).send({transactions})
    }
}