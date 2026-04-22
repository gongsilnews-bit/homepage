import React from 'react';
import Template02Layout from '@/components/page_templates/template02/layout';
import Template02NewsDetailPage from '@/components/page_templates/template02/news/[id]/page';

export default function TenantNewsDetailPage({ params }: { params: { tenant_id: string; id: string } }) {
  return (
      <Template02Layout>
        <Template02NewsDetailPage />
      </Template02Layout>
    );
}
