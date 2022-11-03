import React, { useState } from 'react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        break
    }
  }
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(email, password)
  }
  return (
    <div>
      <div>
        <h1>Acesse a sua conta</h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
