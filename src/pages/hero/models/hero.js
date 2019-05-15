import { queryHeroList, getHeroDetails, getFreeHeros } from '../../../services/api';

export default {
  state: {
    heros: [],
    freeheros: [],
    filterKey: 0,
    itemHover: 0, //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
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
      const herodetails = yield call(getHeroDetails, { ename: 110 });
      const freeheros = yield call(getFreeHeros, { number: 13 });

      yield put({
        type: 'save',
        payload: {
          heros: herolist,
          freeheros: freeheros,
        },
      });
    },
  },
};
