import request from './request';

const getReactQuery = async () => {
  const { data } = await request({
    method: 'get',
    url: '/get',
    baseURL: 'https://api.github.com',
  });

  return data;
};

const getInfo = async () => {
  const { data } = await request({ method: 'post', url: '/post' });

  return data;
};

export { getReactQuery, getInfo };
