import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var SceneBuilder: any;

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit, AfterViewInit {

  

  constructor() { }

  ngOnInit() {
    //myimptest.testa();
    //var height = $("#3dscene").height();
    //var width = $("#3dscene").width();
    //scenebuilder.renderInPanel(width,height);
  }

  ngAfterViewInit() {
    //$.getScript('assets/js/renderinpanel.js', function(){});
    let height = $("#3dscene").height();
    let width = $("#3dscene").width();
    SceneBuilder.prototype.renderInPanel(width, height)
  }

}
