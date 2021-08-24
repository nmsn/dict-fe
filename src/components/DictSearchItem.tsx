import styled from "styled-components";

const StyledSearchDictItem = styled.div`
  width: 300px;
  height: 400px;
  background: ${(props) => props.theme.themeColor};
  padding: ${(props) => props.theme.itemPadding};
  margin: 0 10px;
  font-weight: bold;
  font-size: 24px;
  border-radius: ${(props) => props.theme.borderRadius};

  > div {
    margin-bottom: 10px;
  }

  .type {
    font-size: 28px;
  }
`;

const typeMap = new Map([
  ["youdao", "有道"],
  ["baidu", "百度"],
]);

const DictSearchItem = ({
  type,
  result,
  source,
}: {
  type: string;
  result: string;
  source: string;
}) => {
  return (
    <StyledSearchDictItem>
      <div className="type">{typeMap.get(type)}</div>
      <div className="source">{source}</div>
      <div className="result">{result}</div>
    </StyledSearchDictItem>
  );
};

export default DictSearchItem;
