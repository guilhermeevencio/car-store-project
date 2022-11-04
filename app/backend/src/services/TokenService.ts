import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import CustomError from '../Error/CustomError';
import { IUserCredentials } from '../interfaces/UserInterfaces';

class TokenService {
  static createToken(userCredentials: IUserCredentials): string {
    const secret = process.env.JWT_SECRET || 'jwt_secret';
    const { role, username, email }: IUserCredentials = userCredentials;

    const token = jwt.sign({ role, username, email }, secret);
    return token;
  }

  static validateToken(token: string): jwt.JwtPayload {
    try {
      const secret = process.env.JWT_SECRET || 'jwt_secret';
      const data = jwt.verify(token, secret) as jwt.JwtPayload;
      return data;
    } catch (error) {      
      throw new CustomError('Token must be a valid token', 401);
    }
  }
}

export default TokenService;