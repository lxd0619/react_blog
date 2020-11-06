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

  componentDidMount() {
    this.props.location.query &&
      fetch(this.props.location.query.path)
        .then((res) => res.text())
        .then((text) => this.setState({ markdown: text }));
  }

  render() {
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
