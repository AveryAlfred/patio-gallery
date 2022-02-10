export interface User {
  pk: string;
  sk: string;
  email: string;
  name: string;
  password: string;
  verificationCode: string;
  passwordResetCode: string | null;
  verified: boolean;
}
