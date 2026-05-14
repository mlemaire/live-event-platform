import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

export type UserRole = 'USER' | 'ORGANIZER' | 'ADMIN';

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    findAll() {
    return this.prisma.user.findMany();
  }
}
