import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../post";
import { Observable } from "rxjs";



@Injectable()
export class PostService{
    private PostUrl = `http://localhost:8082/v1/posts`;
    
    constructor(private http: HttpClient){}
        getAll(): Observable<Post[]> {
            return this.http.get<Post[]>(this.PostUrl);
            }

    }