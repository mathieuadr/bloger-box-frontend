import { Category } from "./category";

export interface Post{
    id: String;
    title: String;
    content : string;
    date_creation:Date;
    category : Category;
}
export type PostCreateInput =Omit<Post,"id">;