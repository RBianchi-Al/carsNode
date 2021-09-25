import { UserRepositories } from "../../repositories/UserRepository";
import { ListUserUseCase } from "./ListCategoriesUseCase";
import { ListUserController } from "./ListUserController";

const userRepository = UserRepositories.getInstance();
const listUserUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
