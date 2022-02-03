import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UsersCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class Users extends Model<Users, UsersCreationAttrs> {

  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'test@gmail.com', description: 'User e-mail'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: 'QwQ12345678_q', description: 'User password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'Vlad', description: 'User name'})
  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @ApiProperty({example: 'Nosorogoy', description: 'User second name'})
  @Column({type: DataType.STRING, allowNull: false})
  secondName: string;

  @ApiProperty({example: 'Admin', description: 'User role'})
  @Column({type: DataType.STRING, allowNull: false})
  role: string;
}