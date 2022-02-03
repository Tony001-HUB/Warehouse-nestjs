import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersDto } from './dto/users.dto';
import { Users } from './model/users.model';

@Injectable()
export class UsersService {
    //1-администратор 2-ОМА 3-ОМТСиК
    private availableUsers: Array<string> = ['Admin'];
    
    constructor(@InjectModel(Users) private userRepository: typeof Users) {}

    public async createUsers(newUser: UsersDto) {
        if(this.availableUsers.includes(newUser.creatorInfo.role) && this.getUserByEmail(newUser.creatorInfo.email) || (await this.getAllUsers()).length === 0) {
            return await this.userRepository.create(newUser);
        } else {
            throw new HttpException('There is no such user or there is no access.', HttpStatus.BAD_REQUEST);
        }
    }
  
    public async getAllUsers() {
        return await this.userRepository.findAll({include: {all: true}});
      }
    
    public async getUserByEmail(email: string) {
      return await this.userRepository.findOne({where: {email}, include: {all: true}})
    }
}
