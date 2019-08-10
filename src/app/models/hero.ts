import { Entity } from './entity';

export class Hero extends Entity {

    constructor(id: number, name: string, age?: number) {
        super(id, name, age);
    }
}