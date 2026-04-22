import React from 'react';
import Template02Layout from '@/components/page_templates/template02/layout';
import Template02NewsPage from '@/components/page_templates/template02/news/page';

export default function TenantNewsPage({ params }: { params: { tenant_id: string } }) {
  // TODO: 런타임 시 DB에서 tenant_id로 조회한 theme_name을 가져옵니다.
  return (
      <Template02Layout>
        <Template02NewsPage />
      </Template02Layout>
    );
}
