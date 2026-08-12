import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTemplateComponent } from './agent-template.component';

describe('AgentTemplateComponent', () => {
  let component: AgentTemplateComponent;
  let fixture: ComponentFixture<AgentTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentTemplateComponent]
    });
    fixture = TestBed.createComponent(AgentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
