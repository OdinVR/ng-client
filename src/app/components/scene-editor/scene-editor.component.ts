import { Component, OnInit } from '@angular/core';
import { SceneService } from '../../services/scene.service';
import { Model } from '../../interfaces/model';
import { Environment } from '../../interfaces/environment';
import { Scene } from '../../interfaces/scene';

@Component({
  selector: 'app-scene-editor',
  templateUrl: './scene-editor.component.html',
  styleUrls: ['./scene-editor.component.css']
})
export class SceneEditorComponent implements OnInit {

  private spinAxisOptions = [
    {value: 'x', viewValue: 'X'},
    {value: 'y', viewValue: 'Y'},
    {value: 'z', viewValue: 'Z'}
  ];

  private skyboxTypeOptions = [
    {value: 'grid', viewValue: 'Grid'},
    {value: 'milky', viewValue: 'Space'}
  ];

  /* Scene properties */
  private sceneIndex: number;
  private scenes: Scene[];
  private sceneNames:string[] = [ 'New Scene', 'Scene 1', 'Scene 2'];

  /* Model properties */
  private models: Model[];
  private modelIndex: number;

  private modelName: string;
  private xposition: number;
  private yposition: number;
  private zposition: number;
  private scale: number;
  private xrotation: number;
  private yrotation: number;
  private zrotation: number;
  private spin: boolean;
  private spinAxis: string;

  /* Environment properties */
  private skyboxType: string;
  private skyboxSize: number;
  private skyboxPosition: number;
  private cameraHeight: number;

  constructor( private _sceneService: SceneService ) {
    this.sceneIndex = 0;
    this.scenes = [];
    
    this.modelName = '';
    this.modelIndex = 0;
    this.xposition = 0;
    this.yposition = 0;
    this.zposition = 0;
    this.scale = 1;
    this.xrotation = 0;
    this.yrotation = 0;
    this.zrotation = 0;
    this.spin = false;
    this.spinAxis = 'x';

    this.skyboxType = 'grid'
    this.skyboxSize = 50;
    this.skyboxPosition = 25;
    this.cameraHeight = 1.5;

  }

  ngOnInit() {
    this.scenes.push(this._sceneService.getEmptyScene());
    this.models = this.scenes[this.sceneIndex].models;

    this.scenes.push(this._sceneService.createDummyScene());
  }

  selectScene(index: number) {
    this.sceneIndex = index;
    this.models = this.scenes[this.sceneIndex].models;
  }

  selectModel(index: number) {
    this.modelIndex = index;
    this.updateViewModelProperties(index);
  }

  updateViewModelProperties(index: number) {
    this.modelName = this.models[this.modelIndex].name;
    this.xposition = this.models[this.modelIndex].xposition;
    this.yposition = this.models[this.modelIndex].yposition;
    this.zposition = this.models[this.modelIndex].zposition;
    this.scale = this.models[this.modelIndex].scale;
    this.xrotation = this.models[this.modelIndex].xrotation;
    this.yrotation = this.models[this.modelIndex].yrotation;
    this.zrotation = this.models[this.modelIndex].zrotation;
    this.spin = this.models[this.modelIndex].spin;
    this.spinAxis = this.models[this.modelIndex].spin_axis;
  }

  updateSceneValues() {
    this.models[this.modelIndex].name = this.modelName;
    this.models[this.modelIndex].xposition = this.xposition;
    this.models[this.modelIndex].yposition = this.yposition;
    this.models[this.modelIndex].zposition = this.zposition;
    this.models[this.modelIndex].scale = this.scale;
    this.models[this.modelIndex].xrotation = this.xrotation;
    this.models[this.modelIndex].yrotation = this.yrotation;
    this.models[this.modelIndex].zrotation = this.zrotation;
    this.models[this.modelIndex].spin = this.spin;
    this.models[this.modelIndex].spin_axis = this.spinAxis;

    this.scenes[this.sceneIndex].environment.skybox_type = this.skyboxType;
    this.scenes[this.sceneIndex].environment.skybox_size = this.skyboxSize;
    this.scenes[this.sceneIndex].environment.skybox_position = this.skyboxPosition;
    this.scenes[this.sceneIndex].environment.camera_height = this.cameraHeight;
  }

}
