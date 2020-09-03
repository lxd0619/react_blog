import React, { Component } from "react";
import { Button } from "antd";
import Editor from "for-editor";
var WebFS = require("web-fs");

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  fnClick = () => {
    var fs = null;
    navigator.webkitPersistentStorage.requestQuota(1024 * 1024, function (
      grantedBytes
    ) {
      window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes, function (
        result
      ) {
        fs = WebFS(result.root);
        console.log(fs);
      });
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Button style={{ float: "right" }} onClick={() => this.fnClick()}>
          保存
        </Button>
        <Editor
          style={{ clear: "both" }}
          preview={false}
          value={value}
          onChange={(value) => {
            console.log(value);
            this.setState({ value });
          }}
        />
      </div>
    );
  }
}

export default Edit;
