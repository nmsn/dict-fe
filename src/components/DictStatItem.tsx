import styled from "styled-components";

const StyledStatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.itemPadding};
  width: 300px;
  height: 50px;
  font-size: 18px;
  background: #f7ebb6;
  border-radius: ${props => props.theme.borderRadius};
  margin: 0 10px;
`;

const DictStatItem = ({
  index,
  num,
  text,
}: {
  index: string | number;
  num: string | number;
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
