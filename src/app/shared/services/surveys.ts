import { Service } from '@angular/core';
import { Survey } from '../models/survey.models.';

@Service()
export class Surveys {

    private tmpSurvey: Survey[] = [
        {
            id: "1",
            Survey_name: "UmfrageName",
            description: "testBeschreibung",
            created_at: new Date(),
            due_date: new Date(new Date().setDate(new Date().getDate() + 7)),
            category_id: "1",
            category: {
                id: "2",
                name: "Team Activities"
            },
            questions: [
                {
                    id: "1",
                    survey_id: "1",
                    question_text: "Testfrage 1",
                    type: "single",
                    answer: [
                        {
                            id: "2",
                            question_id: "1",
                            answer_text: "sTestanwort",
                            selection_count: 25,
                        }
                    ]
                }
            ],
            count_finished: 2,
        }

    ]
    getAllSurvey() {
        let allSurveys = this.tmpSurvey
        return allSurveys;
    }

    setNewSurvey() {

    }
    updateSurveybyId() { }

}
