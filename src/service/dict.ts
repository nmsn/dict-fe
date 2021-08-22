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
  const { data } = await request({ method: 'post', url: '/post'});
 
  return data;
};


const getYoudao = async (word: string) => {
  const { data } = await request.post('/dict/youdaoSearch', { word },);
  return data;
};

export { getReactQuery, getInfo, getYoudao };
