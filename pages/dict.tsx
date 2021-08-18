import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from 'react-query';
import { getInfo } from '../service/dict';

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledMain = styled.main`
  width: 100vw;
  padding: 100px 0;
  
  display: flex;
  justify-content: center;
`;

const StyledDictItem = styled.div`
  width: 300px;
  height: 400px;
  background: #f7ebb6;
  padding: 20px;
  margin: 0 10px;
  font-weight: bold;
  font-size: 24px;

  > div {
    margin-bottom: 10px;
  }

  .typeLabel {
    font-size: 28px;
  }
`;

const DictItem = ({
  typeLabel,
  result,
  source,
}: {
  typeLabel: string;
  result: string;
  source: string;
}) => {
  return (
    <StyledDictItem>
      <div className="typeLabel">{typeLabel}</div>
      <div className="source">{source}</div>
      <div className="result">{result}</div>
    </StyledDictItem>
  );
};

const Home: NextPage = () => {
  const { data: myInfo, isLoading, error } = useQuery('getName', getInfo, {
    initialData: {
      name: 'unknown',
    },
    onSuccess: () => console.log('请求成功~'),
  });
  
  if (isLoading) {
    return <div>loading...</div>;
  }
  
  return (
    <StyledPage>
      <Head>
        <title>Dict</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <DictItem typeLabel="百度" result="苹果" source="apple" />
        <DictItem typeLabel="网易" result="苹果" source="apple" />
      </StyledMain>
    </StyledPage>
  );
};

export default Home;
