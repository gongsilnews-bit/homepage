'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 전역 fetch에 { cache: 'no-store' } 옵션을 적용하여 캐시 문제를 완벽히 무효화합니다.
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  global: {
    fetch: (url, init) => fetch(url, { ...init, cache: 'no-store' }),
  },
});

export interface HomepageSettings {
  id: string;
  subdomain: string;
  theme_name: string;
  settings: Record<string, any>;
}

export async function getHomepageSettings(tenantId: string) {
  try {
    const { data, error } = await supabase
      .from('homepage_settings')
      .select('*')
      .eq('subdomain', tenantId)
      .single();

    if (error || !data) {
      return { success: false, themeName: 'template01', data: undefined };
    }

    let themeName =
      data.theme_name ||
      data.settings?.theme_name ||
      data.settings?.theme?.name ||
      'template01';
      
    themeName = themeName.toLowerCase().replace('templete', 'template');

    return {
      success: true,
      data: { ...data, theme_name: themeName },
      themeName,
    };
  } catch (e) {
    console.error('[getHomepageSettings] Error:', e);
    return { success: false, themeName: 'template01', data: undefined };
  }
}
