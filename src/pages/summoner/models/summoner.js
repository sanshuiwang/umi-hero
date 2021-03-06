import {
  queryHeroList,
  //  getHeroDetails
} from '../../../services/api';

export default {
  state: {
    heros: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
  reducers: {
    update(state) {
      return `${state}_hero`;
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const herolist = yield call(queryHeroList);
      // const herodetails = yield call(getHeroDetails, { ename: 110 });

      yield put({
        type: 'save',
        payload: {
          heros: herolist,
        },
      });
    },
  },
};
