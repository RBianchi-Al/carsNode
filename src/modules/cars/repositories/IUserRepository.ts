import { User } from "../model/User";

interface ICreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
    admin: boolean;
}

interface IUserRepository {
    findByName(name: string): User;
    list(): User[];
    create({
        name,
        username,
        password,
        email,
        driver_license,
        admin,
    }: ICreateUserDTO): void;
}
export { IUserRepository, ICreateUserDTO };
