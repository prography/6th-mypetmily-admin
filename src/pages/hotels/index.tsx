import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Table } from 'antd';

import PageWrapper from 'layouts/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHotelSaga, getHotelsSaga } from 'store/hotel/action';

const HotelList = ({ history }: any) => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: '호텔명',
      key: 'id',
      render: (record: any) => {
        return <Link to={`/hotels/${record.id}`}>{record.name}</Link>;
      },
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
          <Button onClick={() => handleClickDeleteHotel(record.id)}>
            삭제
          </Button>
        );
      },
    },
  ];

  const {
    items: { data },
  } = useSelector((state: any) => state.hotel.hotels);

  useEffect(() => {
    dispatch(getHotelsSaga());
  }, []);

  const handleClickDeleteHotel = (id: number) => {
    dispatch(deleteHotelSaga(id));
  };

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
