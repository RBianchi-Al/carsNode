import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
    admin: boolean;
}

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}
    execute({
        name,
        username,
        password,
        email,
        driver_license,
        admin,
    }: IRequest): void {
        const userAlreadyExists = this.userRepository.findByName(name);
        if (userAlreadyExists) {
            throw new Error("Category Already Exists");
        }
        this.userRepository.create({
            name,
            username,
            password,
            email,
            driver_license,
            admin,
        });
    }
}

export { CreateUserUseCase };
