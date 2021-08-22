import styled from "styled-components";

const StyledStatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 600px;
  height: 50px;
  font-size: 18px;
  background: #f7ebb6;
`;

const DictStatItem = ({
  index,
  num,
  text,
}: {
  index: string;
  num: string;
  text: string;
}) => {
  return (
    <StyledStatItem>
      <span>{index}</span>
      <span>{text}</span>
      <span>{num}</span>
    </StyledStatItem>
  );
};

export default DictStatItem;
