import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeEditorComponent } from './keyframe-editor.component';

describe('KeyframeEditorComponent', () => {
  let component: KeyframeEditorComponent;
  let fixture: ComponentFixture<KeyframeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyframeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
