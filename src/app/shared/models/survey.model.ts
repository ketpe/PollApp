import { Category } from "./category.model";
import { Question } from "./question.model";

export interface Survey {
    id?: string;
    survey_name: string;
    survey_description: string;
    survey_created_at?: string;
    survey_due_date: string;
    category_id: Category;

}
