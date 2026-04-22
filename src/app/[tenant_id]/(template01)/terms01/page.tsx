import React from 'react';
import Template01Layout from '@/components/page_templates/template01/layout';
import Template01TermsPage from '@/components/page_templates/template01/terms/page';

export default function TenantTermsPage({ params }: { params: { tenant_id: string } }) {
  return (
    <Template01Layout>
      <Template01TermsPage />
    </Template01Layout>
  );
}
