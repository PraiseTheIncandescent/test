export class Antihero {
    id: number;
    name: string;
    isAlreadyDead: boolean;

    constructor(id: number, name: string, isAlreadyDead?: boolean) {
        this.id = id;
        this.name = name;
        this.isAlreadyDead = isAlreadyDead;
    }
}