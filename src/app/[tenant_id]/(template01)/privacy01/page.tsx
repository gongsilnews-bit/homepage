import React from 'react';
import Template01Layout from '@/components/page_templates/template01/layout';
import Template01PrivacyPage from '@/components/page_templates/template01/privacy/page';

export default function TenantPrivacyPage({ params }: { params: { tenant_id: string } }) {
  return (
    <Template01Layout>
      <Template01PrivacyPage />
    </Template01Layout>
  );
}
