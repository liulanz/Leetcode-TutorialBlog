import React, { Component } from "react";
import * as ProblemSet from "../ProblemSet.js";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "./Editor";
import Markdown from "react-markdown";
import SplitterLayout from "react-splitter-layout";
import Error from "./Error";
import NoteEditor from "./ProblemPage/NotesEditor";

//css
import "./ProblemPage/problems.css";

//<Code content={leetcodes[index][0]} description={statements[index]} name={names[index]}
//test={Test[index]} index={index} submit={Submit[index]} testcase={testcases[index]}input={inputs[index]}/>

class Compile extends Component {
  constructor() {
    super();
    this.state = {
      markdown: "",
      editor: null,
      name: "Two Sum",
      description: "",
      test: "",
      submit: "",
      testcases: 0,
      solution: "",
      selectedIndex: 0,
    };
  }
  handleSelect = (index) => {
    this.setState({ selectedIndex: index });
  };

  handleButtonClick = () => {
    this.setState({ selectedIndex: 0 });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    if (id >= ProblemSet.names.length) {
      return;
    }

    const oldcode = localStorage.getItem(ProblemSet.names[id]);
    if (oldcode == null) {
      fetch(ProblemSet.leetcodes[id][0])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ markdown: text });
        });
    } else {
      this.setState({ markdown: oldcode });
    }

    fetch(ProblemSet.statements[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ description: text });
      });

    fetch(ProblemSet.Test[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ test: text });
      });
    fetch(ProblemSet.Submit[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ submit: text });
      });
    fetch(ProblemSet.solution[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ solution: text });
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id != this.props.match.params.id) {
      let id = this.props.match.params.id;
      if (id >= ProblemSet.names.length) {
        return;
      }

      const oldcode = localStorage.getItem(ProblemSet.names[id]);
      if (oldcode == null) {
        fetch(ProblemSet.leetcodes[id][0])
          .then((res) => res.text())
          .then((text) => {
            this.setState({ markdown: text });
          });
      } else {
        this.setState({ markdown: oldcode });
      }

      fetch(ProblemSet.statements[id])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ description: text });
        });

      fetch(ProblemSet.Test[id])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ test: text });
        });
      fetch(ProblemSet.Submit[id])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ submit: text });
        });
    }
  }

  render() {
    let id = this.props.match.params.id;
    if (id >= ProblemSet.names.length) {
      return (
        <div>
          <Error />
        </div>
      );
    }

    return (
      <div>
        <div style={{ width: "95%", "margin-left": "3%" }}>
          <div style={{ margin: "3%", width: "45%" }}>
            <SplitterLayout primaryMinSize={35} percentage={true}>
              <Tabs
                selectedIndex={this.state.selectedIndex}
                onSelect={this.handleSelect}
              >
                <TabList>
                  <Tab>Problem</Tab>
                  <Tab>Solution</Tab>
                  <Tab>Notes</Tab>
                </TabList>
                <TabPanel>
                  <h2
                    className="problemTitle"
                    style={{ width: "45%", "margin-left": "30%" }}
                  >
                    {" "}
                    {ProblemSet.names[id]}
                  </h2>
                  <Markdown
                    className="problemStatement"
                    escapeHtml={true}
                    source={this.state.description}
                  />
                </TabPanel>
                <TabPanel>
                  <h2
                    className="problemTitle"
                    style={{ width: "45%", "margin-left": "30%" }}
                  >
                    {" "}
                    {ProblemSet.names[id]}
                  </h2>
                  <Markdown
                    className="problemSolution"
                    escapeHtml={true}
                    source={this.state.solution}
                  />
                </TabPanel>

                <TabPanel>
                  <NoteEditor />
                </TabPanel>
              </Tabs>

              <div style={{ width: "100%" }}>
                <Editor
                  judgecase={ProblemSet.inputs[id]}
                  testcase={ProblemSet.testcases[id]}
                  code={this.state.markdown}
                  test={this.state.test}
                  submit={this.state.submit}
                  name={ProblemSet.names[id]}
                  index={id}
                />
                <br />
              </div>
            </SplitterLayout>
          </div>
        </div>
      </div>
    );
  }
}

export default Compile;
