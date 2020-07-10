import produce from 'immer';
import { handleActions } from 'redux-actions';

export const initialStatusSet = {
  status: 'INIT',
  error: {},
};

export const baseAsyncActionHandler = (
  statusSet: {
    status: string;
    error: {};
  },
  items: any,
  actionTypes: {
    request: string;
    success: string;
    failure: string;
    reset: string;
  },
) => {
  return {
    [actionTypes.request]: (state: any) => {
      return produce(state, (draft: any) => {
        draft.statusSet.status = 'REQUEST';
      });
    },
    [actionTypes.success]: (state: any, action: any) => {
      return produce(state, (draft: any) => {
        draft.statusSet.status = 'SUCCESS';
        draft.items = action.payload;
      });
    },
    [actionTypes.failure]: (state: any, action: any) => {
      return produce(state, (draft: any) => {
        draft.statusSet.status = 'FAILURE';
        draft.statusSet.error = action.error;
      });
    },
  };
};

export const createReducer = (
  entity: any,
  state: { items: any; statusSet: StatusSet },
) =>
  handleActions(
    {
      [entity.request.type]: (state, action) => {
        return produce(state, (draft) => {
          draft.statusSet.status = 'REQUEST';
        });
      },
      [entity.success.type]: (state, action) => {
        return produce(state, (draft) => {
          draft.statusSet.status = 'SUCCESS';
          draft.items = action.payload;
        });
      },
      [entity.failure.type]: (state, action) => {
        return produce(state, (draft) => {
          draft.statusSet.status = 'FAILURE';
          // @ts-ignore
          draft.statusSet.error = action.error;
        });
      },
    },
    state,
  );

export const createEntity = <R, S, F, PARAM extends any[], DATA>(
  name: string,
  api: ApiEndpoint<PARAM, DATA>,
) => ({
  request: () => ({ type: `${name}_REQUEST` }),
  success: (data: DATA) => ({ type: `${name}_SUCCESS`, payload: data }),
  failure: (error: string) => ({ type: `${name}_FAILURE`, error: error }),
  api: api,
});
