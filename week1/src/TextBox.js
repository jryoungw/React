import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: ${oc.gray[10]};
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 500px;
  border: 1px solid ${oc.gray[4]};
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &:focus {
    border: 2px solid #49b842;
  }
`;

const Select = styled.select`
  width: 500px;
  border: 1px solid ${oc.gray[4]};
  outline: none;
  border-radius: 0px;
  line-height: 3rem;
  font-size: 1.1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &:option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const TwoButton = styled.button`
  width: 250px;
  border: none;
  line-height: 3rem;
  font-size: 1.1rem;
  color: white;
  background: green;
  margin-top : 1rem;
  margin-bottom:1rem;
  margin-right: 1rem;
  &:hover {
    background-color: green;
    color: white;
  }

  }
`;

const TextBox = ({ label, ...rest }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...rest} />
  </Wrapper>
);

const SelectBox = ({ label, ...rest }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Select {...rest} />
  </Wrapper>
);

// const TwoButton = ({ label }) => (
//   <Wrapper>
//     <Button>{label}</Button>
//   </Wrapper>
// );

export { TextBox, SelectBox, TwoButton };
