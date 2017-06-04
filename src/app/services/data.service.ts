import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Presentation } from '../interfaces/presentation';
import { SceneService } from './scene.service';
@Injectable()
export class DataService {

  private presentationSource = new BehaviorSubject<Presentation>(this._sceneService.getEmptyPresentation());
  currentPresentation = this.presentationSource.asObservable();

  constructor(private _sceneService: SceneService) { }

  changePresentation(presentation: Presentation) {
    this.presentationSource.next(presentation);
  }

}
