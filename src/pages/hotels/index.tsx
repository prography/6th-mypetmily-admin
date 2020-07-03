import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { withRouter } from 'react-router-dom';
import { Button, Table } from 'antd';

import PageWrapper from 'layouts/PageWrapper';
import { getHotelListSelector } from 'recoil/hotel/selector';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '호텔명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '주소',
    dataIndex: 'address',
    key: 'address',
  },
];

const HotelList = ({ history }: any) => {
  const hotels = useRecoilValueLoadable(getHotelListSelector);

  return (
    <PageWrapper title="호텔 목록">
      <Button type="primary" onClick={() => history.push('/hotels/new')}>
        호텔 생성
      </Button>
      <br />
      <br />
      {hotels.state === 'hasValue' && (
        <Table dataSource={hotels.contents.data} columns={columns} />
      )}
    </PageWrapper>
  );
};

export default withRouter(HotelList);
