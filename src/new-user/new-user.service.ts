import { Injectable } from '@nestjs/common';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';

@Injectable()
export class NewUserService {
  create(createNewUserDto: CreateNewUserDto) {
    return 'This action adds a new newUser';
  }

  findAll() {
    return `This action returns all newUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newUser`;
  }

  update(id: number, updateNewUserDto: UpdateNewUserDto) {
    return `This action updates a #${id} newUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} newUser`;
  }
}
