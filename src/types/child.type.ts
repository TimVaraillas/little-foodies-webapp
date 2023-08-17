import type { User } from "./user.type";

export interface Child {
  _id?: string;
  first_name: string;
  last_name: string;
  gender: "masculine" | "feminine";
  birthday: Date;
  user?: User;
}
