import React from 'react';
import Template01Layout from '../../templates/template01/layout';
import Template02Layout from '../../templates/template02/layout';
import Template01NewsDetailPage from '../../templates/template01/news/[id]/page';
import Template02NewsDetailPage from '../../templates/template02/news/[id]/page';

export default function TenantNewsDetailPage({ params }: { params: { tenant_id: string; id: string } }) {
  const theme = params.tenant_id === 'template02' ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <Template02Layout>
        <Template02NewsDetailPage />
      </Template02Layout>
    );
  }

  return (
    <Template01Layout>
      <Template01NewsDetailPage />
    </Template01Layout>
  );
}
