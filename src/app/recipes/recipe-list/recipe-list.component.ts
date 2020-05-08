import { Recipe } from "./../recipe.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test",
      "https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is another test",
      "https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
