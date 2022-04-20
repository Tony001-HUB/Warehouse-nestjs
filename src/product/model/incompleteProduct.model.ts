import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IProductCreationAttrs {
  title?: string;
  productId?: number;
  counter?: number;
  shelving?: string;
  shelf?: string;
}

@Table({tableName: 'incompleteProduct'})
export class IncompleteProduct extends Model<IncompleteProduct, IProductCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false,  unique: true})
  title: string;

  @Column({type: DataType.INTEGER})
  productId: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  counter: number;

  @Column({type: DataType.STRING})
  shelving: string;

  @Column({type: DataType.STRING})
  shelf: string;

  @Column({type: DataType.STRING})
  unaccounted: string;

  @Column({type: DataType.STRING, allowNull: false})
  transactionId: string;

  @Column({type: DataType.INTEGER})
  insufficiency: number;
}
