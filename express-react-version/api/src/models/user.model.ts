import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  Unique,
} from 'sequelize-typescript';
import { IUser } from '../types/models.interfaces';

@Table({
  tableName: 'users',
  freezeTableName: true,
  timestamps: false,
})
export class User extends Model<IUser> implements IUser {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  lastName!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  avatarUrl?: string | undefined;

  @AllowNull(false)
  @Default('user')
  @Column(DataType.ENUM('user', 'admin'))
  role!: 'user' | 'admin';
}
