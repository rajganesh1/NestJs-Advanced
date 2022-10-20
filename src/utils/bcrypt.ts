/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
const salt = 10; //bcrypt.genSaltSync();

export function encodePassword(rawpassword: string) {
    return bcrypt.hashSync(rawpassword, salt);
}

export function comparePassword(rawpassword: string, hash: string) {
    return bcrypt.compareSync(rawpassword, hash);
}
