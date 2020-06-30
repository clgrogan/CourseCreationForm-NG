import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor() {}
  getCategories = () => {
    return [
      { id: 1, name: "Art" },
      { id: 2, name: "Business" },
      { id: 3, name: "Development" },
      { id: 4, name: "Language" },
    ];
  };
}
