import { createAction } from 'redux-actions';
import { baseApiActionType, createEntity } from 'utils/redux';
import { createHotel, deleteHotel, getHotelList } from 'api/hotel';

export const CREATE_HOTEL = 'CREATE_HOTEL';
export const createHotelEntity = createEntity(CREATE_HOTEL, createHotel);
export const createHotelSaga = createAction(CREATE_HOTEL);

// export const UPDATE_HOTEL = 'UPDATE_HOTEL';

export const GET_HOTELS = 'GET_HOTELS';
export const getHotelEntity = createEntity(GET_HOTELS, getHotelList);
export const getHotelSaga = createAction(GET_HOTELS);

// export const GET_HOTEL = 'GET_HOTEL';
//
// export const DELETE_HOTEL = 'DELETE_HOTEL';
// export const deleteHotelEntity = createEntity(DELETE_HOTEL, deleteHotel);
// export const deleteHotelSaga = createAction(DELETE_HOTEL);
//
// export type CreateHotelSaga = ReturnType<typeof createHotelSaga>;
