import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersDto } from './dto/users.dto';
import { Users } from './model/users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
<<<<<<< HEAD
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 200, type: Users })
  @Post()
  createUser(@Body() userDto: UsersDto) {
    return this.usersService.createUsers(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [Users] })
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by email' })
  @ApiResponse({ status: 200, type: Users })
  @Get('/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }
=======
    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'User creation'})
    @ApiResponse({status: 200, type: Users})
    @Post()
    createUser(@Body() userDto: UsersDto) {
      return this.usersService.createUsers(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [Users]})
    @Get()
    getUsers() {
      return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Get user by email'})
    @ApiResponse({status: 200, type: Users})
    @Get('/:email')
    getUserByEmail(@Param('email') email: string) {
      return this.usersService.getUserByEmail(email);
    }
>>>>>>> 1efde9d5eb10719d158a4cd80e2df4ac813b5786
}
