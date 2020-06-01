import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { kakaoMapState } from 'recoil/kakaoMap';

// 일단 여기 추가
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const KakaoMap: React.FC = () => {
  const setTodoList = useSetRecoilState(kakaoMapState);

  useEffect(() => {
    const container = document.getElementById('mask-map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    setTodoList(map);
  }, []);

  return <div id="mask-map" style={{ width: '50%', height: '50%' }} />;
};

export default KakaoMap;
