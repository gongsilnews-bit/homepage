import React from 'react';
import Header01 from '@/components/templates/template01/Header01';
import Footer01 from '@/components/templates/template01/Footer01';
import Location01 from '@/components/templates/template01/Location01';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function LocationPage({ params }: { params: Promise<{ tenant_id: string }> }) {
  const resolvedParams = await params;
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
