import { Request, Response } from "express";

import { ListUserUseCase } from "./ListCategoriesUseCase";

class ListUserController {
    constructor(private listUserCase: ListUserUseCase) {}

    handle(req: Request, res: Response): Response {
        const all = this.listUserCase.execute();
        return res.status(201).json(all);
    }
}

export { ListUserController };
