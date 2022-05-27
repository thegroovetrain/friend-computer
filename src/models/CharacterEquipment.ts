import sequelize from "../db";
import {
    DataTypes,
    Model,
    InferAttributes,
    CreationOptional,
    InferCreationAttributes,
    ForeignKey,
} from 'sequelize';
import Character from "./Character";
import Equipment from "./Equipment";

class CharacterEquipment extends Model<
    InferAttributes<CharacterEquipment>,
    InferCreationAttributes<CharacterEquipment>
> {
    declare characterName: ForeignKey<Character['name']>;
    declare characterHomeSector: ForeignKey<Character['homeSector']>;
    declare equipmentId: ForeignKey<Equipment['id']>;
    declare owned: number;
    declare requisitioned: number;
    declare inPersonalStorage: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

CharacterEquipment.init(
    {
        owned: DataTypes.INTEGER,
        requisitioned: DataTypes.INTEGER,
        inPersonalStorage: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'CharacterEquipment',
        sequelize
    }
)

Character.belongsToMany(Equipment, { through: CharacterEquipment });
Equipment.belongsToMany(Character, { through: CharacterEquipment });

export default CharacterEquipment;