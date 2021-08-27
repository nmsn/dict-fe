import request from "./request";

const getReactQuery = async () => {
  const { data } = await request({
    method: "get",
    url: "/get",
    baseURL: "https://api.github.com",
  });
  return data;
};

const getInfo = async () => {
  const { data } = await request({ method: "post", url: "/post" });
  return data;
};

const getYoudao = async (word: string) => {
  const { data } = await request.post("/dict/youdaoSearch", { word });
  return data;
};

const getWord = async (word: string) => {
  const { data } = await request.post("/dict/word", { word });
  return data;
};

const getStat = async () => {
  const { data } = await request.get("/dict/groupStat/week/5");
  return data;
};

export { getReactQuery, getInfo, getYoudao, getWord, getStat };
