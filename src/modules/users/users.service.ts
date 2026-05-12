import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type UserRole = 'USER' | 'ORGANIZER' | 'ADMIN';

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            email: 'john@doe.com',
            password: '$2b$10$9p68wtHpb/XU4Rk/zJi9oOASjLP0l./YzRNcEAQPmcwjyspCyYts2',
            role: 'ADMIN',
        }
    ];

    findByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    findAll() {
    return this.users
  }
}
