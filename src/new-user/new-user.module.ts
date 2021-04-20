import { Module } from '@nestjs/common';
import { NewUser } from './entities/new-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewUserService } from './new-user.service';
import { NewUserController } from './new-user.controller';

@Module({
  imports: TypeOrmModule.forFeature([NewUser, NewUserRepository]),
  controllers: [NewUserController],
  providers: [NewUserService]
})
export class NewUserModule {}
