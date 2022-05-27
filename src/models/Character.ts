import sequelize from "../db";
import { 
    DataTypes, 
    Model, 
    InferAttributes, 
    CreationOptional, 
    InferCreationAttributes 
} from 'sequelize';
import { randomSector } from '../utils';
import Equipment from "./Equipment";
import CharacterEquipment from "./CharacterEquipment";

export enum SecurityClearance {
    Infrared,
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Indigo,
    Violet,
    Ultraviolet,
}

class Character extends Model<
    InferAttributes<Character>,
    InferCreationAttributes<Character>
> {
    declare discordUserId: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    /// PART ONE: CORE INFORMATION >>>
    declare name: string;
    declare securityClearance: number;
    declare homeSector: string;
    declare cloneNumber: number;
    declare gender: string;
    //      personality traits handled through Many to Many 
    /// PART TWO: DEVELOPMENT >>>
    declare treasonStars: number;
    declare xp: number;
    // STATS >>>
    declare violence: number;
    declare brains: number;
    declare chutzpah: number;
    declare mechanics: number;
    /// PART THREE: SKILLS >>>
    declare athletics: number;
    declare guns: number;
    declare melee: number;
    declare throw: number;
    declare science: number;
    declare psychology: number;
    declare bureaucracy: number;
    declare alphaComplex: number;
    declare bluff: number;
    declare charm: number;
    declare intimidate: number;
    declare stealth: number;
    declare operate: number;
    declare engineer: number;
    declare program: number;
    declare demolitions: number;
    /// PART FOUR: WELLBEING >>>
    declare moxie: number;
    declare wounds: number;
    declare memory: number;
    /// PART FIVE: EQUIPMENT >>>
    //      equipment handled through many to many with Equipment table
}

Character.init(
    {
        discordUserId: {
            type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        name: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        securityClearance: {
            defaultValue: SecurityClearance.Red,
            type: DataTypes.TINYINT,
        },
        homeSector: {
            defaultValue: randomSector(),
            primaryKey: true,
            type: DataTypes.STRING(3),
        },
        cloneNumber: {
            type: DataTypes.TINYINT,
            defaultValue: 1,
        },
        gender: {
            type: DataTypes.STRING,
        },
        treasonStars: {
            type: DataTypes.TINYINT,
        },
        xp: {
            type: DataTypes.INTEGER,
        },
        violence: {
            type: DataTypes.TINYINT,
        },
        brains: {
            type: DataTypes.TINYINT,
        },
        chutzpah: {
            type: DataTypes.TINYINT,
        },
        mechanics: {
            type: DataTypes.TINYINT,
        },
        athletics: {
            type: DataTypes.TINYINT,
        },
        guns: {
            type: DataTypes.TINYINT,
        },
        melee: {
            type: DataTypes.TINYINT,
        },
        throw: {
            type: DataTypes.TINYINT,
        },
        science: {
            type: DataTypes.TINYINT,
        },
        psychology: {
            type: DataTypes.TINYINT,
        },
        bureaucracy: {
            type: DataTypes.TINYINT,
        },
        alphaComplex: {
            type: DataTypes.TINYINT,
        },
        bluff: {
            type: DataTypes.TINYINT,
        },
        charm: {
            type: DataTypes.TINYINT,
        },
        intimidate: {
            type: DataTypes.TINYINT,
        },
        stealth: {
            type: DataTypes.TINYINT,
        },
        operate: {
            type: DataTypes.TINYINT,
        },
        engineer: {
            type: DataTypes.TINYINT,
        },
        program: {
            type: DataTypes.TINYINT,
        },
        demolitions: {
            type: DataTypes.TINYINT,
        },
        moxie: {
            type: DataTypes.TINYINT,
        },
        wounds: {
            type: DataTypes.TINYINT,
        },
        memory: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'Character',
        sequelize
    }
);

export default Character;