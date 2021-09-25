import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(req: Request, res: Response): Response {
        const { name, username, password, email, driver_license, admin } =
            req.body;

        this.createUserUseCase.execute({
            name,
            username,
            password,
            email,
            driver_license,
            admin,
        });
        return res.status(201).send();
    }
}
export { CreateUserController };
