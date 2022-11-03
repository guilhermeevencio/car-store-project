import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class CarModel extends Model {
  declare id: number;
  declare name: string;
  declare model: string;
  declare brand: string;
  declare imageUrl: string;
  declare price: number;
}

CarModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
  },
  model: {
    type: STRING,
    allowNull: false,
  },
  brand: {
    type: STRING,
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  }

}, {
  underscored: true,
  sequelize: db,
  modelName: 'cars',
  timestamps: false,
});

export default CarModel;