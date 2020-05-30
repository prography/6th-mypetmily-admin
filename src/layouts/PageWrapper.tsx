import React from 'react';

type PageWrapperProps = {
  title: string;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
