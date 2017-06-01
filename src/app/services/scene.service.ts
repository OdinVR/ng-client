import { Injectable } from '@angular/core';
import { Model } from '../interfaces/model';
import { Environment } from '../interfaces/environment';
import { Scene } from '../interfaces/scene';

@Injectable()
export class SceneService {

  constructor() {
    console.log('Scene service initialized ...');
  }

  private createDummyScene(): Scene {
    let saracen: Model = {
      name: 'Saracen',
      url: 'test url',
      xposition: 5,
      yposition: 10,
      zposition: 5,
      scale: 1,
      xrotation: 90,
      yrotation: 180,
      zrotation: 0,
      spin: false,
      spin_axis: 'x'
    }

    let lagg: Model = {
      name: 'Lagg',
      url: 'test url',
      xposition: 2,
      yposition: 4,
      zposition: -3,
      scale: 0.8,
      xrotation: 270,
      yrotation: 30,
      zrotation: -90,
      spin: true,
      spin_axis: 'y'
    }

    let basilisk: Model = {
      name: 'Basilisk',
      url: 'test url',
      xposition: 0,
      yposition: 8,
      zposition: 4,
      scale: 1.2,
      xrotation: 15,
      yrotation: 45,
      zrotation: 180,
      spin: true,
      spin_axis: 'z'
    }

    let env: Environment = {
      skybox_type: 'milky',
      skybox_position: 20,
      skybox_size: 100,
      camera_height: 1.5
    }

    let newScene: Scene = {
      name: 'test scene',
      models: [ lagg, basilisk, saracen ],
      environment: env
    }

    return newScene;
  }

}
