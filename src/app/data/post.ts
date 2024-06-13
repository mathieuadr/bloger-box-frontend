import { Category } from "./category";

export interface Post {
    id: String;
    title: String;
    content: string;
    created_date: Date;
    category: Category;
}
export type PostCreateInput = Omit<Post, "id">;