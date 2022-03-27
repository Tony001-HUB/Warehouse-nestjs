import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
  @ApiProperty({example: 'user@gmail.com', description: 'User e-mail'})
  readonly email: string;
  @ApiProperty({example: 'QWERTY12345', description: 'User password'})
  readonly password: string;
}