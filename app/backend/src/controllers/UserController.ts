import { NextFunction, Request, Response } from 'express';
import CustomError from '../Error/CustomError';
import { IUserService } from '../interfaces/UserInterfaces';

export default class UserLoginController {
  constructor(private userService : IUserService) {};

  public async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw new CustomError('All fields must be filled', 400);

      const userLoginResponse = await this.userService.execute(req.body);

      res.status(200).json(userLoginResponse);
    } catch (error) {
      next(error);
    }
  }

  public async validateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { tokenEmail } = req.body;

      const { role } = await this.userService.validate(tokenEmail);

      res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  }
}