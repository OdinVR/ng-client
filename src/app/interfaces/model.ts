export class Model {
    _id?: string;
    name: string;
    url: string;
    xposition: number;
    yposition: number;
    zposition: number;
    scale: number;
    xrotation: number;
    yrotation: number;
    zrotation: number;
    spin: boolean;
    spin_axis: string;

    constructor() {
        this.name = '';
        this.xposition = 0;
        this.yposition = 0;
        this.zposition = 0;
        this.scale = 1;
        this.xrotation = 0;
        this.yrotation = 0;
        this.zrotation = 0;
        this.spin = false;
        this.spin_axis = 'x';
    }
}