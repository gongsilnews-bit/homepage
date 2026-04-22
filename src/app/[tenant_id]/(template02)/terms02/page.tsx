import React from 'react';
import Template02Layout from '@/components/page_templates/template02/layout';
import Template02TermsPage from '@/components/page_templates/template02/terms/page';

export default function TenantTermsPage({ params }: { params: { tenant_id: string } }) {
  return (
      <Template02Layout>
        <Template02TermsPage />
      </Template02Layout>
    );
}
