import React from 'react';
import Template01Layout from '@/components/page_templates/template01/layout';
import Template02Layout from '@/components/page_templates/template02/layout';
import Template01NewsPage from '@/components/page_templates/template01/news/page';
import Template02NewsPage from '@/components/page_templates/template02/news/page';

export default function TenantNewsPage({ params }: { params: { tenant_id: string } }) {
  // TODO: 런타임 시 DB에서 tenant_id로 조회한 theme_name을 가져옵니다.
  const theme = params.tenant_id === 'template02' ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <Template02Layout>
        <Template02NewsPage />
      </Template02Layout>
    );
  }

  return (
    <Template01Layout>
      <Template01NewsPage />
    </Template01Layout>
  );
}
