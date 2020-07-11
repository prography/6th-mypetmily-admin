import React, { useEffect } from 'react';
import { Button, Table, Spin, Descriptions } from 'antd';

import PageWrapper from 'layouts/PageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHotelSaga, getHotelSaga } from '../../store/hotel/action';

const HotelDetail = ({ match }: any) => {
  const dispatch = useDispatch();

  const {
    items: { data },
    statusSet,
  } = useSelector((state: any) => state.hotel.hotel);

  useEffect(() => {
    dispatch(getHotelSaga(match.params.id));
  }, []);

  if (statusSet.status === 'SUCCESS') {
    return (
      <PageWrapper title={data.name}>
        <Descriptions title={data.name} bordered size="small">
          <Descriptions.Item label="설명" span={3}>
            {data.description}
          </Descriptions.Item>
          <Descriptions.Item label="주소">
            {data.address} {data.addressDetail}
          </Descriptions.Item>
          <Descriptions.Item label="전화번호">
            {data.phoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="maxDogSize">
            {data.maxDogSize || '없다'}
          </Descriptions.Item>
          <Descriptions.Item label="주중 운영 시간">
            {data.weekOpenTime} ~ {data.weekCloseTime}
          </Descriptions.Item>
          <Descriptions.Item label="토요일 운영 시간">
            {data.satOpenTime} ~ {data.satCloseTime}
          </Descriptions.Item>
          <Descriptions.Item label="일요일 운영 시간">
            {data.sunOpenTime} ~ {data.sunCloseTime}
          </Descriptions.Item>
        </Descriptions>
      </PageWrapper>
    );
  } else {
    return <Spin />;
  }
};

export default HotelDetail;
