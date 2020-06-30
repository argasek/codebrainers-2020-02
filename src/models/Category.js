import {v1 as uuid} from "uuid";

class Category{
  constructor(name) {
    this.id = uuid();
    this.name = name;

  }


  copy() {
    const categoryCopy = new Category();
    categoryCopy.id = this.id;
    categoryCopy.name = this.name;

    return categoryCopy;
  }
}

export default Category;