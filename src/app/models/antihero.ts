import { Entity } from './entity';

export class Antihero extends Entity{
    isAlreadyDead: boolean;

    constructor(id: number, name: string, age?: number, isAlreadyDead?: boolean) {
        super(id, name, age);
        this.isAlreadyDead = isAlreadyDead;
    }
}