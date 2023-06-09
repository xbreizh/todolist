import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist-details',
  templateUrl: './todolist-details.component.html',
  styleUrls: ['./todolist-details.component.css']
})

export class TodolistDetailsComponent {

  itemList: string[] = ["Walk the walk", "Talk the talk", "Buy groceries"];


  formData = {
    item: '',
    done: false
  };

  myForm: any;

  constructor() {
    this.myForm = new FormGroup({
      item: new FormControl()
  });
  }

  onSubmit() {
    console.warn('getting data ' + this.formData.item);
    
    this.itemList.push(this.formData.item);
    console.log('list: ' + this.itemList);
    this.myForm.reset();
    
  }


  
}
