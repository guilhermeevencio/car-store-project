export interface IUser {
  username: string
  email: string
  role: string
  token: string
}

export interface IUserInfoResponse extends IUser {
  id: number
}
