import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import DictSearchItem from "@/components/DictSearchItem";
import DictSearchInput from "@/components/DictSearchInput";
import DictStatItem from "@/components/DictStatItem";
import { useQuery } from "react-query";
import { getYoudao } from "@/service/dict";

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledMain = styled.main`
  width: 100vw;
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledBlockContainer2 = styled(StyledBlockContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    margin-bottom: 10px;
  }
`;

const Home: NextPage = () => {
  return (
    <StyledPage>
      <Head>
        <title>Dict</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <StyledBlockContainer>
          <DictSearchInput />
        </StyledBlockContainer>
        <StyledBlockContainer>
          <DictSearchItem typeLabel="百度" result="苹果" source="apple" />
          <DictSearchItem typeLabel="有道" result="苹果" source="apple" />
        </StyledBlockContainer>
        <StyledBlockContainer2>
          <DictStatItem index="1" num="1" text="apple" />
          <DictStatItem index="1" num="1" text="apple" />
        </StyledBlockContainer2>
      </StyledMain>
    </StyledPage>
  );
};

export default Home;
