export class Environment {
    skybox_type: string;
    skybox_size: number;
    skybox_position: number;
    camera_height: number;

    constructor() {
        this.skybox_type = 'grid'
        this.skybox_size = 50;
        this.skybox_position = 25;
        this.camera_height = 1.5;
    }
}