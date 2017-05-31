import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { ViewportComponent } from './components/viewport/viewport.component';
import { SceneEditorComponent } from './components/scene-editor/scene-editor.component';
import { KeyframeEditorComponent } from './components/keyframe-editor/keyframe-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    SceneEditorComponent,
    KeyframeEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
