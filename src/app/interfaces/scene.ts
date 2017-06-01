import { Model } from './model';
import { Environment } from './environment';

export class Scene {
    _id: string;
    name: string;
    models: Model[];
    environment: Environment;
}