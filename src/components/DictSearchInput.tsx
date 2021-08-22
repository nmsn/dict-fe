import styled from "styled-components";


const StyledSearchInputItem = styled.div`
  > input {
    width: 600px;
    height: 40px;
    border-radius: 10px;
    padding:5px;
    font-size: 18px;
  }
`;

const DictSearchInput  = () => {
  return (
    <StyledSearchInputItem>
      <input />
    </StyledSearchInputItem>
  );
};



export default DictSearchInput;