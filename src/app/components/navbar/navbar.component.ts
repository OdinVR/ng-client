import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Model } from '../../interfaces/model';
import { Environment } from '../../interfaces/environment';
import { Presentation } from '../../interfaces/presentation';
import { Scene } from '../../interfaces/scene';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private presentation: Presentation;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.currentPresentation.subscribe(presentation => this.presentation = presentation );
  }

}
