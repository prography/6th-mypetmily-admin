import produce from 'immer';
import { handleActions } from 'redux-actions';

export const initialStatusSet = {
  status: 'INIT',
  error: {},
};

export const createReducer = (
  entity: any,
  initState: {
    statusSet: StatusSet;
    items?: any;
  },
) =>
  handleActions(
    {
      [entity.request]: (state, action) => {
        return produce(state, (draft) => {
          draft.statusSet.status = 'REQUEST';
        });
      },
      [entity.success]: (state, action) => {
        return produce(state, (draft) => {
          draft.statusSet.status = 'SUCCESS';
          draft.items = action.payload;
        });
      },
      [entity.failure]: (state, action) => {
        return produce(state, (draft) => {
          draft.statusSet.status = 'FAILURE';
        });
      },
    },
    initState,
  );

export const baseApiActionType = (name: any) => ({
  request: `${name}_REQUEST`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
});

export const createEntity = <R, S, F, PARAM extends any[], DATA>(
  name: string,
  api: ApiEndpoint<PARAM, DATA>,
) => {
  const actions = baseApiActionType(name);
  return {
    actions,
    request: () => ({ type: actions.request }),
    success: (data: DATA) => ({ type: actions.success, payload: data }),
    failure: (error: string) => ({ type: actions.failure, error: error }),
    api: api,
  };
};
