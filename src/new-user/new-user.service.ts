import { Injectable } from '@nestjs/common';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';

@Injectable()
export class NewUserService {
  constructor(
    @InjectRepository(NewUserRepository) private readonly
    newUserRepository: NewUserRepository
  ){}

  // creates a new user using information entered
  create(createNewUserDto: CreateNewUserDto) {
    return 'This action adds a new newUser';
  }
}
