import { Category } from "./category";

export interface Post{
    id: String;
    title: String;
    content : string;
    createdDate:Date;
    category : Category;
}