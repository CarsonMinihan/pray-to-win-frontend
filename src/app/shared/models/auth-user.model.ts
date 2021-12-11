export class AuthUser {
  constructor(
    public email: string,
    public username: string,
    public password: string,
    public confirmPassword?: string,
    public name?: string
  ) {}
}
