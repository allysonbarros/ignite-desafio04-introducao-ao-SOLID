import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    user.name = name;
    user.email = email;
    
    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find(x => x.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(x => x.email === email);
  }

  turnAdmin(receivedUser: User): User {
    receivedUser.admin = true;
    receivedUser.updated_at = new Date();
    
    return receivedUser
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
