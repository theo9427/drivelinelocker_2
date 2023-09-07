import { DataTypes } from "sequelize";
import sequelize from "./db";

export const Item = sequelize.define("Item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    device_label: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("ok", "damaged"),
        allowNull: false
    },
    serial_number: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Item',
    timestamps: false
});

export const Employee = sequelize.define("Employee", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM(["active", "inactive"]),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Employee',
    timestamps: false
});

Item.belongsTo(Employee, { foreignKey: "employee_id", as: "employee_name" });