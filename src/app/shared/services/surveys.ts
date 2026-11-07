import { inject, Service, signal } from '@angular/core';
import { Supabase } from '../../supabase';

@Service()
export class Surveys {
    private dbService = inject(Supabase);


}
