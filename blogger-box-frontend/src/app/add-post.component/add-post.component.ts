import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  Postform=new FormGroup({
    Titre:new FormControl(''),
    Content:new FormControl('')

  })

  
}
