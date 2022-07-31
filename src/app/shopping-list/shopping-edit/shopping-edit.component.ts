import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements
  OnInit,
  ViewChild {
  @ViewChild('nameInput', {static: true}) nameInputCc: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputCc: ElementRef;
  descendants: boolean;
  emitDistinctChangesOnly: boolean;
  first: boolean;
  isViewQuery: boolean;
  read: any;
  selector: any;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddShoppingEdit() {
    const ingName = this.nameInputCc.nativeElement.value;
    const ingAmount = this.amountInputCc.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
