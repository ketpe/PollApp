import { Service, signal } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'

@Service()
export class Supabase {
    private client: SupabaseClient;
    constructor() {
        const supabaseUrl = "https://hfjjdcadtadsskxuqfvd.supabase.co";
        const supabaseKey = "sb_publishable_W9gVNFW5mUFaEd2sZ2-EUg_lH7kbYpa"

        this.client = createClient(supabaseUrl, supabaseKey)
    }

    get supabase() {
        return this.client;
    }

    async loadCategories() {
        let { data: categories, error } = await this.supabase
            .from('categories')
            .select('*')
        if (!categories) return
        return categories
    }
}
