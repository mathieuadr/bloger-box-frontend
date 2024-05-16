import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post.component/add-post.component';


const routes: Routes = [
  {path:'',component: PostListComponent},
  {path:'addPost',component:AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
