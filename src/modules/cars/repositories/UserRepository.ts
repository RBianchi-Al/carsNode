import { User } from "../model/User";
import { ICreateUserDTO, IUserRepository } from "./IUserRepository";

class UserRepositories implements IUserRepository {
    private users: User[];

    private static INSTANCE: UserRepositories;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UserRepositories {
        if (!UserRepositories.INSTANCE) {
            UserRepositories.INSTANCE = new UserRepositories();
        }
        return UserRepositories.INSTANCE;
    }

    create({
        name,
        admin,
        driver_license,
        email,
        password,
        username,
    }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            admin,
            driver_license,
            email,
            password,
            username,
            created_ad: new Date(),
        });

        this.users.push(user);
    }
    list(): User[] {
        return this.users;
    }
    findByName(name: string): User {
        const user = this.users.find((category) => category.name === name);
        return user;
    }
}
export { UserRepositories };
