import { Component } from "@angular/core";
import { CategoriesService } from "../categories.service";

@Component({
  selector: "add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.scss"],
})
export class AddCourseComponent {
  categories;
  constructor(service: CategoriesService) {
    this.categories = service.getCategories();
    console.log(this.categories);
  }
}
