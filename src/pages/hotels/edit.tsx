import React from 'react';
import PageWrapper from 'layouts/PageWrapper';
import FormPage from './form';

const EditPage: React.FC = () => {
  return (
    <PageWrapper title="호텔 수정">
      <FormPage />
    </PageWrapper>
  );
};

export default EditPage;
