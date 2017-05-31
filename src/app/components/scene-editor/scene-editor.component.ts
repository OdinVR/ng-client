import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-editor',
  templateUrl: './scene-editor.component.html',
  styleUrls: ['./scene-editor.component.css']
})
export class SceneEditorComponent implements OnInit {

  private spinAxis = 'x';

  private spinAxisOptions = [
    {value: 'x', viewValue: 'X'},
    {value: 'y', viewValue: 'Y'},
    {value: 'z', viewValue: 'Z'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
