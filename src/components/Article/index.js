import React, { Component } from "react";
import { Card } from "antd";
import ReactMarkdown from "react-markdown";
import CodeBloack from "../../utils/CodeBloack";
import HeadingBlock from "../../utils/HeadingBlock";

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    console.log(5444, this.props);
    fetch(this.props.md)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  componentWillReceiveProps() {
    console.log("props", this.props);
  }

  render() {
    const { md } = this.props;
    const { markdown } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default Articles;
