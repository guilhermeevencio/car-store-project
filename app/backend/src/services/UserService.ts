import CustomError from "../Error/CustomError";
import UserModel from "../database/models/UserModel";
import {
  IUserCredentials,
  IUserLoginResponse,
  IUserService,
} from "../interfaces/UserInterfaces";
import TokenService from "../services/TokenService";
import HandleWithPassword from "../services/PasswordService";

export default class UserService implements IUserService {
  private userCredentials: IUserCredentials;

  static async findByEmail(email: string): Promise<UserModel | null> {
    const user = await UserModel.findOne({ where: { email } });
    return user;
  }

  async execute(userCredentials: IUserCredentials): Promise<IUserLoginResponse> {
    this.userCredentials = userCredentials;
    const { email, password } = this.userCredentials;
    const user = await UserService.findByEmail(email);

    if (!user) {
      throw new CustomError("Incorrect email or password", 401);
    }

    const isPasswordCorrect = await HandleWithPassword.comparePasswords(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new CustomError("Incorrect email or password", 401);
    }

    const token = TokenService.createToken({
      username: user.username,
      email: user.email,
      role: user.role,
      password: user.password,
    });

    return {
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    };
  }

  async validate(token: string): Promise<UserModel> {
    const tokenInfo = TokenService.validateToken(token);
    
    const user = await UserService.findByEmail(tokenInfo.email);

    if (!user) throw new CustomError("Invalid Token", 401);

    return user;
  }
}
