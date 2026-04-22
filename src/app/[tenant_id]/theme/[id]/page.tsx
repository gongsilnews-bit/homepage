import React from 'react';
import Template01Layout from '../../templates/template01/layout';
import PropertyDetail01 from '@/components/templates/template01/PropertyDetail01';
import { sampleProperties } from '@/data/sampleData';

// TODO: Replace with dynamic DB property fetching in the future
export default async function PropertyDetailPage({ params }: { params: Promise<{ tenant_id: string; id: string }> }) {
  const resolvedParams = await params;
  // Mock resolving property by id
  const propertyId = parseInt(resolvedParams.id, 10);
  const property = sampleProperties.find((p) => p.id === propertyId) || sampleProperties[0];

  const theme = (resolvedParams.tenant_id === 'template02' || resolvedParams.tenant_id === 'templete02') ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    // For now, template02 falls back to 01 layout until PropertyDetail02 is created
    return (
      <Template01Layout>
        <PropertyDetail01 property={property} />
      </Template01Layout>
    );
  }

  return (
    <Template01Layout>
      <PropertyDetail01 property={property} />
    </Template01Layout>
  );
}
