import React from 'react';
import Header02 from '@/components/templates/template02/Header02';
import Footer02 from '@/components/templates/template02/Footer02';
import PropertyDetail02 from '@/components/templates/template02/PropertyDetail02';
import { sampleProperties } from '@/data/sampleData';

// TODO: Replace with dynamic DB property fetching in the future
export default async function PropertyDetailPage({ params }: { params: Promise<{ tenant_id: string; id: string }> }) {
  const resolvedParams = await params;
  // Mock resolving property by id
  const propertyId = parseInt(resolvedParams.id, 10);
  const property = sampleProperties.find((p) => p.id === propertyId) || sampleProperties[0];
  return (
      <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-pretendard">
        <Header02 />
        <PropertyDetail02 property={property} />
        <Footer02 />
      </div>
    );
}
