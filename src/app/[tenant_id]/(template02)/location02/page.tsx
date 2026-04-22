import React from 'react';
import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import Location01 from '@/components/templates/template01/Location01';
import Location02 from '@/components/templates/template02/Location02';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function LocationPage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
  const theme = (resolvedParams.tenant_id === 'template02' || resolvedParams.tenant_id === 'templete02') ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
        <Header02 />
        <main className="flex-grow bg-white">
          <Location02 />
        </main>
        <Footer02 />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
      <Header01 />
      <main className="flex-grow bg-white">
        <Location01 />
      </main>
      <Footer01 />
    </div>
  );
}
