import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../data/category';
import { CategoryService } from '../data/services/category.service';
import { hasLowerCase, hasNumeric, hasUpperCase } from '../validator/text-validator';
import { PostService } from '../data/services/post.service';
import Swal from 'sweetalert2';
import { Post, PostCreateInput } from '../data/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  categories : Category[]=[];
  
  form = this.fb.group({
    title: [
      '',
      {
        validators: [Validators.required,Validators.minLength(5),Validators.maxLength(150)
        ],
        updateOn: 'blur',
      },
    ],
    category: [
      '',
      {validators:[
        Validators.required,
 
      ]},
    ],
    content: [
      '',
      [
        Validators.required,
        Validators.maxLength(2500)
      ],
    ],
  });

  constructor(private CategoryService : CategoryService, private fb: FormBuilder,private PostService : PostService){
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

  get content(){
    return this.form.controls['content']
  }
  
  get category(){
    return this.form.controls['category']
  }
  
  get title(){
    return this.form.controls['title']
  }
  
  Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });



  
  onSubmit() {
    if (this.form.valid) {
      const post: PostCreateInput = {
        title: this.form.value.title!,
        category: this.categories.find(cat => cat.id === this.form.value.category!)!,
        content: this.form.value.content!,
        created_date: new Date()
      };
      this.PostService.addPost(post).subscribe(
        response => {
          this.Toast.fire({
            icon: 'success',
            title: 'Publication réussie!',
          });
          this.form.reset();
        },
        error => {
          this.Toast.fire({
            icon: 'error',
            title: 'Erreur!',
          });
        }
      );
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Formulaire invalide!',
      });
    }
  }
  
}
