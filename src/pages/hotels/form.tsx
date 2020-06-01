import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Col,
  Row,
  TimePicker,
  Checkbox,
} from 'antd';
import moment from 'moment';
import DaumPostcode from 'react-daum-postcode';
// import { kakaoMapState } from '../../recoil/kakaoMap';
import KakaoMap from '../../components/KakaoMap';
import PageWrapper from '../../layouts/PageWrapper';

// 일단 여기 추가
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const { RangePicker } = TimePicker;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const FormPage: React.FC = () => {
  // const [latLng, setLatLng] = useState({ Lat: 0.0, Lng: 0.0 });
  const [isPostCode, setIsPostCode] = useState(false);
  const [postCode, setPostCode] = useState({
    zonecode: '',
    address: '',
  });

  const onFinish = (values: any) => {
    console.log(values.time);
    // values = {
    //   ...values,
    //   'time-picker': values['time-pricker'].format('HH:mm:ss'),
    // };
    console.log(values);
  };

  const onCompletePostcode = (data: any) => {
    console.log(data);
    setPostCode(data);
    setIsPostCode(false);
  };

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name="name" label="호텔 명">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="호텔 설명">
        <Input />
      </Form.Item>
      <Form.Item name="zipcode" label="우편번호">
        <Row>
          <Col span={23}>
            <Input disabled value={postCode.zonecode} />
          </Col>
          <Col span={1}>
            <Button type="primary" onClick={() => setIsPostCode(true)}>
              검색
            </Button>
          </Col>
        </Row>
      </Form.Item>
      {isPostCode && <DaumPostcode onComplete={onCompletePostcode} />}
      <Form.Item name="address" label="주소">
        <Input disabled value={postCode.address} />
      </Form.Item>
      <Form.Item name="addressDetail" label="상세 주소">
        <Input />
      </Form.Item>
      <Row justify="start">
        <Col span={3}>
          <Form.Item name="weekTime" label="주중 운영 시간">
            <RangePicker picker="time" format="HH:mm" minuteStep={15} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name="satTime" label="토요일 운영 시간">
            <RangePicker picker="time" format="HH:mm" minuteStep={15} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name="sunTime" label="일요일 운영 시간">
            <RangePicker picker="time" format="HH:mm" minuteStep={15} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start">
        <Col span={3}>
          <Form.Item name="weekPrice" label="주중 가격">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name="satPrice" label="토요일 가격">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name="sunPrice" label="일요일 가격">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Form.Item name="phoneNumber" label="전화번호">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item name="maxDogSize" label="최대 무게">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <Form.Item name="monitorAvailable">
            <Checkbox>모니터링 여부</Checkbox>
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item name="isNeuteredOnly">
            <Checkbox>중성화 여부</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="pageLink" label="홈페이지 주소">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          저장
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPage;
