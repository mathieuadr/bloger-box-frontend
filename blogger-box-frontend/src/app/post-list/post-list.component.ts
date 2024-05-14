import { Component, OnInit } from '@angular/core';
import { PostService } from '../data/services/post.service';
import { Post } from '../data/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{
  
  posts :Post[]=[];
  
  constructor(private postService : PostService){
  }

  ngOnInit(): void {
      this.loadPosts();
  }

  loadPosts(): void{
    this.postService.getAll().subscribe( posts => {
      this.posts=posts;
    });
  }


}
