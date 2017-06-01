import { Component, OnInit } from '@angular/core';

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
  private sceneName: string;

  /* Model properties */
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

  constructor() {
    this.sceneName = 'New scene'

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
  }

}
