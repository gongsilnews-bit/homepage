import React from 'react';
import Template01Layout from '../templates/template01/layout';
import Template02Layout from '../templates/template02/layout';
import Template01PrivacyPage from '../templates/template01/privacy/page';
import Template02PrivacyPage from '../templates/template02/privacy/page';

export default function TenantPrivacyPage({ params }: { params: { tenant_id: string } }) {
  const theme = params.tenant_id === 'template02' ? 'Template02' : 'Template01';

  if (theme === 'Template02') {
    return (
      <Template02Layout>
        <Template02PrivacyPage />
      </Template02Layout>
    );
  }

  return (
    <Template01Layout>
      <Template01PrivacyPage />
    </Template01Layout>
  );
}
