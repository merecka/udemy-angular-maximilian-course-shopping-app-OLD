import { Ingredient } from "./../../shared/ingredient.model";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-edit-shopping-list",
  templateUrl: "./edit-shopping-list.component.html",
  styleUrls: ["./edit-shopping-list.component.css"],
})
export class EditShoppingListComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  @Output() ingredientEmitter = new EventEmitter<Ingredient>();

  constructor() {}

  addIngredient() {
    this.ingredientEmitter.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }

  ngOnInit(): void {}
}
