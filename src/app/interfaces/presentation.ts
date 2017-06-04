import { Scene } from './scene';

export class Presentation {
    name: string;
    _id?: string;
    sessionCode: string;
    author?: string;
    scenes: Scene[];
}