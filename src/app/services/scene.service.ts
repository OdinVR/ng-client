import { Injectable } from '@angular/core';
import { Model } from '../interfaces/model';
import { Environment } from '../interfaces/environment';
import { Scene } from '../interfaces/scene';
import { Presentation } from '../interfaces/presentation';

@Injectable()
export class SceneService {

  private codeCharacters = [
    'abcdefghijklmnopqrstuvwxyz'.split(''),
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
    '0123456789'.split('')
  ]

  constructor() {
    console.log('Scene service initialized ...');
  }

  public createDummyScene(): Scene {
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

  public createDummyScene2(): Scene {
    let shroud: Model = {
      name: 'Shroud',
      url: 'test url',
      xposition: 5,
      yposition: 10,
      zposition: 5,
      scale: 1,
      xrotation: 90,
      yrotation: 180,
      zrotation: 0,
      spin: true,
      spin_axis: 'x'
    }

    let quasar: Model = {
      name: 'Quasar',
      url: 'test url',
      xposition: 2,
      yposition: 4,
      zposition: -3,
      scale: 0.8,
      xrotation: 270,
      yrotation: 30,
      zrotation: -90,
      spin: true,
      spin_axis: 'z'
    }

    let env: Environment = {
      skybox_type: 'grid',
      skybox_position: 25,
      skybox_size: 50,
      camera_height: 1.8
    }

    let newScene: Scene = {
      name: 'test scene 2',
      models: [ shroud, quasar ],
      environment: env
    }

    return newScene;
  }

  public getEmptyScene(): Scene {
    return {
      name: 'New scene',
      models: [],
      environment: {
        skybox_position: 25,
        skybox_size: 50,
        skybox_type: 'grid',
        camera_height: 1.5
      }
    }
  }

  public getEmptyPresentation(): Presentation {
    let newPresentation: Presentation = {
      name: "New Presentation",
      sessionCode: this.generateSessionCode(),
      author: this.getUsername(),
      scenes: []
    }

    return newPresentation;
  }

  private getUsername(): string {
    return "Benedict Cumbersnack";
  }

  private generateSessionCode(): string {
    //Oh fun, let's do some discreet math!
    let code: string = "";

    for(let i = 1; i<=8; i++) {
      let characterSet = this.codeCharacters[this.getRandomInt(0, 2)]; //Choose one of the three sets
      code = code+characterSet[this.getRandomInt(0, characterSet.length-1)];
    }
    return code;
  }

  private getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
