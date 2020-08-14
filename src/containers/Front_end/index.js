import React, { Component } from "react";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";
import htmlParser from "react-markdown/plugins/html-parser";
import CodeBlock from "../../utils/CodeBloack";
// import testMd from "../../static/test.md";

export class frontend extends Component {
  render() {
    const parseHtml = htmlParser({
      isValidNode: (node) => node.type !== "script",
      processingInstructions: [
        /* ... */
      ],
    });
    let markdown =
      "# 这是标题\n" +
      "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
      "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
      "**这是加粗的文字**\n\n" +
      "*这是倾斜的文字*`\n\n" +
      "***这是斜体加粗的文字***\n\n" +
      "~~这是加删除线的文字~~ \n\n" +
      "`console.log(Hello World)` \n\n" +
      "```const a=2; ```";
    return (
      <>
        <div>前端</div>
        <Button
          type="primary"
          onClick={() => {
            this.props.history.push("/backend");
          }}
        >
          Go backend
        </Button>
        <ReactMarkdown
          source={markdown}
          escapeHtml={false} //不进行HTML标签的转化
          renderers={{
            code: CodeBlock,
          }}
        />
        {/* <ReactMarkdown
          source={testMd}
          escapeHtml={false}
          astPlugins={[parseHtml]}
        /> */}
      </>
    );
  }
}

export default frontend;
