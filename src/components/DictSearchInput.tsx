import { useRef, useState } from "react";
import styled from "styled-components";
import { getWord } from "@/service/dict";

const StyledSearchInput = styled.div`
  > input {
    width: 500px;
    height: 40px;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 5px;
    font-size: 18px;
    margin-right: 20px;
    border: 1px solid ${(props) => props.theme.themeTextColor};
  }

  display: flex;
  align-items: center;
`;

const StyledSearchBtn = styled.button`
  height: 40px;
  padding: 10px 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.themeTextColor};
  color: #fff;
  border: 0;
`;

const DictSearchInput = ({ onSave }) => {
  const inputRef = useRef(null);

  const [data, setData] = useState("");

  const getData = async (word: string) => {
    try {
      const { code, data, msg } = await getWord(word);
      const result = data.map(({ query, translation, type }) => ({
        query,
        translation,
        type,
      }));
      setData(result);
      onSave(result);
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) => {
    setData(e.target.value);
  };

  const onClick = () => {
    console.log(data);
    getData(data);
  };

  return (
    <StyledSearchInput>
      <input onChange={onChange} />
      <StyledSearchBtn onClick={onClick}>确定</StyledSearchBtn>
    </StyledSearchInput>
  );
};

export default DictSearchInput;
