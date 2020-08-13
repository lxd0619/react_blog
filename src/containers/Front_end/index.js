import React, { Component } from "react";
import { Button } from "antd";

export class frontend extends Component {
  render() {
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
      </>
    );
  }
}

export default frontend;
