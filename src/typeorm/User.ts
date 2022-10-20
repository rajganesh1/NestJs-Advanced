/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
        unique: true,
    })
    username: string;

    @Column({
        nullable: true,
        default: '',
    })
    email: string;

    @Column({
        nullable: false,
        default: '',
    })
    password: string;
}