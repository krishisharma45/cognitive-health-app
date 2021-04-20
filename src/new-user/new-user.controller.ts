import { Controller, Post } from '@nestjs/common';
import { NewUserService } from './new-user.service';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';

@Controller('new-user')
export class NewUserController {
  constructor(private readonly newUserService: NewUserService) {}

  // create a new user using new-user entity
  @Post()
  create(@Body() createNewUserDto: CreateNewUserDto) {
    return this.newUserService.create(createNewUserDto);
  }

}
