import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoriesController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
    handle(req: Request, res: Response): Response {
        const { file } = req;
        this.importCategoryUseCase.execute(file);
        return res.send();
    }
}

export { ImportCategoriesController };
