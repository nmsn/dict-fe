import { useRef, useState } from "react";
import styled from "styled-components";
import { getWord } from "@/service/dict";

const StyledSearchInputItem = styled.div`
  > input {
    width: 600px;
    height: 40px;
    border-radius: 10px;
    padding: 5px;
    font-size: 18px;
  }
`;

const DictSearchInput = () => {
  const inputRef = useRef(null);
  
  const [data, setData] = useState("");
  
  const getData = async (word: string) => {
    const data = await getWord(word);
    setData(data);
  };
  
  
  const onChange = (e) => {
    setData(e.target.value);
  };

  const onClick = () => {
    console.log(data);
    getData(data);
  };
  
  return (
    <StyledSearchInputItem>
      <input onChange={onChange}/>
      <button onClick={onClick}>123</button>
    </StyledSearchInputItem>
  );
};

export default DictSearchInput;
