import { Component } from '@angular/core';
import { SceneService } from './services/scene.service';
import { DialogService } from './services/dialog.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SceneService, DialogService ]
})
export class AppComponent {
  title = 'app works!';

  constructor() { }

}
