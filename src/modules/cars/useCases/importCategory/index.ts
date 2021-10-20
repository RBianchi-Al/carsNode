import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryControoler = new ImportCategoriesController(
    importCategoryUseCase
);

export { importCategoryControoler };
