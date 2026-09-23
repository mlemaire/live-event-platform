import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
