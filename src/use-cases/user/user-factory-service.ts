import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();

    newUser.name = updateUserDto.name;
    newUser.email = updateUserDto.email;
    newUser.password = updateUserDto.password;

    return newUser;
  }
}
