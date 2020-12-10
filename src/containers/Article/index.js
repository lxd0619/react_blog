/* eslint-disable */
import React, { Component } from "react";
import { Card } from "antd";
import ReactMarkdown from "react-markdown";
import CodeBloack from "../../utils/CodeBloack";
import HeadingBlock from "../../utils/HeadingBlock";
import { getQueryString } from "Utils";
import { BackTop } from "antd";
export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(getQueryString(this.props.location.search, "path"));
    // this.props.location.query &&
    //   fetch(this.props.location.query.path)
    getQueryString(this.props.location.search, "path") &&
      fetch(getQueryString(this.props.location.search, "path"))
        .then((res) => res.text())
        .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    const style = {
      height: 40,
      width: 40,
      lineHeight: "40px",
      borderRadius: 4,
      backgroundColor: "#1088e9",
      color: "#fff",
      textAlign: "center",
      fontSize: 14,
    };
    return (
      <div style={{ margin: "50px" }}>
        <Card bordered={false}>
          <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={false}
            renderers={{
              code: CodeBloack,
              heading: HeadingBlock,
            }}
          />
        </Card>
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </div>
    );
  }
}

export default Articles;
