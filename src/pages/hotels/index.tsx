import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

import PageWrapper from 'layouts/PageWrapper';

const HotelList = ({ history }: any) => {
  return (
    <PageWrapper title="호텔 목록">
      <Button type="primary" onClick={() => history.push('/hotels/new')}>
        호텔 생성
      </Button>
    </PageWrapper>
  );
};

export default withRouter(HotelList);
