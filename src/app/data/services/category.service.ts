import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";
import { Category } from "../category";



@Injectable({
    providedIn: 'root'
  })
export class CategoryService{
    private AllCatUrl = `${environment.apiUrl}v1/categories`;

    
    constructor(private http: HttpClient){}
        getAllCategories(): Observable<Category[]> {
            return this.http.get<Category[]>(this.AllCatUrl);
            }

    }
