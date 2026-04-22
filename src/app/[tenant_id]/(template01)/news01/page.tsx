import React from 'react';
import Template01Layout from '@/components/page_templates/template01/layout';
import Template01NewsPage from '@/components/page_templates/template01/news/page';

export default function TenantNewsPage({ params }: { params: { tenant_id: string } }) {
  // TODO: 런타임 시 DB에서 tenant_id로 조회한 theme_name을 가져옵니다.
  return (
    <Template01Layout>
      <Template01NewsPage />
    </Template01Layout>
  );
}
