import fetch from 'dva/fetch';
import { reap } from 'safe-reaper';

export default function request(url, options) {
  const method = reap(options, 'method', 'get');
  if (method === 'POST' || method === 'post') {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    };
    options.body = JSON.stringify(options.body);
  }
  return fetch(url, options)
    .then(response => {
      const resData = response.json();
      return resData;
    })
    .catch(e => {
      console.log('error::: ', e);
    });
}
