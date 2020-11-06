import React, { Component } from "react";
import { ResizableBox } from "react-resizable";
import Style from "./style.module.scss";

export class Resizable extends Component {
  render() {
    return (
      <div>
        <ResizableBox
          className={Style.box}
          width={200}
          height={300}
          axis="x"
          handle={
            <span
              className={Style.resizableHandle}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          }
        >
          <span className={Style.text}>Only resizable by "x" axis.</span>
        </ResizableBox>
      </div>
    );
  }
}

export default Resizable;
