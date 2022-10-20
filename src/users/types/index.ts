/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";

/* eslint-disable prettier/prettier */
export interface User {
    id: number;
    username: string;
    password: string;
}

export class SerializedUser {
    id: number;
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }

}