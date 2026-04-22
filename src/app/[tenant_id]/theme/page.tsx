import React from 'react';
import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import ThemeList01 from '@/components/templates/template01/ThemeList01';
import ThemeList02 from '@/components/templates/template02/ThemeList02';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ThemePage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  const isTemplate02 = resolvedParams.tenant_id === 'template02' || resolvedParams.tenant_id === 'templete02';
  
  const Header = isTemplate02 ? Header02 : Header01;
  const Footer = isTemplate02 ? Footer02 : Footer01;
  const ThemeList = isTemplate02 ? ThemeList02 : ThemeList01;

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
      <Header />
      <ThemeList />
      <Footer />
    </div>
  );
}
