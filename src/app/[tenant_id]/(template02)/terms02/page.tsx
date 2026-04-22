import React from 'react';
import Template01Layout from '@/components/page_templates/template01/layout';
import Template02Layout from '@/components/page_templates/template02/layout';
import Template01TermsPage from '@/components/page_templates/template01/terms/page';
import Template02TermsPage from '@/components/page_templates/template02/terms/page';

export default function TenantTermsPage({ params }: { params: { tenant_id: string } }) {
  const theme = params.tenant_id === 'template02' ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <Template02Layout>
        <Template02TermsPage />
      </Template02Layout>
    );
  }

  return (
    <Template01Layout>
      <Template01TermsPage />
    </Template01Layout>
  );
}
