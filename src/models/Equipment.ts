import sequelize from '../db';
import {
    DataTypes, 
    Model, 
    InferAttributes, 
    CreationOptional, 
    InferCreationAttributes,
} from 'sequelize';
import Character from './Character';
import CharacterEquipment from './CharacterEquipment';

class Equipment extends Model<
    InferAttributes<Equipment>,
    InferCreationAttributes<Equipment>
> {
    declare id: CreationOptional<number>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare name: string;
    declare stat: string;
    declare actionOrder: number;
    declare weight: string;
    declare level: number;
    declare description: string;
}

Equipment.init(
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        stat: {
            type: DataTypes.STRING(9),
        },
        actionOrder: {
            type: DataTypes.TINYINT,
        },
        weight: {
            type: DataTypes.STRING(8),
        },
        level: {
            type: DataTypes.TINYINT,
        },
        description: {
            type: DataTypes.TEXT
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'Equipment',
        sequelize
    }
)

export default Equipment;