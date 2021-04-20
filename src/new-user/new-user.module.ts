import { Module } from '@nestjs/common';
import { NewUserService } from './new-user.service';
import { NewUserController } from './new-user.controller';

@Module({
  controllers: [NewUserController],
  providers: [NewUserService]
})
export class NewUserModule {}
