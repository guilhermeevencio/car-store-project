import { ILoginRequest, IUserLoginResponse } from '../../interfaces/UserInterfaces'

const userMock = {
  id: 1,
  username: 'guilherme',
  email: 'guilherme@email.com',
  role: 'Admin',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const userLoginResponse: IUserLoginResponse = {
  username: 'guilherme',
  email: 'guilherme@email.com',
  role: 'Admin',
  token: 'my_token'
}

const userCredentialsMock: ILoginRequest = {
  email: "admin@admin.com",
  password: "secret_admin",
}

export {
  userMock,
  userCredentialsMock,
  userLoginResponse,
}