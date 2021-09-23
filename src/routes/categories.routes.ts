import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/service/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ name, description });
    return res.status(201).json(categoriesRepository);
});

categoriesRoutes.get("/", (req, res) => {
    const catetogiesList = categoriesRepository.list();
    return res.json(catetogiesList);
});
export { categoriesRoutes };
