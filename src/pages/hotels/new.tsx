import React from 'react';
import PageWrapper from 'layouts/PageWrapper';
import FormPage from './form';

const NewPage: React.FC = () => {
  return (
    <PageWrapper title="호텔 생성">
      <FormPage />
    </PageWrapper>
  );
};

export default NewPage;
