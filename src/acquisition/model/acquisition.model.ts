import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAcquisition {
    name: string;
    goods: string;
    orderNumber: number;
    quantity: number;
    normHour: number;
    date: string;
    customerShop: string;
    foundationDocument: string;
}

@Table({tableName: 'acquisition'})
export class Acquisition extends Model<Acquisition, IAcquisition> {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    goods: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    orderNumber: number;

    @Column({type: DataType.INTEGER})
    quantity: number;

    @Column({type: DataType.INTEGER})
    normHour: number;

    @Column({type: DataType.STRING})
    date: string;

    @Column({type: DataType.STRING})
    customerShop: string;

    @Column({type: DataType.STRING})
    foundationDocument: string;
}
