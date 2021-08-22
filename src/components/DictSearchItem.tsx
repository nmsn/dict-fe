import styled from "styled-components";

const StyledSearchDictItem = styled.div`
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

const DictSearchItem = ({
  typeLabel,
  result,
  source,
}: {
  typeLabel: string;
  result: string;
  source: string;
}) => {
  return (
    <StyledSearchDictItem>
      <div className="typeLabel">{typeLabel}</div>
      <div className="source">{source}</div>
      <div className="result">{result}</div>
    </StyledSearchDictItem>
  );
};

export default DictSearchItem;