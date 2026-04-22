import React from 'react';
import Template02Layout from '@/components/page_templates/template02/layout';
import Template02PrivacyPage from '@/components/page_templates/template02/privacy/page';

export default function TenantPrivacyPage({ params }: { params: { tenant_id: string } }) {
  return (
      <Template02Layout>
        <Template02PrivacyPage />
      </Template02Layout>
    );
}
