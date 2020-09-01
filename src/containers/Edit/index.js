import React, { Component } from "react";
import Editor from "for-editor";

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Editor
          preview
          value={value}
          onChange={(value) => {
            this.setState({ value });
          }}
        />
      </div>
    );
  }
}

export default Edit;
