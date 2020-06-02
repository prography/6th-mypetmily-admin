import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Table, Tag, Space } from 'antd';

import PageWrapper from 'layouts/PageWrapper';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: '호텔명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '나이스',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '주소',
    dataIndex: 'address',
    key: 'address',
  },
];

const HotelList = ({ history }: any) => {
  return (
    <PageWrapper title="호텔 목록">
      <Button type="primary" onClick={() => history.push('/hotels/new')}>
        호텔 생성
      </Button>
      <br />
      <br />
      <Table dataSource={dataSource} columns={columns} />
    </PageWrapper>
  );
};

export default withRouter(HotelList);
