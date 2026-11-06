import { Category } from "./category";
import { Question } from "./question";

export interface Survey {
    id: string;
    name: string;
    category_id: string;
    end_date: string | null;
    created_at: string;
    categories?: Category; // Supabase Join-Daten
    questions?: Question[];

}
