import React from 'react';
import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';
import ThemeList01 from '@/components/templates/template01/ThemeList01';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ThemePage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
      <Header01 />
      <ThemeList01 />
      <Footer01 />
    </div>
  );
}
