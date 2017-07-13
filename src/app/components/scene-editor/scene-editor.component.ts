import { Component, OnInit } from '@angular/core';
import { SceneService } from '../../services/scene.service';
import { DialogService } from '../../services/dialog.service';
import { DataService } from '../../services/data.service';
import { Model } from '../../interfaces/model';
import { Environment } from '../../interfaces/environment';
import { Presentation } from '../../interfaces/presentation';
import { Scene } from '../../interfaces/scene';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-scene-editor',
  templateUrl: './scene-editor.component.html',
  styleUrls: ['./scene-editor.component.css']
})
export class SceneEditorComponent implements OnInit {

  private spinAxisOptions = [
    { value: 'x', viewValue: 'X' },
    { value: 'y', viewValue: 'Y' },
    { value: 'z', viewValue: 'Z' }
  ];

  private skyboxTypeOptions = [
    { value: 'grid', viewValue: 'Grid' },
    { value: 'milky', viewValue: 'Space' }
  ];

  /* Presentation */
  private presentation: Presentation;

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

  constructor(private _dataService: DataService,
    private _sceneService: SceneService,
    private _dialogService: DialogService,
    private _sanitizer: DomSanitizer) {
    this.sceneIndex = 0;
    this.scenes = [];

    this.modelIndex = 0;
    this.currentModel = new Model();
    this.currentEnvironment = new Environment();
  }

  ngOnInit() {
    this._dataService.currentPresentation.subscribe(presentation => {
      this.presentation = presentation;
      this.presentation.scenes = this.scenes;
    });

    this.getNewScene();
  }

  addNewScene() {
    let newScene: Scene = null;

    //Get empty scene
    this._sceneService.getEmptyScene().subscribe(scene => {
      newScene = scene

      //Get environment for the scene
      this._sceneService.getEnvironment(newScene._id).subscribe(env => {
        newScene.environment = env
        this.updateSceneValues()
        console.log('new scene: ', newScene)
      })

      let sceneNames: string[] = [];
      this.scenes.forEach(scene => sceneNames.push(scene.name));
      sceneNames.sort();
      let greatestDuplicate: number = 0;
      sceneNames.forEach(sceneName => {
        if (sceneName.startsWith('New Scene')) {
          let num: number = +sceneName.substr(sceneName.lastIndexOf(' '));
          if (num >= greatestDuplicate) greatestDuplicate = num;
          greatestDuplicate++
        }
      });
      if (greatestDuplicate != 0) newScene.name = newScene.name.concat(' - ' + greatestDuplicate);
      console.log(newScene.name);
      this.scenes.push(newScene);
    })
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
    if (this.models.length != 0) this.deepClone(this.models[this.modelIndex], this.currentModel);
    this.deepClone(this.scenes[this.sceneIndex].environment, this.currentEnvironment);
  }

  deleteScene(index: number) {
    this.scenes.splice(index, 1);
    if (this.scenes.length == 0) {
      this.getNewScene();
    } else {
      this.selectScene(this.scenes.length - 1);
    }
  }

  deleteModel(index: number) {
    this.models.splice(index, 1);
    if (this.models.length != 0) {
      this.modelIndex = this.models.length - 1;
      this.selectModel(this.modelIndex);
    }
  }

  getNewScene(callback?) {
    this._sceneService.getEmptyScene().subscribe(scene => {

      let newScene = scene

      this._sceneService.getEnvironment(newScene._id).subscribe(env => {
        newScene.environment = env
        this.scenes.push(scene);
        this.selectScene(this.sceneIndex)

        this.models = this.scenes[this.sceneIndex].models;
        console.log('currentEnv: ', this.currentEnvironment)
        console.log('scenes: ', this.scenes)
      })

      //this.scenes.push(this._sceneService.createDummyScene());
      //this.scenes.push(this._sceneService.createDummyScene2());
    })
  }

  setSceneDownload() {
    this.downloadJsonHref = this._sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.scenes[this.sceneIndex])));
  }

  deepClone(dest: any, src: any) {
    dest = JSON.parse(JSON.stringify(src))
  }

  openDeleteSceneDialog() {
    this._dialogService
      .confirm('Delete Scene Dialog', 'Are you sure you want to delete this scene?')
      .subscribe(res => {
        if (res) this.deleteScene(this.sceneIndex);
      });
  }

  openDeleteModelDialog() {
    this._dialogService
      .confirm('Delete Model Dialog', 'Are you sure you want to delete this model?')
      .subscribe(res => {
        if (res) this.deleteModel(this.modelIndex);
      })
  }

}
