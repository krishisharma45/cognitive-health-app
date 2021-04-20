import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewUserModule } from './new-user/new-user.module';

@Module({
  imports: [NewUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
