import React from 'react';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import ThemeList02 from '@/components/templates/template02/ThemeList02';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ThemePage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  return (
      <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
        <Header02 />
        <ThemeList02 />
        <Footer02 />
      </div>
    );
}
