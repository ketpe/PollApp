import { inject, Service, signal } from '@angular/core';
import { Supabase } from '../../supabase';
import { Category } from '../models/category.interface';

@Service()
export class Surveys {
    private dbService = inject(Supabase);
    categories = signal<Category[]>([]);

    async loadCategories() {
        let dbCategories = await this.dbService.loadCategories()
        if (!dbCategories) return
        this.categories.set(dbCategories);
    }


}
