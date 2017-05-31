import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-editor',
  templateUrl: './scene-editor.component.html',
  styleUrls: ['./scene-editor.component.css']
})
export class SceneEditorComponent implements OnInit {

  private spinAxis: string = 'x';
  private spinAxisOptions = [
    {value: 'x', viewValue: 'X'},
    {value: 'y', viewValue: 'Y'},
    {value: 'z', viewValue: 'Z'}
  ];

  private skyboxType: string = 'grid';
  private skyboxTypeOptions = [
    {value: 'grid', viewValue: 'Grid'},
    {value: 'milky', viewValue: 'Galaxy'}
  ];

  constructor() { }

  ngOnInit() {
  }

}