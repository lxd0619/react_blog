import React, { Component } from "react";
import { ResizableBox } from "react-resizable";
import Style from "./style.module.scss";

export class Resizable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageInfo: [
        { title: " 网页可见区域宽：", code: document.body.clientWidth },
        { title: " 网页可见区域高：", code: document.body.clientHeight },
        {
          title: " 网页可见区域宽(包括边线和滚动条的宽)：",
          code: document.body.offsetWidth,
        },
        {
          title: " 网页可见区域高(包括边线的宽)：",
          code: document.body.offsetHeight,
        },
        { title: " 网页正文全文宽：", code: document.body.scrollWidth },
        { title: " 网页正文全文高：", code: document.body.scrollHeight },
        { title: " 网页被卷去的高(ff)：", code: document.body.scrollTop },
        {
          title: " 网页被卷去的高(ie)：",
          code: document.documentElement.scrollTop,
        },
        { title: " 网页被卷去的左：", code: document.body.scrollLeft },
        { title: " 网页正文部分上：", code: window.screenTop },
        { title: " 网页正文部分左：", code: window.screenLeft },
        { title: " 屏幕分辨率的高：", code: window.screen.height },
        { title: " 屏幕分辨率的宽：", code: window.screen.width },
        { title: " 屏幕可用工作区高度：", code: window.screen.availHeight },
        { title: " 屏幕可用工作区宽度：", code: window.screen.availWidth },
        {
          title: " 你的屏幕设置是(位彩色)： ",
          code: window.screen.colorDepth,
        },
        {
          title: " 你的屏幕设置(像素/英寸)：",
          code: window.screen.deviceXDPI,
        },
      ],
    };
  }

  componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll.bind(this)); //监听滚动
    // window.addEventListener("resize", this.handleResize.bind(this)); //监听窗口大小改变
  }

  componentWillUnmount() {
    //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    // window.removeEventListener("scroll", this.handleScroll.bind(this));
    // window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleScroll = (e) => {
    console.log(
      "浏览器滚动事件",
      e.srcElement.scrollingElement.scrollTop,
      e.srcElement.scrollingElement.scrollHeight
    );
    //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
    // e.srcElement.scrollingElement.scrollHeight为整个文档高度
  };

  handleResize = (e) => {
    let arr = [];
    this.state.pageInfo.map((item) => arr.push({ item, value: item.code }));
    // console.log(arr);
  };

  render() {
    return (
      <div>
        <ResizableBox
          className={Style.box}
          width={200}
          height={document.body.clientHeight || 300}
          minConstraints={[100, document.body.clientHeight]}
          maxConstraints={[300, document.body.clientHeight]}
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
          {this.props.children || (
            <span className={Style.text}>Only resizable by "x" axis.</span>
          )}
        </ResizableBox>
      </div>
    );
  }
}

export default Resizable;
