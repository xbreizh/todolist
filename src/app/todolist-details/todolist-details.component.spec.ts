import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistDetailsComponent } from './todolist-details.component';

describe('TodolistDetailsComponent', () => {
  let component: TodolistDetailsComponent;
  let fixture: ComponentFixture<TodolistDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistDetailsComponent]
    });
    fixture = TestBed.createComponent(TodolistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
