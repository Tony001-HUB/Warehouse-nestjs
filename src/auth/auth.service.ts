import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { Users } from 'src/users/model/users.model';

@Injectable()
export class AuthService {
    
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    public async loginUser(authUserDto: AuthDto) {
        let user = await this.validateUserData(authUserDto);
        return this.generateToken(user);
    }

    public async userRegistration(authDto: UsersDto) {
        console.log("___________2", authDto);
        
        const candidate = await this.usersService.getUserByEmail(authDto.email);
        console.log("___________3", candidate);
        
        if (candidate) {
          throw new HttpException('This user already exists', HttpStatus.BAD_REQUEST);
        } else {
            const hashPassword = await bcrypt.hash(authDto.password, 5);
            const user = await this.usersService.createUsers(
                {
                    name: authDto.name, 
                    secondName: authDto.secondName,
                    email: authDto.email,
                    password: hashPassword,
                    role: authDto.role,
                    creatorInfo: {email: authDto.creatorInfo.email, role: authDto.creatorInfo.role}
                }
                );
            return this.generateToken(user);
        }
    }

    private async generateToken(user: Users) {
        const payload = { email: user.email, id: user.id }
        return { token: this.jwtService.sign(payload) }
    }  
    private async validateUserData(authUserDto: AuthDto) {
        console.log("___________1", authUserDto);
        const user = await this.usersService.getUserByEmail(authUserDto.email);
        const passwordsIsEqual = await bcrypt.compare(authUserDto.password, user.password);
        if (user && passwordsIsEqual) {
          return user;
        } else {
            throw new UnauthorizedException({message: 'Invalid email or password'});
        }
    }
}
