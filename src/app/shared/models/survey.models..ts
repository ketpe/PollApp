
export interface Survey {
    id: string;
    Survey_name: string;
    description?: string;
    created_at: Date;
    due_date?: Date;
    category_id: string;
    category: Category;
    questions: Question[];
    count_finished: number;
}

export type CategoryNames = "All Surveys" | "Team Activities" | "Health & Wellness" | "Gaming & Entertainment" | "Education & Learning" | "Lifestyle & Preferences" | "Technology & Innovation";

export interface Category {
    id: string;
    name: CategoryNames;
}

export interface Question {
    id: string;
    survey_id: string;
    question_text: string;
    type: "single" | "multiple";
    answer: Answer[];

}

export interface Answer {
    id: string;
    question_id: string;
    answer_text: string;
    selection_count: number;
}

