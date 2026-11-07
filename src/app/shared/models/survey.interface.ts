import { Category } from "./category.interface";
import { Question } from "./question.interface";

export interface Survey {
    id?: string;
    survey_name: string;
    survey_description: string;
    survey_created_at?: string;
    survey_due_date: string;
    category_id: Category;

}
