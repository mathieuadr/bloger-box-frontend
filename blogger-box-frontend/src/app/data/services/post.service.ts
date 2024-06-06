import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post, PostCreateInput } from "../post";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";



@Injectable({
    providedIn: 'root'
  })
export class PostService{
    private PostUrl = `${environment.apiUrl}v1/posts`;

    
    constructor(private http: HttpClient){}
        getAll(): Observable<Post[]> {
            return this.http.get<Post[]>(this.PostUrl);
            }
        addPost(Post : PostCreateInput): Observable<Post>{
          return this.http.post<Post>(this.PostUrl,Post)
        }

    }
