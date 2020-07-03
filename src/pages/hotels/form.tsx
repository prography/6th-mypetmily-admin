import React, { useEffect, useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import { createHotel } from 'api/hotel';
// import { kakaoMapState } from '../../recoil/kakaoMap';

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
  const [form] = Form.useForm();
  const [isPostCode, setIsPostCode] = useState(false);
  const [postCode, setPostCode] = useState({
    zonecode: '',
    address: '',
    roadAddress: '',
  });

  const history = useHistory();

  const onFinish = (values: any) => {
    // console.log(values.time);
    values = {
      ...values,
      weekOpenTime: values.weekTime && values.weekTime[0].format('HH:mm'),
      weekCloseTime: values.weekTime && values.weekTime[1].format('HH:mm'),
      satOpenTime: values.satTime && values.satTime[0].format('HH:mm'),
      satCloseTime: values.satTime && values.satTime[1].format('HH:mm'),
      sunOpenTime: values.sunTime && values.sunTime[0].format('HH:mm'),
      sunCloseTime: values.sunTime && values.sunTime[1].format('HH:mm'),
      monitorAvailable: !(
        values.monitorAvailable === undefined || !values.monitorAvailable
      ),
      isNeuteredOnly: !(
        values.isNeuteredOnly === undefined || !values.isNeuteredOnly
      ),
    };

    try {
      const data = createHotel(values);
      console.log(data);
      alert(`${values.name} 생성 성공`);
      history.push('/hotels');
    } catch (error) {}
  };

  const onCompletePostcode = (data: any) => {
    console.log(data);
    form.setFieldsValue({
      zipcode: data.zonecode,
      address: data.address,
    });
    setPostCode({ ...data });
    setIsPostCode(false);
  };

  const getGeocode = () => {
    let geocoder = new kakao.maps.services.Geocoder();

    let callback = function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const { x, y } = result[0];
        form.setFieldsValue({
          latitude: x,
          longitude: y,
        });
      }
    };

    geocoder.addressSearch(postCode.address, callback);
  };

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      form={form}
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
          <Col span={20}>
            <Input disabled value={postCode.zonecode} />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={() => setIsPostCode(true)}>
              검색
            </Button>
          </Col>
        </Row>
      </Form.Item>

      {isPostCode && <DaumPostcode onComplete={onCompletePostcode} />}
      <Form.Item name="address" label="주소">
        <Input disabled />
      </Form.Item>
      <Form.Item name="addressDetail" label="상세 주소">
        <Input />
      </Form.Item>
      <Form.Item name="latitude" label="위도">
        <Input disabled />
      </Form.Item>
      <Form.Item name="longitude" label="경도">
        <Input disabled />
      </Form.Item>
      <Button type="primary" onClick={getGeocode}>
        좌표값 구하기
      </Button>
      <br />
      <br />
      <br />
      <Row justify="start">
        <Col md={6} lg={3}>
          <Form.Item name="weekTime" label="주중 운영 시간">
            <RangePicker picker="time" format="HH:mm" minuteStep={15} />
          </Form.Item>
        </Col>
        <Col md={6} lg={3}>
          <Form.Item name="satTime" label="토요일 운영 시간">
            <RangePicker picker="time" format="HH:mm" minuteStep={15} />
          </Form.Item>
        </Col>
        <Col md={6} lg={3}>
          <Form.Item name="sunTime" label="일요일 운영 시간">
            <RangePicker picker="time" format="HH:mm" minuteStep={15} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start">
        <Col md={6} lg={3}>
          <Form.Item name="weekPrice" label="주중 가격">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
        <Col md={6} lg={3}>
          <Form.Item name="satPrice" label="토요일 가격">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
        <Col md={6} lg={3}>
          <Form.Item name="sunPrice" label="일요일 가격">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col sm={4} md={2}>
          <Form.Item name="phoneNumber" label="전화번호">
            <Input style={{ width: '80%' }} />
          </Form.Item>
        </Col>
        <Col sm={4} md={2}>
          <Form.Item name="maxDogSize" label="최대 무게">
            <InputNumber style={{ width: '80%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col sm={4} md={2}>
          <Form.Item name="monitorAvailable">
            <Checkbox>모니터링 여부</Checkbox>
          </Form.Item>
        </Col>
        <Col sm={4} md={2}>
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
        <Button onClick={() => history.goBack()}>저장</Button>
      </Form.Item>
    </Form>
  );
};

export default FormPage;
