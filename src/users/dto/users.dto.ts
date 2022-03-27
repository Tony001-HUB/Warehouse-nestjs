import { ApiProperty } from "@nestjs/swagger";

export class UsersDto {
    @ApiProperty({example: 'Max', description: 'User name'})
    readonly name: string;
    @ApiProperty({example: 'Dronow', description: 'User second name'})
    readonly secondName: string;
    @ApiProperty({example: 'user@gmail.com', description: 'User e-mail'})
    readonly email: string;
    @ApiProperty({example: 'QWERTY12345', description: 'User password'})
    readonly password: string;
    @ApiProperty({example: 'User', description: 'User role'})
    readonly role: string;
    @ApiProperty({example: 'Admin', description: 'The role of the creator'})
    readonly creatorInfo: {email: string, role: string};
}