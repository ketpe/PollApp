import { inject, Service, signal } from '@angular/core';
import { Survey } from '../models/survey.models.';
import { Supabase } from '../../supabase';

@Service()
export class Surveys {
    private dbService = inject(Supabase);


}
