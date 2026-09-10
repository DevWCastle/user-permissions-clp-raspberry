
export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  access: number;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  access?: number;
}


