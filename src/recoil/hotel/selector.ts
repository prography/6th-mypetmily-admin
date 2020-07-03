import { selector, selectorFamily } from 'recoil';
import { createHotel, getHotelList } from 'api/hotel';

// export const getHotelListSelector = selector({
//   key: 'getHotelListSelector',
//   get: ({ get }) => {
//     try {
//       const data = getHotelList();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   },
// });

export const createHotelSelector = selectorFamily({
  key: 'createHotelSelector',
  get: (params) => ({ get }) => {
    try {
      const data = createHotel(params);
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  },
});
