import styled from "styled-components/macro";
import oc from "open-color";

const Title = styled.div`
  font-family: sans-serif;
  font-size: 2rem;
  color: ${oc.gray[10]};
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-family: sans-serif;
  font-size: 1.5rem;
  color: ${oc.gray[10]};
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Content = styled.div`
  font-family: sans-serif;
  display: flex;
  font-size: 1rem;
  color: ${oc.gray[10]};
  margin-left: 3rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  line-height: 16px;
  vertical-align: middle;
  border-radius: 8px;
  margin-left 1rem;
  margin-right: 1rem;
  background-color: ${oc.gray[5]};
`;

export { Title, SubTitle, Content, Circle };
