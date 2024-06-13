import { Component, Input, input } from '@angular/core';
import { Post } from '../data/post';
import { Category } from '../data/category';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  @Input()
  post!:Post;
  
}
