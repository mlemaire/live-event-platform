import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {findAll() {
    return [
      {
        id: 1,
        email: 'john@doe.com',
        role: 'USER',
      }
    ];
  }
}
