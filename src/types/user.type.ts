export interface User {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AuthenticationCreditials {
  email: string;
  password: string;
}
