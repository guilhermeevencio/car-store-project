import UserModel from '../database/models/UserModel'

interface ILoginRequest {
  password: string
  email: string
}

interface IUserCredentials extends ILoginRequest {
  role: string
  username: string
}

interface IUserLoginResponse {
  username: string
  email: string
  token: string
  role: string
}

interface IUserService {
  execute(userInfo: ILoginRequest): Promise<IUserLoginResponse>
  validate(email: string): Promise<UserModel>
}



export {
  ILoginRequest,
  IUserCredentials,
  IUserService,
  IUserLoginResponse,
}