import sequelize from "../db";
import { Sequelize, DataTypes } from 'sequelize';

enum SecurityClearance {
    InfraRed = "",
    Red = "R",
    Orange = "O",
    Yellow = "Y",
    Green = "G",
    Blue = "B",
    Indigo = "I",
    Violet = "V",
    UltraViolet = "U"
}

interface ParanoiaCharacterSheet {
    coreInformation: {
        name: string;
        securityClearance: SecurityClearance;
    };

}

const Character = sequelize.define('character', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        type: DataTypes.INTEGER,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
    },
    securityClearance: {
        field: 'security_clearance',
        type: DataTypes.ENUM({
            values: [
                SecurityClearance.InfraRed,
                SecurityClearance.Red,
                SecurityClearance.Orange,
                SecurityClearance.Yellow,
                SecurityClearance.Green,
                SecurityClearance.Blue,
                SecurityClearance.Indigo,
                SecurityClearance.Violet,
                SecurityClearance.UltraViolet,
            ]
        }),
    },
    homeSector: {
        field: 'home_sector',
        type: DataTypes.STRING(3),
    }
})