import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Table } from 'antd';

import PageWrapper from 'layouts/PageWrapper';
import { deleteHotel } from '../../api/hotel';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelSaga } from '../../store/hotel/action';

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
  const dispatch = useDispatch();

  const {
    items: { data },
  } = useSelector((state: any) => state.hotel.hotels);

  useEffect(() => {
    dispatch(getHotelSaga());
  }, []);

  return (
    <PageWrapper title="호텔 목록">
      <Button type="primary" onClick={() => history.push('/hotels/new')}>
        호텔 생성
      </Button>
      <br />
      <br />
      {data && <Table dataSource={data} columns={columns} pagination={false} />}
    </PageWrapper>
  );
};

export default withRouter(HotelList);
