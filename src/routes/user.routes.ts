import { Router } from "express";

import { UserRepositories } from "../modules/cars/repositories/UserRepository";
import { CreateUserUseCase } from "../modules/cars/useCases/createUsers/CreateUserUseCase";
import { listUserController } from "../modules/cars/useCases/listUser";

const userRoutes = Router();
const userRepository = UserRepositories.getInstance();

userRoutes.post("/", (req, res) => {
    const { admin, driver_license, email, name, password, username } = req.body;

    const createUserService = new CreateUserUseCase(userRepository);

    createUserService.execute({
        admin,
        driver_license,
        email,
        name,
        password,
        username,
    });
    return res.status(201).json(userRepository);
});

userRoutes.get("/", (req, res) => {
    return listUserController.handle(req, res);
});
export { userRoutes };
