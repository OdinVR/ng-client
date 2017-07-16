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

    const sceneJSON = {
      models: [{ path: "edb61b2b6dfc7e2d2e11e87f9bf41b71", posx: 0, posy: 0, posz: 0, scale: 3, rotx: 0, roty: 0, rotz: 0, spin: true, spinaxis: 'X' }],
      skybox: "grid",
      skyboxSize: "50",
      skyboxPos: "25",
      cameraHeight: 1.5,
    };
	  SceneBuilder.prototype.receiveSceneData(sceneJSON);
  }

}
