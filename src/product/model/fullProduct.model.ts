import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IProductCreationAttrs {
  title?: string;
  productId?: number;
  counter?: number;
  shelving?: string;
  shelf?: string;
}

@Table({tableName: 'fullProduct'})
export class FullProduct extends Model<FullProduct, IProductCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  productId: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  counter: number;

  @Column({type: DataType.STRING})
  shelving: string;

  @Column({type: DataType.STRING})
  shelf: string;

  @Column({type: DataType.STRING})
  unaccounted: string;

  @Column({type: DataType.STRING, allowNull: true})
  transactionId: string;

  @Column({type: DataType.INTEGER, allowNull: true})
  insufficiency: number;
}
