import { Recipe } from "./../recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test",
      "https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is a test",
      "https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
