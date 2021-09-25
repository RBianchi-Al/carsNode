import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    execute(): User[] {
        const user = this.userRepository.list();
        return user;
    }
}

export { ListUserUseCase };
