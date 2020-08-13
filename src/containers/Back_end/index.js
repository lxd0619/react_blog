import React, { Component } from "react";
import { Button } from "antd";

export class backend extends Component {
  render() {
    return (
      <>
        <div>后端</div>
        <Button
          type="primary"
          onClick={() => {
            this.props.history.push("/frontend");
          }}
        >
          go
        </Button>
      </>
    );
  }
}

export default backend;
