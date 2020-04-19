import React, { Component } from "react";
import SplitPane from "react-split-pane";
import graduate from "./graduate.jpg";
import "./App.css";
import { Title, SubTitle, Content, Circle } from "./contents/contents";
import View from "./contents/bodystyle";

class App extends Component {
  render() {
    return (
      <SplitPane
        split="vertical"
        defaultSize={500}
        style={{ backgroundColor: "#ececec" }}
      >
        <div>
          <img src={graduate} className="App-logo" alt="logo" />;
        </div>
        <div>
          <View>
            <Title>Homepage of Ryoungwoo Jang</Title>
          </View>
          <SubTitle>Biography</SubTitle>

          <Content>
            <Circle />
            Born in 1993.07.21
          </Content>

          <Content>
            <Circle /> 2009~2011 : Daegun High School
          </Content>

          <Content>
            <Circle /> 2012~2019 : Medical College of Yeungnam University,
            Medical Doctor
          </Content>

          <Content>
            <Circle /> 2019~2020 : Biomedical Engineering of Ulsan
            University(Medical Imaging and Intelligent Reality Lab), Masters'
            degree
            <a href="https://mi2rl.co">(MI2RL) </a>
          </Content>

          <SubTitle>Awards</SubTitle>
          <Content>
            <Circle />
            2017 University Students Contest of Mathematics, organized by Korean
            Mathematical Society (KMS)
            <a href="http://www.kms.or.kr/sp/36%EB%8C%80%EC%88%98%EA%B2%BD%202-gda.htm">
              Silver medal
            </a>
          </Content>

          <SubTitle>Skills</SubTitle>

          <Content>
            <Circle /> General Medical Techniques
          </Content>

          <Content>
            <Circle /> Fluent at Python
          </Content>

          <Content>
            <Circle /> Newbie at NodeJS, React
          </Content>

          <Content>
            <Circle /> Undergraduate Level Mathematics
          </Content>

          <SubTitle>Publications</SubTitle>

          <Content>
            <Circle /> Optimal Matrix Size of Chest Radiographs for
            Computer-Aided Detection on Lung Nodule or Mass with Deep Learning
            (European Radiology, Accepted)
          </Content>

          <SubTitle>Conferences</SubTitle>

          <Content>
            2019 Radiologic Society of North America (RSNA)
            <Circle /> Too Sensitive Error Caused by Label Noises for Training
            Classification Network with Deep Convolutional Neural Net in Chest
            PA X-Ray
          </Content>
        </div>
      </SplitPane>
    );
  }
}
export default App;
