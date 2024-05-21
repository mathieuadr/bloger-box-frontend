import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../data/category';
import { CategoryService } from '../data/services/category.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  categories : Category[]=[];
  Postform=new FormGroup({
    Titre:new FormControl(''),
    Content:new FormControl(''),
    Category: new FormControl('')

  })
  constructor(private CategoryService : CategoryService){
  }
  ngOnInit(): void {
    this.loadCategory();
  }
  loadCategory(): void{
    this.CategoryService.getAllCategories().subscribe( categories => {
      this.categories=categories;
    }, error => {
      console.error('Failed to load categories', error);
    });
  }
  

  
}
