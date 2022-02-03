import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersDto } from 'src/users/dto/users.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Log in by email and password'})
    @ApiResponse({status: 200, type: AuthDto})
    @Post('/login')
    public login(@Body() loginInfo: AuthDto) {
      return this.authService.loginUser(loginInfo);
    }

    @ApiOperation({summary: 'Registration with email and password'})
    @ApiResponse({status: 200, type: UsersDto})
    @Post('/registration')
    public registration(@Body() registrationInfo: UsersDto) {
      return this.authService.userRegistration(registrationInfo);
    }
}
