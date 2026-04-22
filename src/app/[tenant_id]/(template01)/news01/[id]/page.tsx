import React from 'react';
import Template01Layout from '@/components/page_templates/template01/layout';
import Template01NewsDetailPage from '@/components/page_templates/template01/news/[id]/page';

export default function TenantNewsDetailPage({ params }: { params: { tenant_id: string; id: string } }) {
  return (
    <Template01Layout>
      <Template01NewsDetailPage />
    </Template01Layout>
  );
}
