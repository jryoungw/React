import React, { Component } from "react";
import {
  TextBox,
  SelectBox,
  TwoButton,
  ButtonContainer,
  Wrapper,
} from "./TextBox";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#06A600",
              fontWeight: "bold",
            }}
          >
            회원가입
          </h1>
          <br />
          <TextBox label="아이디" />
          <TextBox label="비밀번호" type="password" />
          <TextBox label="비밀번호 재확인" type="password" />
          <TextBox label="이름" />
          <SelectBox label="성별">
            {""}
            <option value="" hidden>
              성별
            </option>
            <option value="1">남자</option>
            <option value="2">여자</option>
          </SelectBox>
          <TextBox label="이메일" />
          <TextBox
            label="휴대전화"
            placeholder="- 없이 입력해주세요. 예) 01012341234"
          />
          <TextBox label="관심사" />
          <Wrapper>
            <ButtonContainer>
              <TwoButton>초기화</TwoButton>
              <TwoButton>가입하기</TwoButton>
            </ButtonContainer>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
