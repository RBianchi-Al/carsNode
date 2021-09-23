import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationRepository
    );

    createSpecificationService.execute({ name, description });
    return res.status(201).json(specificationRepository);
});

specificationsRoutes.get("/", (req, res) => {
    const specificationsList = specificationRepository.list();
    return res.json(specificationsList);
});
export { specificationsRoutes };
