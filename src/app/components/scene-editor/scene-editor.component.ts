import { Component, OnInit } from '@angular/core';
import { SceneService } from '../../services/scene.service';
import { DialogService } from '../../services/dialog.service';
import { Model } from '../../interfaces/model';
import { Environment } from '../../interfaces/environment';
import { Scene } from '../../interfaces/scene';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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

  /* Model properties */
  private models: Model[];
  private modelIndex: number;
  private currentModel: Model;

  /* Environment properties */
  private currentEnvironment: Environment;

  /* Href for scene download */
  private downloadJsonHref;

  constructor( private _sceneService: SceneService, private _dialogService: DialogService, private _sanitizer: DomSanitizer ) {
    this.sceneIndex = 0;
    this.scenes = [];
    
    this.currentModel = new Model();
    this.currentEnvironment = new Environment();
  }

  ngOnInit() {
    this.scenes.push(this._sceneService.getEmptyScene());
    this.models = this.scenes[this.sceneIndex].models;

    this.scenes.push(this._sceneService.createDummyScene());
    this.scenes.push(this._sceneService.createDummyScene2());
  }

  selectScene(index: number) {
    this.sceneIndex = index;
    this.models = this.scenes[index].models;
    this.currentModel = this.models[0];
    this.currentEnvironment = this.scenes[index].environment;
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

  deleteScene(index: number) {
    this.scenes.splice(index, 1);
    if(this.scenes.length == 0) this.scenes.push(this._sceneService.getEmptyScene());
    this.selectScene(0);
  }

  setSceneDownload() {
    this.downloadJsonHref = this._sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.scenes[this.sceneIndex])));
  }

  deepClone(dest: any, src: any) {
    dest = JSON.parse(JSON.stringify(src))
  }

  openDeleteDialog() {
    this._dialogService
      .confirm('Delete Scene Dialog', 'Are you sure you want to delete this scene?')
      .subscribe(res => {
        if(res) this.deleteScene(this.sceneIndex);
      });
  }

}
