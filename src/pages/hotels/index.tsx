import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { withRouter } from 'react-router-dom';
import { Button, Table } from 'antd';

import PageWrapper from 'layouts/PageWrapper';
import { getHotelListSelector } from 'recoil/hotel/selector';
import { createHotel, deleteHotel } from '../../api/hotel';

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
  {
    title: '',
    dataIndex: '',
    render: (record: any) => {
      console.log(record.latitude);
      console.log(record.longitude);
      return (
        <Button onClick={() => handleClickDeleteHotel(record.id)}>삭제</Button>
      );
    },
  },
];

const handleClickDeleteHotel = (id: number) => {
  try {
    deleteHotel(id);
    alert(`삭제 성공`);
    window.location.href = '/hotels';
  } catch (error) {}
};

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
        <Table
          dataSource={hotels.contents.data}
          columns={columns}
          pagination={false}
        />
      )}
    </PageWrapper>
  );
};

export default withRouter(HotelList);
