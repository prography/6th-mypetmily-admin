import { axiosInstance } from './index';

export const getHotelList = async () => {
  const { data } = await axiosInstance.get('/hotels');
  return data;
};

export const createHotel = async (hotels: any) => {
  console.log(hotels);
  const { data } = await axiosInstance.post('/hotels', {
    data: {
      ...hotels,
    },
  });
  return data;
};
