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
  private currentModel: Model;

  /* Environment properties */
  private currentEnvironment: Environment;

  constructor( private _sceneService: SceneService ) {
    this.sceneIndex = 0;
    this.scenes = [];
    
    this.currentModel = new Model();
    this.currentEnvironment = new Environment();
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
    this.currentModel = this.models[index];
  }

  updateViewModelProperties(index: number) {
    this.deepClone(this.currentModel, this.models[this.modelIndex]);
  }

  updateSceneValues() {
    this.deepClone(this.models[this.modelIndex], this.currentModel);
    this.deepClone(this.scenes[this.sceneIndex].environment, this.currentEnvironment);
  }

  deepClone(dest: any, src: any) {
    dest = JSON.parse(JSON.stringify(src))
  }

  /*
  deepCloneModel(dest: Model, src: Model) {
    dest.name = src.name;
    dest.xposition = src.xposition;
    dest.yposition = src.yposition;
    dest.zposition = src.zposition;
    dest.scale = src.scale;
    dest.xrotation = src.xrotation;
    dest.yrotation = src.yrotation;
    dest.zrotation = src.zrotation;
    dest.spin = src.spin;
    dest.spin_axis = src.spin_axis;
  }

  deepCloneEnvironment(dest: Environment, src: Environment) {
    dest.skybox_position = src.skybox_position;
    dest.skybox_size = src.skybox_size;
    dest.skybox_type = src.skybox_type;
    dest.camera_height = src.camera_height;
  }
  */

}
