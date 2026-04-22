import React from 'react';
import Template01Layout from '../../templates/template01/layout';
import PropertyDetail01 from '@/components/templates/template01/PropertyDetail01';
import { sampleProperties } from '@/data/sampleData';

// TODO: Replace with dynamic DB property fetching in the future
export default function PropertyDetailPage({ params }: { params: { tenant_id: string; id: string } }) {
  // Mock resolving property by id
  const propertyId = parseInt(params.id, 10);
  const property = sampleProperties.find((p) => p.id === propertyId) || sampleProperties[0];

  const theme = params.tenant_id === 'template02' ? 'Template02' : 'Template01';

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
